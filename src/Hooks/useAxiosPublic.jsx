import axios  from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://server-smart-asset-manager.vercel.app/api/v1/',
})

const useAxiosPublic = () => {
    return axiosPublic;

};

export default useAxiosPublic;