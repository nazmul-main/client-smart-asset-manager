import { Helmet } from "react-helmet-async";
import SectionTiltle from "../../Components/SectionTiltle";
import MonthlyRequest from "./MonthlyRequest";
import MyCoustomRequest from "./MyCoustomRequest";
import Pending from "./Pending";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";



const EmployeHome = () => {
    const { user } = useAuth()
    const cur = user?.email

    const axiospublic = useAxiosPublic()




    const { data: yours = [] } = useQuery({
        queryKey: ["assetAdmin", cur],
        queryFn: async () => {
            const res = await axiospublic.get(`/add-team-one?email=${cur}`);
            console.log(res.data);
            return res.data;
        },
    });
    const yourAdmin = yours?.adminEmail
    console.log(yourAdmin);







    return (
        <div className="max-w-screen-xl  mx-auto px-4">
            <Helmet>
                <title>Employe | Home</title>
            </Helmet>
            <SectionTiltle subHeading={'some infometion '} heading={'SomeThing request Information'}></SectionTiltle>

            <div>
                <MyCoustomRequest classNamew='w-full'></MyCoustomRequest>

            </div >
            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 items-center">
                <MonthlyRequest></MonthlyRequest>
                <Pending ></Pending>
            </div>


        </div>
    );
};

export default EmployeHome;