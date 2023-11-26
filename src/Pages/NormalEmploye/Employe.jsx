import { NavLink, Outlet } from "react-router-dom";


const Employe = () => {
    return (
        <div>
            <div className="flex max-w-screen mx-auto  gap">

                <div className="w-2/12 min-h-screen bg-[#2b914a]">
                    <ul className="menu p-4">


                        <li>
                            <NavLink className='text-white font-semibold ' to='/employeHome'>
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='text-white font-semibold ' to="/employeHome/myTeam">
                                My Team
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='text-white font-semibold ' to="/employeHome/myAsset">
                                My Assets
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='text-white font-semibold ' to="/employeHome/requestAsset">
                                Request for an Asset

                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='text-white font-semibold ' to="/employeHome/makeCoustmRequest">
                                Make a Custom Request

                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='text-white font-semibold ' to="/employeHome/employeProfile">
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

export default Employe;