import { useQuery } from "@tanstack/react-query";
import SectionTiltle from "../../Components/SectionTiltle";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import RequestedModal from "./RequestedModal";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const RequestAsset = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [item, setItem] = useState(' ')


    const openModal = (asset) => {
        setItem(asset)
        console.log(asset);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };






    const axiospublic = useAxiosPublic();
    const { user } = useAuth();
    console.log(user);
    const cur = user?.email;
    console.log(cur);
    // console.log(currentUser);

    const { data: yours = [] } = useQuery({
        queryKey: ["assetAdmin", cur],
        queryFn: async () => {
            const res = await axiospublic.get(`/add-team-one?email=${cur}`);
            console.log(res.data);
            return res.data;
        },
    });
    const yourAdmin = yours?.adminEmail
    console.log(yourAdmin);



    const axiosPublic = useAxiosPublic()
    const { data: asssets, refetch } = useQuery({
        queryKey: ['requestedasset', yourAdmin],
        queryFn: async () => {
            const res = await axiosPublic.get(`/assets-filter?email=${yourAdmin}`)
            console.log(res.data);
            return res.data
        },
        initialData: []
    })

    /*   ----------------------------------------------------------------
              shorting / search/
  ---------------------------------------------------------------- */





    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };


    const filterAndSortAssets = (assets) => {
        // Filter by search query
        let filteredAssets = assets.filter((asset) =>
            asset.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        // Filter by category
        if (selectedCategory !== 'All') {
            filteredAssets = filteredAssets.filter((asset) => asset.type === selectedCategory);
        }

        // Sort by quantity




        return filteredAssets;
    };

    const filteredAndSortedAssets = filterAndSortAssets(asssets);



    /*  ----------------------------------------------------------------
                
    ---------------------------------------------------------------- */








    return (
        <div className="max-w-screen-xl mx-auto px-4">
            <SectionTiltle
                subHeading={'---Check it out---'}
                heading={'Request an Asset'}
            ></SectionTiltle>
            <Helmet>
                <title>Employe | Request Asset</title>
            </Helmet>
            {/* Search, Filter, and Sort Section */}
            <div className="my-5">
                <form className="flex flex-col md:flex-row gap-3 w-1/2 mx-auto">
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Search for the tool you like"
                            className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-[#286d39] focus:outline-none focus:border-[#286d39]"
                            value={searchQuery}
                            onChange={handleSearchChange}
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
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                    >
                        <option value="All">All Type</option>
                        <option value="Returnable">Returnable</option>
                        <option value="Non-returnable">Non-returnable</option>
                    </select>
                </form>
            </div>

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
                        {filteredAndSortedAssets?.map((asset, index) => (
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
                                    {asset.quantity > 0 ? 'Available' : 'Out of Stock'}
                                </td>


                                <td className="px-4 md:text-[16px] py-4 text-center">

                                    <div>
                                        {asset?.quantity > 0 ? <button
                                            // onClick={openModal}
                                            onClick={() => openModal(asset)}
                                            className="btn hover:font-semibold text-[16px] btn-md hover:bg-[#205427db] bg-[#23611b] rounded-full py-2 text-emerald-50 ">Request

                                        </button> : <button
                                            disabled
                                            className="cursor-none btn hover:font-semibold text-[16px] btn-md hover:bg-[#205427db] bg-[#23611b] rounded-full py-2 text-emerald-50 ">Request

                                        </button>}

                                    </div>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
                {item && <RequestedModal yourAdmin={yourAdmin} asset={item} isOpen={isModalOpen} closeModal={closeModal} refetch={refetch} />}
            </div>

        </div>
    );
};

export default RequestAsset;