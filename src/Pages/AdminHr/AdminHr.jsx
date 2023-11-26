import { NavLink, Outlet } from "react-router-dom";

const AdminHr = () => {
    return (
        <div>
            <div className="flex max-w-screen mx-auto  gap">

                <div className="w-2/12 min-h-screen bg-[#2b914a]">
                    <h2 className="text-3xl font-semibold">HR/Admin</h2>
                    <ul className="menu p-4">

                        <li>
                            <NavLink className='text-white font-semibold ' to='/adminHome'>
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='text-white font-semibold ' to="/adminHome/assetList">
                                Asset List
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='text-white font-semibold ' to="/adminHome/addanAsset">
                            Add an Asset
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='text-white font-semibold ' to="/adminHome/allRequest">
                            All Requests

                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='text-white font-semibold ' to="/adminHome/coustmRequestList">
                            Custom Requests List
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='text-white font-semibold ' to="/adminHome/myEmployeeList">
                            My Employee List
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='text-white font-semibold ' to="/adminHome/addAnEmployee">
                            Add an Employee
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='text-white font-semibold ' to="/adminHome/AdminHrProfile">
                                Profile
                            </NavLink>
                        </li>
                    </ul>
                    <div className="divider"></div>

                </div>

                {/* dashboard content */}
                <div className="w-10/12 bg-gray-50">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default AdminHr;