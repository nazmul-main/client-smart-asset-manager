import { useQuery } from "@tanstack/react-query";
import SectionTiltle from "../../Components/SectionTiltle";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const CoustomReqList = () => {
    const { user } = useAuth();
    const curUser = user?.email
    const axiosPublic = useAxiosPublic()

    const { data: coReq = [],refetch } = useQuery({
        queryKey: ['coReqList', curUser],
        queryFn: async () => {
            const res = await axiosPublic.get(`/coustom-assets-flter-admin?email=${curUser}`);
            console.log(res.data);
            return res.data;
        }
    })


    const handleDelete = (id) => {
        console.log(id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be delete  this cart!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/coustom-assets-request-delete/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        })


    };



    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-12">
             <Helmet>
                <title>Admin | Coustom Requst</title>
            </Helmet>
            <SectionTiltle
                subHeading={'see all coustom requests'}
                heading={'All coustom requests'}
            ></SectionTiltle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5  h-96  md:10 justify-center items-center">

                {

                    coReq?.map((asset) =>
                        <div key={asset._id}>

                            <div className="flex-row justify-centeritems-center bg-white border border-gray-200 rounded-lg shadow md:max-w-xl hover:bg-gray-100">
                                <div className="">
                                    <img className="w-40 h-40  mx-auto py-3" src={asset?.assetImage} alt="" />
                                </div>
                                <div className="flex flex-col w-full justify-between p-4 leading-normal space-y-2">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{asset?.assetName}</h5>
                                    <p ><span className="font-semibold">Price:</span> {asset?.price}</p>
                                    <p><span className="font-semibold">Asset Type:</span>  {asset?.assetType}</p>
                                    <p><span className="font-semibold">Why Need This:</span>  {asset?.whyNeed && asset?.whyNeed.split(' ').slice(0, 10).join(' ')}</p>
                                    <p> <span className="font-semibold">Additional information: </span> {asset?.additionalInfo && asset?.additionalInfo.split(' ').slice(0, 20).join(' ')}</p>

                                    <div className="flex gap-4">
                                        <button className="btn btn-primary">Approve</button>
                                        <button onClick={() => handleDelete(asset._id)} className="btn btn-accent">Reject</button>
                                    </div></div>
                            </div>



                        </div>
                    )

                }

            </div>
        </div>
    );
};

export default CoustomReqList;