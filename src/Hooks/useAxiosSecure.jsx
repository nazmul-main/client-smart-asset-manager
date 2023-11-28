import axios  from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5001/api/v1/',
})

const useAxiosSecure = () => {
    return axiosSecure;

};

export default useAxiosSecure;