
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";



const Navbar = () => {

    const { user , logout} = useAuth()
    // const admin = true;


    // console.log(cart);

    const handlelogOut = () => {
        logout()
            .then(() => { })
            .catch(err => {
                console.log(err);
            })
    }

    const navLink = <>


        <li><NavLink to='/home' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#25a8ff] font-semibold " : "hover:text-[#25a8ff] font-semibold text-[#FFF]"}> HOME</NavLink>
        </li>
        <li><NavLink to="/joinEmploye" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#25a8ff] font-semibold " : "hover:text-[#25a8ff] font-semibold text-[#FFF]"}> Join As Employe</NavLink>
        </li>
        <li><NavLink to="/joinAdminHR" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#25a8ff] font-semibold " : "hover:text-[#25a8ff] font-semibold text-[#FFF]"}>Join as HR/Admin</NavLink>
        </li>
    </>

    // const adminLinks = (
    //     <>
    //         <li>
    //             <NavLink to='/home' className={({ isActive, isPending }) =>
    //                 isPending ? "pending" : isActive ? "text-[#25a8ff] font-semibold " : "hover:text-[#25a8ff] font-semibold text-[#FFF]"}> HOME
    //             </NavLink>
    //         </li>
    //         <li>
    //             <NavLink to="/joinEmploye" className={({ isActive, isPending }) =>
    //                 isPending ? "pending" : isActive ? "text-[#25a8ff] font-semibold " : "hover:text-[#25a8ff] font-semibold text-[#FFF]"}> Join As Employe
    //             </NavLink>
    //         </li>
    //         <li>
    //             <NavLink to="/joinAdminHR" className={({ isActive, isPending }) =>
    //                 isPending ? "pending" : isActive ? "text-[#25a8ff] font-semibold " : "hover:text-[#25a8ff] font-semibold text-[#FFF]"}>Join as HR/Admin
    //             </NavLink>
    //         </li>
    //         <li>
    //             <NavLink to="/admin" className={({ isActive, isPending }) =>
    //                 isPending ? "pending" : isActive ? "text-[#25a8ff] font-semibold " : "hover:text-[#25a8ff] font-semibold text-[#FFF]"}>ADMINAdmin
    //             </NavLink>
    //         </li>
    //     </>
    // );

    // const userLinks = (
    //     <>
    //         <li>
    //             <NavLink to='/home' className={({ isActive, isPending }) =>
    //                 isPending ? "pending" : isActive ? "text-[#25a8ff] font-semibold " : "hover:text-[#25a8ff] font-semibold text-[#FFF]"}> HOME
    //             </NavLink>
    //         </li>
    //         <li>
    //             <NavLink to="/joinEmploye" className={({ isActive, isPending }) =>
    //                 isPending ? "pending" : isActive ? "text-[#25a8ff] font-semibold " : "hover:text-[#25a8ff] font-semibold text-[#FFF]"}> Join As Employe
    //             </NavLink>
    //         </li>
    //         <li>
    //             <NavLink to="/joinAdminHR" className={({ isActive, isPending }) =>
    //                 isPending ? "pending" : isActive ? "text-[#25a8ff] font-semibold " : "hover:text-[#25a8ff] font-semibold text-[#FFF]"}>Join as HR/Admin
    //             </NavLink>
    //         </li>
    //     </>
    // );




    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-50 bg-black text-w">
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
                            <span className="bg-white rounded-l-full px-2 py-1 text-violet-600 font-semibold ">{user?.displayName}</span>
                            <img className="w-10 rounded-full ml-4 h-10" src={user.photoURL ? user.photoURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyhj1gUUYu1c8817GfPwApJbYzW9lJdjSXQ&usqp=CAU"} alt={user.displayName} />
                            <button onClick={handlelogOut} className="btn btn-sm ml-4 bg-[#25a8ff]">Sign Out</button>
                        </> : <>
                            <Link to='/signin' className="btn btn-sm ml-4 bg-[#25a8ff]">SignIn</Link></>
                    }

                </div>

            </div>
        </div>
    );
};

export default Navbar;