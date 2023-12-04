import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

import ReqCart from "./ReqCart";
import SectionTiltle from "../../Components/SectionTiltle";
import useAuth from "../../Hooks/useAuth";

const MyCoustomRequest = () => {
    const axiosPublic = useAxiosPublic()
    const {user} = useAuth();
    const currentUser = user?.email
    console.log(currentUser);


    const { data: asssets = [], refetch, isLoading: asetLoadingg } = useQuery({
        queryKey: ['coustomAsset-filter'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/coustom-assets-flter?email=${currentUser}`)
            console.log(res.data.length);
            return res.data
        },
    })

    const recentAssets = asssets.slice(0, 4);


    if (asetLoadingg) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <SectionTiltle  heading={'my coustom request'}></SectionTiltle>


            {recentAssets && recentAssets.length > 0 && (
                <div className="grid grid-cols-4  gap-5 items-center justify-center">
                    {recentAssets.map((asset) => (
                        <ReqCart key={asset._id} asset={asset} refetch={refetch}></ReqCart>
                    ))}
                </div>
            )}



        </div>
    );
};

export default MyCoustomRequest;