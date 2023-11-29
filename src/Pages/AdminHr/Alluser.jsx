/* eslint-disable react/prop-types */
import { FaAddressBook } from "react-icons/fa";
import { Link } from "react-router-dom";


const Alluser = ({ asset,  index }) => {


    const { image, name, role } = asset;





    return (
        <div className="relative overflow-x-auto  mx-8 my-12  " >

            <table className="w-10/12 mx-auto text-sm text-left rtl:text-right text-gray-500 mb-">
                <thead className="text-xs text-gray-700 uppercase bg-green-200  ">
                    <tr className="text-center">
                        <th scope="col" className="p-4">
                            No
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Type
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Add to the team
                        </th>
                    </tr>

                </thead>
                <tbody>
                <tr className="odd:bg-gray-100 even:bg-white   ">
                    <td className="w-1/12 py-2 text-center ">{index + 1}</td>
                    <td className="px-4 py-4 font-medium  text-gray-900 whitespace-nowrap ">
                        <img className='w-12 h-12 mx-auto object-cover rounded-full' src={image} alt="" />
                    </td>
                    <td className="px-4 md:text-[16px]  py-4  text-center font-medium text-gray-900 whitespace-nowrap ">
                        {name}
                    </td>
                    <td className="px-4 md:text-[16px] py-4 text-center">
                        {role}
                    </td>


                    <td className="px-4 md:text-[16px] py-4 text-center">

                        <Link to={`/adminHome/update-assets/${asset._id}`}>
                            <button

                                className="btn hover:font-semibold text-[16px] hover:text-xl btn-md hover:bg-[#205427db] bg-[#23611b] rounded-full py-2 ">
                                < FaAddressBook className=" text-white  text-center "> </FaAddressBook>

                            </button></Link>
                    </td>

                </tr>
            </tbody>
        </table>


        </div >
    );
};

export default Alluser;