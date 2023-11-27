import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const MyCoustomRequest = () => {
    const axiosPublic = useAxiosPublic()

    const { data: asssets = [], } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get('/coustom-assets')
            return res.data
        },
    })




    if (!asssets) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2 className=" text-3xl text-center my-12 font-bold  ">My Coustom Request</h2>


            <div className="grid gap-8 col-span-1 md:col-span-2 items-center justify-center mx-auto ">
                {
                    asssets?.map((asset) =>(
                        <div key={asset._id} className="flex  flex-col items-center bg-white border border-gray-200 rounded-lg md:flex-row md:max-w-xl hover:bg-gray-100 shadow-md ">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={asset?.assetImage} alt="" />
                        <div className="flex flex-col justify-between items-start p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{asset?.assetName}</h5>
                            <p className="mb-3 font-normal text-gray-700 ">Price: {asset?.price}</p>
                            <p className="mb-3 font-normal text-gray-700 ">Type: {asset?.assetType}</p>
                            <button className="btn btn-primary "> View Details</button>
                        </div>
                    </div>
                    ))
                }
            </div>


        </div>
    );
};

export default MyCoustomRequest;