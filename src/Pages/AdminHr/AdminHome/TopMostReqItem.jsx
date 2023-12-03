import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTiltle from "../../../Components/SectionTiltle";


const TopMostReqItem = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const currUser = user.email;

    const { data: assets = [], refetch } = useQuery({
        queryKey: ['all-asset-top-requests'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/assets-request-filter-admin?email=${currUser}`);
            return res.data;
        },
    });
    refetch()
    const mostRequ = assets?.filter(asset => asset?.assetId);
    console.log(mostRequ);
    const recentAssets = mostRequ.slice(0, 4);
    console.log(recentAssets);
    return (
        <div>
            <div className="">
                <SectionTiltle heading={'Top Request'}></SectionTiltle>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-yellow-200 ">
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
                                Request Date
                            </th>
                            <th scope="col" className="px-4 py-3 text-center">
                                Request Date
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {recentAssets.map((asset, index) => (
                            <tr key={asset._id} className="odd:bg-yellow-50 gray-100 even:bg-white   ">
                                <td className="w-1/12 py-2 text-center ">{index + 1}</td>
                                <td className="w-1/12 py-2 text-center ">
                                    <img className="w-14 h-14" src={asset?.assetImage} alt="" />
                                </td>
                                <td className="w-1/12 py-2 text-center ">{asset?.assetName}</td>
                                <td className="w-1/12 py-2 text-center ">{asset?.assetType}</td>
                                <td className="w-1/12 py-2 text-center ">{asset?.requestDate}</td>
                                <td className="w-1/12 py-2 text-center ">{asset?.length}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TopMostReqItem;