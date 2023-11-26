import { useEffect, useState } from 'react';
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link, useLoaderData } from 'react-router-dom';

const AssetList = () => {
    const axiosPublic = useAxiosPublic()
    const [data, setData] = useState('');
    const data1 = useLoaderData()
console.log(data1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosPublic.get('http://localhost:5007/api/v1/assets');
                console.log('Data:', response.data);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
                throw new Error('Error fetching data: ' + error.message);
            }
        };

        fetchData();
    }, [axiosPublic]);

    if (!data) {
        return <p>Loading...</p>;
    }

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-8">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 d da">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            No
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Asset Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Asset Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Type
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Current Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Update
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((asset, index) => (
                        <tr key={asset._id} className="odd:bg-gray-100 even:bg-white   ">
                            <td className="w-1/12 py-2 text-center">{index + 1}</td>
                            <td className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                <img className='w-12 h-12' src={asset.image} alt="" />
                            </td>
                            <td className="px-4 md:text-[16px]  py-4 font-medium text-gray-900 whitespace-nowrap ">
                                {asset.name}
                            </td>
                            <td className="px-4 md:text-[16px] py-4">
                                {asset.type}
                            </td>
                            <td className="px-4 md:text-[16px] py-4">
                                {asset.quantity}
                            </td>
                            <td className="px-4 md:text-[16px] py-4">
                                {asset.currentDate}
                            </td>
                            <td className="px-4 md:text-[16px] py-4">

                                <Link to={`adminHome/assetUpdate/${asset?._id}`}> 
                                    <button
                                        className="btn hover:font-semibold text-[16px] hover:text-xl btn-md hover:bg-[#205427db] bg-[#23611b] py-2 ">
                                        < FaRegEdit className=" text-white   "> </FaRegEdit>
                                    </button></Link>
                            </td>
                            <td className="px-4 py-4">
                                <button
                                    className="btn text-[16px] hover:text-xl md:btn-md btn-sm hover:bg-[#b91c1cdb] bg-[#f13838] py-2 ">
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
