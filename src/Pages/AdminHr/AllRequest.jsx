import Swal from "sweetalert2";
import SectionTiltle from "../../Components/SectionTiltle";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Helmet } from "react-helmet-async";


const AllRequest = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const axiosSecure = useAxiosSecure()
    // const currentDate = moment().format('YYYY-MM-DD');

    const { data: assets = [], refetch } = useQuery({
        queryKey: ['all-request-asset'],
        queryFn: async () => {
            const res = await axiosSecure.get('/assets-request')
            console.log(res.data);
            return res.data;
        },
    });
    refetch()


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


    const handleAproved = async (_id) => {

        const res = await axiosSecure.put(`/assets-request-update/${_id}`)
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

    /* sratch funioun */
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
    };

    const filteredAssets = assets.filter(
        (asset) =>
            asset.nameRequester.toLowerCase().includes(searchQuery.toLowerCase()) ||
            asset.emailRequester.toLowerCase().includes(searchQuery.toLowerCase())
    );







    return (
        <div>
            <SectionTiltle subHeading={'-----requested list-----'} heading={' All Request'} />
            <Helmet>
                <title>Admin | All Request</title>
            </Helmet>
            <div className="max-w-screen-xl mx-auto px-4 my-12 min-h-screen">
                <div>
                    <div>
                        <form className="flex w-8/12 mx-auto" onSubmit={handleSearchSubmit}>
                            <div className="flex w-full justify-center items-center ">
                                <input
                                    type="text"
                                    placeholder="Search for the requester name or email"
                                    className="w-full px-3 h-12 rounded-l border-2 border-[#286d39] focus:outline-none focus:border-[#286d39]"
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                />
                                <button
                                    type="submit"
                                    className="bg-[#286d39] text-white rounded-r px-2 md:px-10 py-3 md:py-3"
                                >
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="mt-14">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-green-200 ">
                            <tr>

                            </tr>
                        </thead>

                        <tbody>
                            {
                                filteredAssets.map((asset, index) => (
                                    <tr key={asset?._id} className="odd:bg-gray-100 even:bg-white relative">
                                        <td className="px-4 py-4 font-medium  text-gray-900 whitespace-nowrap ">
                                            <div className="md:flex  justify-start items-center ">
                                                <div className="w-3/6">
                                                    <h1
                                                        className=" border-[#1a0808] border-4 font-bold text-[#1a0808] rounded-full p-2 text-center text-4xl absolute inline  ">
                                                        {index + 1}
                                                    </h1>
                                                    <img className=' w-3/6 mx-auto object-cover rounded-md' src={asset?.assetImage} alt="" />
                                                </div>
                                                <div className="space-y-2">
                                                    <p className="text-xl md:text-2x lg:text-4xl">{asset?.assetName}</p>
                                                    <p className="text-xl"> Type: {asset?.assetType}</p>
                                                    <p> Reiquer Name: {asset?.nameRequester}</p>
                                                    <p> Reiquer Email: {asset?.emailRequester}</p>
                                                    <p className="text-md"> Request Date: {asset?.requestDate}</p>
                                                    <p>Additional Note📝: {asset?.additionalnote}</p>
                                                    <p>  Status: {asset?.status}</p>
                                                    {asset?.status === 'Approved ✔️' ?
                                                        <button
                                                            disabled
                                                            onClick={() => handleAproved(asset?._id)}
                                                            className="mr-3 p-2 rounded-md text-white disabled:bg-gray-400 disabled:cursor-not-allowed"
                                                        >
                                                            Already Aprove
                                                        </button>
                                                        :
                                                        <button onClick={() => handleAproved(asset?._id)} className="mr-3 bg-green-900 p-2 rounded-md text-white"> Aprove</button>
                                                    }
                                                    <button onClick={() => habdleDelete(asset?._id)} className="rounded-md bg-red-800 text-white p-2">Reject</button>
                                                </div>
                                            </div>
                                        </td>

                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllRequest;