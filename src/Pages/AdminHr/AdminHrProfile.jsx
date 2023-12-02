import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import UpdateModal from "../../Components/Profile/UpdateModal ";

const AdminHrProfile = () => {

    const axiospublic = useAxiosPublic();
    const { user } = useAuth();

    const currentUser = user?.email;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    const { data: yours = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiospublic.get(`/all-users-single?email=${currentUser}`);
            return res.data;
        },
    });
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div>
                <div className="  flex gap-12 justify-center items-center  p-6 shadow-2xl shadow-[#296835] rounded-xl sm:px-12 bg-[#ecfdef5e] space-y-10">
                    <img src="https://source.unsplash.com/150x150/?portrait?3" alt="" className="md:w-52 md:h-52 h-32 w-32 shadow-gray-700 ck shadow-md mx-auto rounded-full " />
                    <div className="space-y-6 text-center divide-y  ">
                        <div className="my-2 space-y-5">
                            <h2 className="text-4xl font-semibold ">{yours?.adminname}</h2>
                            <h2 className="px-5 text-xs sm:text-base ">{yours?.email}</h2>
                            <p className="px-5 text-xs sm:text-base ">Birthday:{yours?.bithdayDate}</p>
                            <button className="text-white btn hover:font-semibold text-[16px] hover:text-xl btn-md hover:bg-[#205427db] bg-[#23611b] rounded-full py-2"
                                onClick={openModal}>
                                <FaEdit></FaEdit>
                            </button>
                                <UpdateModal yours={yours} isOpen={isModalOpen} closeModal={closeModal} refetch={refetch} />
                        </div>
                        {/*  */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHrProfile;
