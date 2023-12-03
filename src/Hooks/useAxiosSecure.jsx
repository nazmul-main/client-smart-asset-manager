
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'https://server-smart-asset-manager.vercel.app/api/v1/',
})

const useAxiosSecure = () => {
    const { logout } = useAuth()

    const navigate = useNavigate()

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function (error) {

        return Promise.reject(error);
    })


    //inter septor 401 and 403
    axiosSecure.interceptors.response.use(function (response) {
        return response
    }, async (error) => {
        const status = (error.response.status);
        console.log('satus error in the interceptor ', status);
        if (status === 401 || status === 403) {
            await logout()
            navigate('/signin');
        }
        return Promise.reject(error)
    })

    return axiosSecure;

};

export default useAxiosSecure;