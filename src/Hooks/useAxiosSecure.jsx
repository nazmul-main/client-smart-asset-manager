
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5001/api/v1/',
})

const useAxiosSecure = () => {
    const { logout } = useAuth()

    const navigate = useNavigate()

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        console.log('request by intercept', token);
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