// import { useEffect, useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AssetList = () => {
    const axiosPublic = useAxiosPublic()


    const { data: asssets = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get('/assets')
            return res.data
        },
    })

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
                if(res.data.deletedCount > 0){
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
                                {asset.currentDate}
                            </td>
                            <td className="px-4 md:text-[16px] py-4 text-center">

                                <Link to={`/adminHome/update-assets/${asset._id}`}>
                                    <button

                                        className="btn hover:font-semibold text-[16px] hover:text-xl btn-md hover:bg-[#205427db] bg-[#23611b] rounded-full py-2 ">
                                        < FaRegEdit className=" text-white  text-center "> </FaRegEdit>

                                    </button></Link>
                            </td>
                            <td className="px-4 py-4 text-center">
                                <button
                                    onClick={() => handleDelete(asset._id)}
                                    className="btn text-[16px] hover:text-xl md:btn-md btn-sm hover:bg-[#b91c1cdb] bg-[#f13838] rounded-full py-2 ">
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
