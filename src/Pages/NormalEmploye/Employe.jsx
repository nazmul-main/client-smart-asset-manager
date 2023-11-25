import { NavLink, Outlet } from "react-router-dom";


const Employe = () => {
    return (
        <div>
            <div className="flex max-w-screen-xl mx-auto px-4 gap">

                <div className="w-2/12 min-h-screen bg-[#2b914a]">
                    <ul className="menu p-4">


                        <li>
                            <NavLink  className='text-white font-semibold ' to='/employeHome'>
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink  className='text-white font-semibold '  to="/joinEmploye">
                                My Team
                            </NavLink>
                        </li>
                        <li>
                            <NavLink  className='text-white font-semibold ' to="/joinAdminHR">
                                My Assets
                            </NavLink>
                        </li>
                        <li>
                            <NavLink  className='text-white font-semibold ' to="/joinAdminHR">
                                Request for an Asset

                            </NavLink>
                        </li>
                        <li>
                            <NavLink  className='text-white font-semibold ' to="/joinAdminHR">
                                Make a Custom Request

                            </NavLink>
                        </li>
                        <li>
                            <NavLink  className='text-white font-semibold ' to="/joinAdminHR">
                                Profile

                            </NavLink>
                        </li>
                    </ul>
                </div>
                {/* dashboard content */}
                <div className="w-10/12 bg-gray-50">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Employe;