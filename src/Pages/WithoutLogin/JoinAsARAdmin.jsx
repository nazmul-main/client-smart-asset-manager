import SocialLogin from "../../Components/SocialLogin/SocialLogin";


const JoinAsARAdmin = () => {
    return (
        <div>
            <section className="bg-gray-200 py-12   ">
                <div className=" flex  items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div className="md:w-1/2  rounded-lg shadow dark:border md:mt-0  xl:p-0 bg-blue-50 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl text-center font-bold leading-tight tracking-tight  md:text-2xl ">
                                Join As HR/Admin
                            </h1>
                            <form className="space-y-4 md:space-y-6 " action="#">
                                <div className="md:flex gap-5">
                                    <div className="w-full">
                                        <label className="block mb-2 text-sm font-medium ">Full Name</label>
                                        <input type="email" name="email" id="email" className="   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5     dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                    </div>
                                    <div className="w-full">
                                        <label className="block mb-2 text-sm font-medium ">Company Name</label>
                                        <input type="email" name="email" id="email" className="  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5     dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                    </div>
                                </div>
                                <div className="md:flex gap-5">
                                    <div className="w-full">
                                        <label className="block mb-2 text-sm font-medium ">Company Logo</label>
                                        <input type="email" name="email" id="email" className="  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5     dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                    </div>

                                    <div className="w-full">
                                        <label className="block mb-2 text-sm font-medium ">Email</label>
                                        <input type="email" name="email" id="email" className="  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5     dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                    </div>
                                </div>
                                <div  className="flex gap-5">
                                    <div className="w-full">
                                        <label className="block mb-2 text-sm font-medium">Date of birth</label>
                                        <input
                                            type="date"
                                            name="dob"
                                            id="dob"
                                            className="sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Select Date"
                                            required=""
                                        />
                                    </div>

                                    <div className="w-full">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   " required="" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium ">Select a package</label>
                                    <select id="countries" className="bg-gray-50 border border-gray-300  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   ">
                                        <option selected>Choose a Package</option>
                                        <option value="US">Member 5</option>
                                        <option value="CA">Member 8</option>
                                        <option value="FR">Member 15</option>
                                    </select>
                                </div>


                                <button type="submit" className="w-full text-white  bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">Sign up</button>
                                <p className="text-sm font-light text-gray-500 ">
                                    Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                                </p>
                            </form>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default JoinAsARAdmin;