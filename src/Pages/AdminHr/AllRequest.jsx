import Swal from "sweetalert2";
import SectionTiltle from "../../Components/SectionTiltle";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const AllRequest = () => {

    const axiosSecure = useAxiosSecure()

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
                        console.log(res.data);
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
        <div>
            <SectionTiltle subHeading={'-----requested list-----'} heading={' All Request'} />
            <div className="max-w-screen-xl mx-auto px-4 my-12 min-h-screen">
                <div>
                    <div>
                        <form className="flex flex-col md:flex-row gap-3 w-1/2 mx-auto">
                            <div className="flex">
                                <input
                                    type="text"
                                    placeholder="Search for the tool you like"
                                    className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-[#286d39] focus:outline-none focus:border-[#286d39]"
                                // value={searchQuery}
                                // onChange={handleSearchChange}
                                />
                                <button
                                    type="submit"
                                    className="bg-[#286d39] text-white rounded-r px-2 md:px-3 py-0 md:py-1"
                                >
                                    Search
                                </button>
                            </div>
                            <select
                                id="pricingType"
                                name="pricingType"
                                className="w-full h-10 border-2 border-[#286d39] focus:outline-none focus:border-[#286d39] text-[#286d39] rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
                            // value={selectedCategory}
                            // onChange={handleCategoryChange}
                            >
                                <option value="All">All Category</option>
                                <option value="Cooking">Cooking</option>
                                <option value="Travel">Travel</option>
                            </select>
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
                                assets?.map((asset, index) => (
                                    <tr key={asset._id} className="odd:bg-gray-100 even:bg-white relative">
                                        <td className="px-4 py-4 font-medium  text-gray-900 whitespace-nowrap ">
                                            <div className="flex  justify-start items-center ">
                                                <div className="w-3/6">
                                                    <h1
                                                        className=" border-[#1a0808] border-4 font-bold text-[#1a0808] rounded-full p-2 text-center text-4xl absolute inline  ">
                                                        {index + 1}
                                                    </h1>
                                                    <img className=' w-3/6 mx-auto object-cover rounded-md' src={asset.assetImage} alt="" />
                                                </div>
                                                <div className="space-y-2">
                                                    <p className="text-xl md:text-2x lg:text-4xl">{asset.assetName}</p>
                                                    <p className="text-xl"> Type: {asset.assetType}</p>
                                                    <p> Reiquer Name: {asset.nameRequester}</p>
                                                    <p> Reiquer Email: {asset.emailRequester}</p>
                                                    <p className="text-md"> Request Date: {asset.requestDate}</p>
                                                    <p>Note: {asset.additionalnote}</p>
                                                    <p>  Status: {asset.status}</p>
                                                    <button className="mr-3 bg-green-900 p-2 rounded-md text-white">Aprove</button>
                                                    <button onClick={() => habdleDelete(asset._id)} className="rounded-md bg-red-800 text-white p-2">Reject</button>
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