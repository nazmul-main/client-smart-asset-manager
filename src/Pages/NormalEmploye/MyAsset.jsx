
import { FaPrint } from "react-icons/fa";
import SectionTiltle from "../../Components/SectionTiltle";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const MyAsset = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const currUser = user.email

    const { data: assets = [], refetch } = useQuery({
        queryKey: ['all--asset'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/assets-request-filter?email=${currUser}`)
            console.log(res.data);
            return res.data;
        },
    });
    refetch()


    const handleAproved = async (_id) => {

        const res = await axiosSecure.put(`/myassets-update/${_id}`)
        console.log(res.data);
        Swal.fire({
            position: "center",
            icon: "success",
            title: " Profile Updadeted successfully",
            showConfirmButton: false,
            timer: 1500
        });
        refetch()

    };

    const habdleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/assets-request-delete/${_id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Team Mwmbwe has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }




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
                                        onClick={() => habdleDelete(asset?._id)}
                                        className="text-white hover:text-red-500 600 btn hover:font-semibold text-[16px]  btn-md hover:bg-[#ffffffdb] bg-[#ff5555db] rounded-full py-2"
                                    // onClick={() => handleCancelRequest()}
                                    >
                                        Cancel
                                    </button>
                                )}

                                {asset?.status === 'returned ⏎' && (
                                    <button
                                        disabled
                                        className="text-white hover:text-green-600 btn hover:font-semibold text-[16px]  btn-md hover:bg-[#ffffffdb] bg-[#23611b] rounded-full py-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                                    // onClick={() => handleReturn()}
                                    // disabled={asset?.status === 'Returnable'}
                                    >
                                        Return
                                    </button>
                                )}

                                {asset?.status === 'Approved ✔️' && asset?.assetType === 'Returnable' && (
                                    <button
                                        onClick={() => handleAproved(asset?._id)}
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