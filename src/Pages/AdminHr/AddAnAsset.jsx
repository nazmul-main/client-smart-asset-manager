import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

// const imag_hosting_key = import.meta.env.VITE_IMAAGE_HOSTIMG_KEY
// const imag_hosting_API = `https://api.imgbb.com/1/upload?key=${imag_hosting_key}`
const AddAnAsset = () => {
    const axiosPublic = useAxiosPublic()

    /* Find Current date */
    const date = new Date();
    console.log(date);

    const currentYear = date.getFullYear().toString();
    const lastTwoDigits = currentYear.slice(2);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const currentDate = `${day}-${month}-${lastTwoDigits}`;
    console.log(currentDate);


    /* Igame post on imgBB */
    // const imgSubmit = async (imgdata) => {
    //     console.log(imgdata);
    //     /* img upload to imgbb and then get an url  */
    //     const imgfile = { image: imgdata.image[0] }
    //     const res = await axiosPublic.post(imag_hosting_API, imgfile, {
    //         headers: {
    //             'Content-type': 'multipart/form-data'
    //         }
    //     })
    //     console.log(res.data);
    // }


    /* POST METHDOD to mongodb */

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        // Add currentDate to the data being sent
        //----------------------------------------------
        /* console.log(data);
        const imgfile = { image: data.image[0] }
        const res = await axiosPublic.post(imag_hosting_API, imgfile, {
                    headers: {
                        'Content-type': 'multipart/form-data'
                    }
                })
                console.log(res.data); */
        //-------------------------------------
        
        const postData = {
            ...data,
            currentDate: currentDate,
        };

        console.log(postData);

        // Send to Backend
        axiosPublic.post('/assets', postData)
            .then(res => {
                if (res?.data?.insertedId) {
                    reset();
                    Swal.fire({
                        icon: 'success',
                        title: 'Well done',
                        text: 'Your application was successful',
                        footer: '<a href="">Thank you</a>'
                    });

                }
                console.log(res.data);
            })
            .catch(error => {
                console.log(error);
            });
    }










    return (
        <div className="flex items-center justify-center h-screen">
            <div className="max-w-screen-xl md:w-1/2 mx-auto px-4 md:px-8 py-8 md:12 bg-gray-200  ">
                <form onSubmit={handleSubmit(onSubmit)} className=' px-4 md:px-12 py-4 bg-[#6cb95b]' >
                    <div>
                        <h2 className="py-4 text-xl md:text-3xl font-bold text-center">Add An Asset</h2>
                        <div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Product Name
                                </label>
                                <input
                                    {...register("name", { required: true })}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-50 borde"
                                    // name="title"
                                    type="text"
                                    placeholder="Name"
                                    required
                                />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Product Image
                                </label>
                                <input
                                    {...register("image", { required: true })}
                                    // onSubmit={imgSubmit}
                                    type="text"
                                    name="image"
                                    className="file-input file-input-bordered w-full  "
                                    required

                                />
                                {errors.image && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Product Quantity

                                </label>
                                <input
                                    {...register("quantity", { required: true })}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-50 borde"
                                    name="quantity"
                                    type="number"
                                    placeholder="Quantity"
                                    required
                                />
                                {errors.quantity && <span className="text-red-600">Product Type</span>}
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium ">Type</label>
                                <select
                                    {...register("type", { required: true })}
                                    id="countries" className="bg-gray-50 border border-gray-300  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   ">
                                    <option selected>Choose a Type</option>
                                    <option value="Returnable">Returnable </option>
                                    <option value=" Non-returnable"> Non-returnable </option>

                                </select>
                                {errors.type && <span className="text-red-600">Name is required</span>}

                            </div>
                            <button className="btn bg-[#555843]  hover:bg-[#34362a] text-white    w-full my-4">ADD</button>
                        </div>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default AddAnAsset;