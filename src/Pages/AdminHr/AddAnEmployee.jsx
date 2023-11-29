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

    const { data: users = [], } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/all-users')
            console.log(res.data);
            return res.data;
        },
    });

    const onlyUser = users.filter((Ouser) => {
        if(Ouser.role === 'admin') 
        return
    });

    const admin = users.filter((user) => user.role);

    // Find the admin with the same email as the current user
    const mainAdmin = admin.find((adminuser) => adminuser.email === cur.email);
    console.log(mainAdmin);

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


                    {users?.map((asset, index) => (
                        <Alluser key={asset._id} asset={asset} mainAdmin={mainAdmin} index={index} ></Alluser>
                    ))}


                </div>
            </div>
        </div>
    );
};

export default AddAnEmployee;
