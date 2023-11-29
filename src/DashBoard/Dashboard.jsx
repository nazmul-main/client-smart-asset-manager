import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
// import useAdmin from "../Hooks/useAdmin";



const Dashboard = () => {
    //   const  isAdmin = true;

    const [isAdmin, isLoading] = useAdmin();
    if(isLoading){
        return <p>Loadeing...</p>
    }
    console.log(isAdmin);


    return (
        <div className="flex max-w-screen mx-auto px-4 gap ">
            {/* dashboard side bar */}
            <div className="w-2/12 min-h-screen bg-[#286d32]">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>

                            <h2 className="text-xl font-bold text-center text-white">Admin</h2>
                            <hr className="my-4" />
                            <li>
                                <NavLink className='text-white font-semibold ' to='/dashboard/adminHome'>
                                    Your Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className='text-white font-semibold ' to="/dashboard/assetList">
                                    Asset List
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className='text-white font-semibold ' to="/dashboard/addanAsset">
                                    Add an Asset
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className='text-white font-semibold ' to="/dashboard/allRequest">
                                    All Requests

                                </NavLink>
                            </li>
                            <li>
                                <NavLink className='text-white font-semibold ' to="/dashboard/coustmRequestList">
                                    Custom Requests List
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className='text-white font-semibold ' to="/dashboard/myEmployeeList">
                                    My Employee List
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className='text-white font-semibold ' to="/dashboard/addAnEmployee">
                                    Add an Employee
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className='text-white font-semibold ' to="/dashboard/AdminHrProfile">
                                    Profile
                                </NavLink>
                            </li>
                            

                        </>
                            :
                            <>
                                <h2 className="text-xl font-bold text-center text-white">Employe</h2>
                                <hr className="my-4" />
                                <li>
                                    <NavLink className='text-white font-semibold ' to='/dashboard/employeHome'>
                                        HOME
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink className='text-white font-semibold ' to="/dashboard/myTeam">
                                        My Team
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className='text-white font-semibold ' to="/dashboard/myAsset">
                                        My Assets
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className='text-white font-semibold ' to="/dashboard/requestAsset">
                                        Request for an Asset

                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className='text-white font-semibold ' to="/dashboard/makeCoustmRequest">
                                        Make a Custom Request

                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className='text-white font-semibold ' to="/dashboard/employeProfile">
                                        Profile

                                    </NavLink>
                                </li>

                            </>

                    }
                    <div className="divider"></div>
                    <li>
                        <NavLink className='text-white font-semibold ' to={"/"}>
                            Home</NavLink>
                    </li>
                    
                    <li>
                        <NavLink className='text-white font-semibold ' to={"/contact"}>
                            Contact</NavLink>
                    </li>
                    <li>
                        <NavLink className='text-white font-semibold ' to={"/logOut"}>
                            Logout</NavLink>
                    </li>
                </ul>

            </div>
            <div className="w-10/12 bg-gray-50">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;