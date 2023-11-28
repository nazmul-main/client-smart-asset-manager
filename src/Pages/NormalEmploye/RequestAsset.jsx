import { useQuery } from "@tanstack/react-query";
import SectionTiltle from "../../Components/SectionTiltle";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const RequestAsset = () => {

    const axiosPublic = useAxiosPublic()
    const { data: asssets = [], } = useQuery({

        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get('/assets')
            return res.data
        },
    })






    return (
        <div className="max-w-screen-xl mx-auto px-4">
            <SectionTiltle
                subHeading={'---Check it out---'}
                heading={'Request an Asset'}
            ></SectionTiltle>

            <div className="relative overflow-x-auto shadow-md sm:rounded-MD mx-8 my-12 " >
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-green-200 ">
                        <tr>
                            <th scope="col" className="px-6 py-5 text-center">
                                No
                            </th>
                            <th scope="col" className="px-6 py-5 text-center">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-5 text-center">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-5 text-center">
                                Type
                            </th>
                            <th scope="col" className="px-6 py-5 text-center">
                                Availability
                            </th>
                            <th scope="col" className="px-6 py-5 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {asssets?.map((asset, index) => (
                            <tr key={asset._id} className="odd:bg-gray-100 even:bg-white   ">
                                <td className="w-1/12 py-2 text-center ">{index + 1}</td>
                                <td className="px-4 py-4 font-medium  text-gray-900 whitespace-nowrap ">
                                    <img className='w-12 h-12 mx-auto' src={asset.image} alt="" />
                                </td>
                                <td className="px-4 md:text-[16px]  py-4  text-center font-medium text-gray-900 whitespace-nowrap ">
                                    {asset.name}
                                </td>
                                <td className="px-4 md:text-[16px] py-4 text-center">
                                    {asset.type}
                                </td>
                                <td className="px-4 md:text-[16px] py-4 text-center">
                                    {asset.quantity}
                                </td>

                                <td className="px-4 md:text-[16px] py-4 text-center">

                                    <Link to={`/adminHome/update-assets/${asset._id}`}>
                                        {asset?.quantity >= 0 ? <button

                                            className="btn hover:font-semibold text-[16px] btn-md hover:bg-[#205427db] bg-[#23611b] rounded-full py-2 text-emerald-50 ">Request

                                        </button> : <button
                                            disabled
                                            className="btn hover:font-semibold text-[16px] btn-md hover:bg-[#205427db] bg-[#23611b] rounded-full py-2 text-emerald-50 ">Request

                                        </button>}
                                    </Link>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default RequestAsset;