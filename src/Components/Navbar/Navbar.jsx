
import { Link, NavLink } from "react-router-dom";



const Navbar = () => {

    const user = true;

    const navLink = <>


        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#EEFF25] font-semibold " : "hover:text-[#EEFF25] font-semibold text-[#FFF]"}> HOME</NavLink>
        </li>
        <li><NavLink to="/menu" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#EEFF25] font-semibold " : "hover:text-[#EEFF25] font-semibold text-[#FFF]"}> Join As Employe</NavLink>
        </li>
        <li><NavLink to="/contact" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#EEFF25] font-semibold " : "hover:text-[#EEFF25] font-semibold text-[#FFF]"}>Join as HR/Admin</NavLink>
        </li>
    </>


    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-20 bg-black text-w">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex z-50">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                
                <div className="navbar-end">
                    {
                        user ? <>
                            <span className="bg-white rounded-l-full px-2 py-1 text-violet-600 font-semibold ">Display Name</span>
                            <button className="btn btn-sm ml-4 btn-primary">Sign Out</button>
                        </> : <>
                            <Link to='/signin'>SignIn</Link></>
                    }

                </div>

            </div>
        </div>
    );
};

export default Navbar;