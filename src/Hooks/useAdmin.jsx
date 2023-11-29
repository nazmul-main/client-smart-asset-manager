import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const {user} = useAuth();
    console.log('admmin user',user);
    const token = localStorage.getItem('access-token')
    console.log(token);
    const axiosSecure = useAxiosSecure()
    const {data: isAdmin = false, isLoading} = useQuery({

        queryKey: [user?.email, 'isAdmin'],
        enabled: !! user?.email && !! token ,
        queryFn: async() => {
            const res = await axiosSecure.get(`/users-admin/${user?.email}`);
            console.log(res.data);
            return res?.data.admin;
        }
    })
    return [isAdmin, isLoading]
   
};

export default useAdmin;