import { useEffect, useState } from 'react';
import { } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const AssetList = () => {
    const axiosPublic = useAxiosPublic();
    const [data, setData] = useState('');

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
                            <td className="px-4  py-4 font-medium text-gray-900 whitespace-nowrap ">
                                {asset.name}
                            </td>
                            <td className="px-4 py-4">
                                {asset.type}
                            </td>
                            <td className="px-4 py-4">
                                {asset.quantity}
                            </td>
                            <td className="px-4 py-4">
                                {asset.currentDate}
                            </td>
                            <td className="px-4 py-4">
                                <button className="font-medium text-blue-600  hover:underline"></button>
                            </td>
                            <td className="px-4 py-4">
                                <button className="font-medium text-blue-600  hover:underline"></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AssetList;
