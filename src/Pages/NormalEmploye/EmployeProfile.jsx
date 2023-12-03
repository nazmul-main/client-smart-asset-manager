import { useState } from "react";
import UpdateModal from "../../Components/Profile/UpdateModal ";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { FaEdit } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const EmployeProfile = () => {



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
        queryKey: ["usersEmploye"],
        queryFn: async () => {
            const res = await axiospublic.get(`/all-users-single?email=${currentUser}`);
            console.log(res.data);
            return res.data;
        },
    });




    return (
        <div>
            <div className="flex justify-center items-center min-h-screen">
            <Helmet>
                <title>Employe | Profile</title>
            </Helmet>
                <div>
                    <div className="  flex gap-12 justify-center items-center  p-6 shadow-2xl shadow-[#296835] rounded-xl sm:px-12 bg-[#ecfdef5e] space-y-10">
                        <img src={yours?.image} alt="" className="object-cover md:w-52 md:h-52 h-32 w-32 shadow-gray-700 ck shadow-md mx-auto rounded-full " />
                        <div className="space-y-6 text-center divide-y  ">
                            <div className="my-2 space-y-5">
                                <h2 className="text-4xl font-semibold ">{yours?.name}</h2>
                                <h2 className="px-5 text-xs sm:text-base ">{yours?.email}</h2>
                                {yours?.birthdayDate ? (
                                    <p className="px-5 text-xs sm:text-base">Birthday: {yours?.bithdayDate}</p>
                                ) : (
                                    <p className="px-5 text-xs sm:text-base">No Birthday Info</p>
                                )}

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
        </div>
    );
};

export default EmployeProfile;