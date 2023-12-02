import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const {user} = useAuth();
    const token = localStorage.getItem('access-token')
    const axiosSecure = useAxiosSecure()
    const {data: isAdmin = false, isLoading} = useQuery({

        queryKey: [user?.email, 'isAdmin'],
        enabled: !! user?.email && !! token ,
        queryFn: async() => {
            const res = await axiosSecure.get(`/users-admin/${user?.email}`);
            return res?.data.admin;
        }
    })
    return [isAdmin, isLoading]
   
};

export default useAdmin;