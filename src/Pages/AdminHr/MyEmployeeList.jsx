import { useQuery } from "@tanstack/react-query";
import SectionTiltle from "../../Components/SectionTiltle";
import useAuth from "../../Hooks/useAuth";
import TeamList from "./TeamList";


const MyEmployeeList = () => {

    const { user } = useAuth()
    const wishlistapi = `http://localhost:5001/api/v1/add-team?email=${user?.email}`

    const wishlistItem = async () => {
        try {
            const response = await fetch(wishlistapi);
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error('Error fetching data: ' + error.message);
        }
    };

    const { data: teamMem, isLoading, refetch } = useQuery({ queryKey: [`/add-team?email=${user?.email}`], queryFn: wishlistItem })
    if (isLoading) {
        return <p>loading...</p>
    }




    return (
        <div className="max-w-screen-xl px-4 md:px-12">
            <SectionTiltle
                subHeading={'This is your employee'}
                heading={'my employee list'}
            ></SectionTiltle>

            <div className="flex items-center justify-center">
                <div className="bg-green-300 py-4 w-5/12 ">
                    <h2 className="text-center  bg-white mx-4 py-2 text-2xl font-bold"> Total Employe: {teamMem?.length}</h2>
                </div>
            </div>
            <div>
                {teamMem?.map((team, index) => (

                    <div key={team._id} >

                        <TeamList team={team} refetch={refetch} index={index} > sdfsdf{team.legth}</TeamList>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default MyEmployeeList;


/* 

{teamMem?.map((team, index) => (
                    <TeamList key={team._id} team={team} refetch={refetch} index={index} ></TeamList>
                ))}

*/