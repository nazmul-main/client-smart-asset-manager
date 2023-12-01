import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

import ReqCart from "./ReqCart";

const MyCoustomRequest = () => {
    const axiosPublic = useAxiosPublic()

   
    const { data: asssets = [], refetch, isLoading:asetLoadingg} = useQuery({
        queryKey: ['coustomAsset'],
        queryFn: async () => {
            const res = await axiosPublic.get('/coustom-assets')
            return res.data
        },
    })




    if (asetLoadingg) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2 className=" text-3xl text-center my-12 font-bold  ">My Coustom Request</h2>


            <div className="grid gap-8 col-span-1 md:col-span-2 items-center justify-center mx-auto ">
                {
                    asssets?.map((asset) =>(
                        <ReqCart key={asset._id} asset={asset} refetch={refetch} > </ReqCart>
                    ))
                }
            </div>


        </div>
    );
};

export default MyCoustomRequest;