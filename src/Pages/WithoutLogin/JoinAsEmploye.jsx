import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";  // Import react-hook-form
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const JoinAsEmploye = () => {

    const role = 'user'



    const axiosPublic = useAxiosPublic()
    const { createUser, updateUaserPofile } = useAuth();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();  // Use react-hook-form

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then((res) => {
                const loggedUser = res.user;  // Fix typo: 'result' should be 'res'
                console.log(loggedUser);
                updateUaserPofile(data.name, data.photo)
                    .then(() => {
                        console.log('user');
                    })
                    .catch(
                        err => console.log(err.message),
                    )
                const userInfo = {
                    name: data.name,
                    bithdayDate: data.bod,
                    email: data.email,
                    image:data.photo,
                    role: role
                }
                console.log(userInfo);
                axiosPublic.post('/users-employee', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            reset();
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "SignUp  successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/dashboard')
                        }
                    });
            });

    };

    return (
        <div>
            <section className="bg-gray-200 pt-8 max-h-screen ">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <Link to='/' className=" my-4 py-2 px-3 rounded-md bg-green-500">Back To Home </Link>

                    <div className="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-blue-50 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl text-center font-bold leading-tight tracking-tight  md:text-2xl ">
                                Join As Employe
                            </h1>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label className="block mb-2 text-sm font-medium">Full Name</label>
                                    <input
                                        type="text"
                                        {...register("name", { required: true })}
                                        name="name"
                                        className="py-3 px-3 w-full"
                                        placeholder="Type Your Name" />
                                    {errors.name && <span className="text-red-600">Name is required</span>}
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium ">Email</label>
                                    <input
                                        type="email"
                                        {...register("email", { required: true })}
                                        name="email"
                                        className="py-3 px-3 w-full"
                                        placeholder="Type Your Email" />
                                    {errors.email && <span className="text-red-600">Name is required</span>}
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium">Date of birth</label>
                                    <input
                                        type="date"
                                        {...register("bod", { required: true })}
                                        name="bod"
                                        className="py-3 px-3 w-full"
                                        placeholder="Type Your Name" />
                                    {errors.bod && <span className="text-red-600">Name is required</span>}
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium">Image URL</label>
                                    <input
                                        type="text"
                                        {...register("photo", { required: true })}
                                        name="photo"
                                        className="py-3 px-3 w-full"
                                        placeholder="Type Your Name" />
                                    {errors.photo && <span className="text-red-600">Name is required</span>}
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                    <input
                                        type="password"
                                        {...register("password", { required: true })}
                                        name="password"
                                        className="py-3 px-3 w-full"
                                        placeholder="••••••••" />
                                    {errors.password && <span className="text-red-600">Name is required</span>}
                                </div>

                                <button type="submit" className="w-full text-white  bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">Sign Up</button>
                                <p className="text-sm font-light text-gray-500 ">
                                    Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                                </p>
                            </form>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default JoinAsEmploye;