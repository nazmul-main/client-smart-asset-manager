// ... (previous imports and code)

import { useQuery } from "@tanstack/react-query";
import SectionTiltle from "../../Components/SectionTiltle";
import useAuth from "../../Hooks/useAuth";
import Packages from "../../Shared/Packages";
import Alluser from "./Alluser";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const AddAnEmployee = () => {
    const axiosSecure = useAxiosSecure();
    const currentUser = useAuth();
    const cur = currentUser.user
    console.log(cur);


    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/all-users')
            console.log(res.data);
            return res.data;
        },

    });

    // const { data: teamMember = [], refetch } = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get('/add-team')
    //         console.log(res.data);
    //         return res.data;
    //     },
    // });
    const onlyUser = users && users?.length > 0 && users?.filter((ouser) => ouser.role !== 'admin' && ouser.role !== 'employee');
    const admin = users && users?.length > 0 && users?.find((alluser) => alluser.email === cur.email && alluser.role === 'admin');
    console.log(admin);
    



    return (
        <div className="md:w-10/12 mx-auto">
             <Helmet>
                <title>Admin | Add  Employe</title>
            </Helmet>
            <div >
                <div >
                    <SectionTiltle
                        subHeading={'---- increased tou team ---'}
                        heading={'Packages'}
                    ></SectionTiltle>


                    <Packages></Packages>
                </div>

                <div>
                    <SectionTiltle
                        subHeading={'----Make employe---'}
                        heading={'Add an employe'}
                    ></SectionTiltle>


                    { users && users?.length > 0 && onlyUser?.map((asset, index) => (
                        <Alluser key={asset._id} asset={asset} refetch={refetch} index={index} admin={admin} ></Alluser>
                    ))}


                </div>
            </div>
        </div>
    );
};

export default AddAnEmployee;
