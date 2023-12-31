import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
// import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";  // Import react-hook-form
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";

const JoinAsARAdmin = () => {
    const axiosPublic = useAxiosPublic();
    const { createUser, updateUaserPofile } = useAuth();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then((res) => {
                const loggedUser = res.user;
                console.log(loggedUser);
                updateUaserPofile(data.name, data.photoURL)
                    .then(() => {
                        console.log('user');
                    })
                    .catch(
                        err => console.log(err.message),
                    )
                const userInfo = {
                    adminname: data.name,
                    CompanyName: data.coName,
                    bithdayDate: data.bod,
                    email: data.email,
                    CoLogo: data.CoLogo,
                    package: data.package

                }
                console.log(userInfo);
                axiosPublic.post('/users-employee', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            reset();
                            // Swal.fire({
                            //     position: "center",
                            //     icon: "success",
                            //     title: "SignUp  successfully",
                            //     showConfirmButton: false,
                            //     timer: 1500
                            // });
                            navigate('/payment')
                        }

                    });
            });
    };
    return (
        <div>
            <section className="bg-gray-200 ">
                <div className=" flex flex-col  items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <Helmet>
                        <title>Join As Admin </title>
                    </Helmet>
                    <Link to='/' className=" my-2 py-2 px-3 rounded-md bg-green-500">Back To Home </Link>
                    <div className="md:w-1/2  rounded-lg shadow dark:border md:mt-0  xl:p-0 bg-blue-50 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl text-center font-bold leading-tight tracking-tight  md:text-2xl ">
                                Join As HR/Admin
                            </h1>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6 " action="#">
                                <div className="md:flex gap-5">
                                    <div className="w-full">
                                        <label className="block mb-2 text-sm font-medium ">Full Name</label>
                                        <input
                                            type="text"
                                            {...register("name", { required: true })}
                                            name="name"
                                            className="py-3 px-3 w-full"
                                            placeholder="Type Your Name" />
                                        {errors.name && <span className="text-red-600">Name is required</span>}
                                    </div>
                                    <div className="w-full">
                                        <label className="block mb-2 text-sm font-medium ">Company Name</label>
                                        <input
                                            type="text"
                                            {...register("coName", { required: true })}
                                            name="coName"
                                            className="py-3 px-3 w-full"
                                            placeholder=" Company Name" />
                                        {errors.coName && <span className="text-red-600">Name is required</span>}
                                    </div>
                                </div>

                                {/* <div className="md:flex gap-5">
                                    <div className="w-full" >
                                        <label className="block mb-2 text-sm font-medium">Date of birth</label>
                                        <input
                                            type="date"
                                            {...register("bod", { required: true })}
                                            name="bod"
                                            className="py-3 px-3 w-full"
                                            placeholder="Type Your Name" />
                                        {errors.bod && <span className="text-red-600">Name is required</span>}
                                    </div>
                                    <div className="w-full">
                                        <label className="block mb-2 text-sm font-medium ">
                                            <span className="label-text ">Your Image</span>
                                        </label>
                                        <input
                                            {...register("adminimage", { required: true })}
                                            type="text"
                                            placeholder="Your Image URL"
                                            name="adminimage"
                                            className="py-3 px-3 w-full"
                                            required

                                        />
                                        {errors.adminimage && <span className="text-red-600">Name is required</span>}
                                    </div>
                                </div> */}

                                <div className="md:flex gap-5">
                                    <div className="w-full">
                                        <label className="block mb-2 text-sm font-medium ">
                                            <span className="label-text ">Company Logo</span>
                                        </label>
                                        <input
                                            {...register("CoLogo", { required: true })}
                                            type="text"
                                            placeholder="Logo URL"
                                            name="CoLogo"
                                            className="py-3 px-3 w-full"
                                            required

                                        />
                                        {errors.CoLogo && <span className="text-red-600">Logo is required</span>}
                                    </div>

                                    <div className="w-full">
                                        <label className="block mb-2 text-sm font-medium ">Email</label>
                                        <input
                                            type="email"
                                            {...register("email", { required: true })}
                                            name="email"
                                            className="py-3 px-3 w-full"
                                            placeholder="Type Your Name" />
                                        {errors.email && <span className="text-red-600">Name is required</span>}
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="w-full">
                                        <label className="block mb-2 text-sm font-medium">Date of birth</label>
                                        <input
                                            type="date"
                                            {...register("bod", { required: true })}
                                            name="bod"
                                            className="py-3 px-3 w-full"
                                            placeholder="Birthday" />
                                        {errors.bod && <span className="text-red-600">Name is required</span>}
                                    </div>

                                    <div className="w-full">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                        <input
                                            {...register("password", { required: true })} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   " required="" />
                                        {errors.password && <span className="text-red-600">Name is required</span>}
                                    </div>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium ">Select a package</label>
                                    <select
                                        {...register("package", { required: true })} id="countries" className="bg-gray-50 border border-gray-300  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   ">
                                        <option selected>Choose a Package</option>
                                        <option value="5 Members for $5">5 Members for $5 </option>
                                        <option value="5 Members for $5">5 Members for $8 </option>
                                        <option value="5 Members for $5">20 Members for $15 </option>
                                    </select>
                                    {errors.package && <span className="text-red-600">Name is required</span>}
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