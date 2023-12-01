/* eslint-disable react/prop-types */

import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
// import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
// import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';

const TeamList = ({ team, index, refetch}) => {
    const axiosSecure = useAxiosPublic()
    const {user} = useAuth()
    const currnetUser = user.email;
    console.log(currnetUser);

    const { name, role, image , adminEmail ,_id} = team;
    console.log(adminEmail);


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
                axiosSecure.delete(`/add-team-delete/${_id}`)
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
            <div className="relative overflow-x-auto  mx-8 my-12  " >

             

                <table className="w-8/12 mx-auto text-sm text-left rtl:text-right text-gray-500 mb-">
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
                                Remove
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
                                
                                    <button
                                        onClick={() =>habdleDelete(_id)}
                                        className="btn hover:font-semibold text-[16px] hover:text-xl btn-md hover:bg-[#d14249] bg-[#d14249] rounded-full py-2"
                                    >
                                        <FaTrashAlt className="text-white text-center" />
                                    </button>
                             
                            </td>

                        </tr>
                    </tbody>
                </table>


            </div >
        </div>
    );
};

export default TeamList;