
import {  FaPrint } from "react-icons/fa";
import SectionTiltle from "../../Components/SectionTiltle";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MyAsset = () => {
    const axiosSecure = useAxiosSecure()

    const { data: assets = [], refetch } = useQuery({
        queryKey: ['all--asset'],
        queryFn: async () => {
            const res = await axiosSecure.get('/assets-request')
            console.log(res.data);
            return res.data;
        },
    });
    refetch()



    return (
        <div className="max-w-screen-xl px-4 md:px-12 mx-auto">
            <SectionTiltle subHeading={'All of my  assets'} heading={'MY ASSET'} />
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-green-200 ">
                    <tr>
                        <th scope="col" className="px-6 py-5 text-center">
                            No
                        </th>
                        <th scope="col" className="px-6 py-5 text-center">
                            Asset Name
                        </th>
                        <th scope="col" className="px-6 py-5 text-center">
                            Asset Image
                        </th>
                        <th scope="col" className="px-6 py-5 text-center">
                            Request Date
                        </th>
                        <th scope="col" className="px-6 py-5 text-center">
                            Approval Date

                        </th>
                        <th scope="col" className="px-6 py-5 text-center">
                            Request Status
                        </th>
                        <th scope="col" className="px-6 py-5 text-center">
                            Action
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {assets?.map((asset, index) => (
                        <tr key={asset?._id} className="odd:bg-gray-100 even:bg-white   ">
                            <td className="w-1/12 py-2 text-center ">{index + 1}</td>
                            <td className="px-4 md:text-[16px]  py-4  text-center font-medium text-gray-900 whitespace-nowrap ">
                                {asset?.assetName}
                            </td>
                            <td className="px-4 py-4 font-medium  text-gray-900 whitespace-nowrap ">
                                <img className='w-12 h-12 mx-auto' src={asset?.assetImage} alt="" />
                            </td>
                            <td className="px-4 md:text-[16px] py-4 text-center">
                                {asset?.requestDate}
                            </td>
                            {asset?.status === 'pending' ? <td className="px-4 md:text-[16px] py-4 text-center">
                                {'---'}
                            </td>
                                :
                                <td className="px-4 md:text-[16px] py-4 text-center">
                                    {'ApprovalDate'}
                                </td>
                            }
                            <td className="px-4 md:text-[16px] py-4 text-center">
                                {asset?.status}
                            </td>

                            <td className="px-4 md:text-[16px] py-4 text-center">
                                {asset?.status === 'pending' && (
                                    <button
                                    className="text-white hover:text-red-500 600 btn hover:font-semibold text-[16px]  btn-md hover:bg-[#ffffffdb] bg-[#ff5555db] rounded-full py-2"
                                    // onClick={() => handleCancelRequest()}
                                    >
                                        Cancel
                                    </button>
                                )}

                                {asset?.status === 'Approved ✔️' && asset?.assetType === 'Returnable' && (
                                    <button
                                        className="text-white hover:text-green-600 btn hover:font-semibold text-[16px]  btn-md hover:bg-[#ffffffdb] bg-[#23611b] rounded-full py-2"
                                    // onClick={() => handleReturn()}
                                    // disabled={asset?.status === 'Returnable'}
                                    >
                                        Return
                                    </button>
                                )}

                                {asset?.status === 'Approved ✔️' && (

                                    <button
                                        className="text-white btn hover:font-semibold text-[16px] hover:text-xl btn-md hover:bg-[#205427db] bg-[#23611b] rounded-full py-2"
                                    // onClick={() => handlePrint()}
                                    >
                                        <FaPrint FaRegEdit className=" text-white "> </FaPrint>

                                    </button>

                                )}


                            </td>


                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyAsset;