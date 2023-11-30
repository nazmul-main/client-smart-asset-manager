// import { useEffect, useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { } from "react-icons/fa";
import Swal from 'sweetalert2';
import { useState } from "react";
import ModalAssetUpdate from "./ModalAssetUpdaate";
import SectionTiltle from "../../Components/SectionTiltle";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AssetList = () => {

    const { user } = useAuth;
    const axiosPublic = useAxiosSecure()

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortBy, setSortBy] = useState(0);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    // const axiosPublic = useAxiosPublic()
    // const { data: asssets = [], refetch } = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async () => {
    //         const res = await axiosPublic.get('/assets')
    //         return res.data
    //     },
    // })

    const assetapi = `http://localhost:5001/api/v1/assets?email=${user?.email}`

    const assetes = async () => {
        try {
            const response = await fetch(assetapi);
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error('Error fetching data: ' + error.message);
        }
    };

    const { data: asssets, isLoading, refetch } = useQuery(
        {
            queryKey: [`/assets?email=${user?.email}`],
            queryFn: assetes
        }
        )
        console.log(asssets)
        if (isLoading) {
        return <p>loading...</p>
    }


    /*   ----------------------------------------------------------------
              shorting / search/
  ---------------------------------------------------------------- */


  


    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
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
        filteredAssets.sort((a, b) => {
            if (sortBy !== '') {
                return a.quantity - b.quantity;
            }
          

            return 0;
        });



        return filteredAssets;
    };

    const filteredAndSortedAssets = filterAndSortAssets(asssets);



    /*  ----------------------------------------------------------------
                
    ---------------------------------------------------------------- */

    /* Deletehabdle */
    const handleDelete = (id) => {
        console.log(id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be delete  this cart!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`http://localhost:5001/api/v1/assets/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        })


    };


    if (!asssets) {
        return <p>Loading...</p>;
    }

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-MD mx-8 my-12 ">
            {/* title */}
            <SectionTiltle subHeading={'SEE TOUR ALL ASSET'} heading={'ASSET LIST'} />


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
                        <option value="All">All Category</option>
                        <option value="Returnable">Returnable</option>
                        <option value="Non-returnable">Non-returnable</option>
                    </select>
                    <input
                        id="sortBy"
                        name="sortBy"
                        className="w-full h-10 border-2 border-[#286d39] focus:outline-none focus:border-[#286d39] text-[#286d39] rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
                        value={sortBy}
                        onChange={handleSortChange}
                        type="number"
                        placeholder="Sort by Quantity"
                    />
                </form>
            </div>



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
                            Quantity
                        </th>
                        <th scope="col" className="px-6 py-5 text-center">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-5 text-center">
                            Update
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
                           <div>
                           <td className="px-4 md:text-[16px]  py-4  text-center font-medium text-gray-900 whitespace-nowrap ">
                                {asset.name}
                            </td>
                            <p></p>
                           </div>
                            <td className="px-4 md:text-[16px] py-4 text-center">
                                {asset.type}
                            </td>
                            <td className="px-4 md:text-[16px] py-4 text-center">
                                {asset.quantity}
                            </td>
                            <td className="px-4 md:text-[16px] py-4 text-center">
                                {asset.currentDate}
                            </td>
                            <td className="px-4 md:text-[16px] py-4 text-center">


                                <button className="text-white btn hover:font-semibold text-[16px] hover:text-xl btn-md hover:bg-[#205427db] bg-[#23611b] rounded-full py-2"
                                    onClick={openModal}>
                                    <FaEdit></FaEdit>
                                </button>
                                <ModalAssetUpdate asset={asset} isOpen={isModalOpen} closeModal={closeModal} refetch={refetch} />
                            </td>
                            <td className="px-4 py-4 text-center">
                                <button
                                    onClick={() => handleDelete(asset._id)}
                                    className=" btn text-[16px] hover:text-xl md:btn-md btn-sm hover:bg-[#b91c1cdb] bg-[#f13838] rounded-full py-2 ">
                                    <FaTrashAlt FaRegEdit className=" text-white "> </FaTrashAlt>
                                </button>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default AssetList;
