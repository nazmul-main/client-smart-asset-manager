import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

import ReqCart from "./ReqCart";
import SectionTiltle from "../../Components/SectionTiltle";

const MyCoustomRequest = () => {
    const axiosPublic = useAxiosPublic()


    const { data: asssets = [], refetch, isLoading: asetLoadingg } = useQuery({
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
            <SectionTiltle  heading={'my coustom request'}></SectionTiltle>


            {asssets && asssets.length > 0 && (
                <div className="grid grid-cols-1  gap-5 items-center justify-center">
                    {asssets.map((asset) => (
                        <ReqCart key={asset._id} asset={asset} refetch={refetch}></ReqCart>
                    ))}
                </div>
            )}



        </div>
    );
};

export default MyCoustomRequest;