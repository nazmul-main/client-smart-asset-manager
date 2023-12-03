import { useQuery } from "@tanstack/react-query";
import SectionTiltle from "../../../Components/SectionTiltle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";


const LimitedStoke = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const currUser = user.email;

    const { data: asssets = [], refetch, isLoading } = useQuery({
        queryKey: ['filter_asset_email'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/assets-filter?email=${currUser}`)
            console.log(res.data);
            return res.data
        },
    })
    refetch()
    console.log(asssets)
    if (isLoading) {
        return <p>loading...</p>
    }

    const pendingData = asssets?.filter(asset => asset?.quantity);
    const assetsWithQuantityLessThan10 = pendingData.filter(asset => asset.quantity < 10);





    return (
        <div className="">
           
            <SectionTiltle heading={'Limited Stock items'}></SectionTiltle>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-red-200 ">
                    <tr>
                        <th scope="col" className="px-4 py-3 text-center">
                            No
                        </th>
                        <th scope="col" className="px-4 py-3 text-center">
                            Image
                        </th>
                        <th scope="col" className="px-4 py-3 text-center">
                            Name
                        </th>
                        <th scope="col" className="px-4 py-3 text-center">
                            Type
                        </th>

                        <th scope="col" className="px-4 py-3 text-center">
                            quantity
                        </th>


                    </tr>
                </thead>
                <tbody>
                    {assetsWithQuantityLessThan10.map((asset, index) => (
                        <tr key={asset._id} className="even:bg-gray-100 odd:bg-red-50   ">
                            <td className="w-1/12 py-2 text-center ">{index + 1}</td>
                            <td className="w-1/12 py-2 text-center ">
                                <img className="w-14 h-14" src={asset?.image} alt="" />
                            </td>
                            <td className="w-1/12 py-2 text-center ">{asset?.name}</td>
                            <td className="w-1/12 py-2 text-center ">{asset?.type}</td>
                            <td className="w-1/12 py-2 text-center ">{asset?.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LimitedStoke;