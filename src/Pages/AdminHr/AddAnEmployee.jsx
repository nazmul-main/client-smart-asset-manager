// ... (previous imports and code)

import { useQuery } from "@tanstack/react-query";
import SectionTiltle from "../../Components/SectionTiltle";
import useAuth from "../../Hooks/useAuth";
import Packages from "../../Shared/Packages";
import Alluser from "./Alluser";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AddAnEmployee = () => {
    const axiosSecure = useAxiosSecure();
    const currentUser = useAuth();
    const cur = currentUser.user

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/all-users')
            console.log(res.data);
            return res.data;
        },
    });

    const onlyUser = users?.filter((ouser) => ouser.role !== 'admin');
    const admin = users?.find((alluser) => alluser.email === cur.email && alluser.role === 'admin');

   

    return (
        <div className="md:w-10/12 mx-auto">
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


                    {onlyUser?.map((asset, index) => (
                        <Alluser key={asset._id} asset={asset} refetch={refetch}  index={index} admin={admin} ></Alluser>
                    ))}


                </div>
            </div>
        </div>
    );
};

export default AddAnEmployee;
