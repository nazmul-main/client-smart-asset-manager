import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";


const AsssetUpdateFrom = () => {

    const assetdData = useLoaderData()
    console.log(assetdData._id);
    const navigate = useNavigate()

    /* Make update */
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const quantity = form.quantity.value;
        const type = form.type.value;
        console.log(name, quantity, type, image);

        const updatedAsset = {
            name: name,
            image: image,
            quantity: quantity,
            type: type,
        };

        console.log(updatedAsset);


        fetch(`http://localhost:5001/api/v1/assets/update-assets-done/${assetdData?._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedAsset),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                form.reset();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Updadeted successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/adminHome/assetList')
            });
    };


    return (
        <div>
            <div className="flex items-center justify-center h-screen">
                <div className="max-w-screen-xl md:w-1/2 mx-auto px-4 md:px-8 py-8 md:12 bg-gray-200  ">
                    <form onSubmit={handleUpdate} className=' px-4 md:px-12 py-4 bg-[#6cb95b]' >
                        <div>
                            <h2 className="py-4 text-xl md:text-3xl font-bold text-center">Update Asset</h2>
                            <div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                        Product Name
                                    </label>
                                    <input

                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-50 borde"
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        defaultValue={assetdData.name}
                                        required
                                    />

                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                        Product Image
                                    </label>
                                    <input

                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-50 borde"
                                        name="image"
                                        type="text"
                                        placeholder="Image URL"
                                        defaultValue={assetdData.image}
                                        required
                                    />

                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                        Product Quantity

                                    </label>
                                    <input

                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-50 borde"
                                        name="quantity"
                                        type="number"
                                        placeholder="Quantity"
                                        defaultValue={assetdData.quantity}
                                        required
                                    />

                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium ">Type</label>
                                    <select

                                        id="countries" name="type" className="bg-gray-50 border border-gray-300  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   ">
                                        <option selected>Choose a Type</option>
                                        <option value="Returnable">Returnable </option>
                                        <option value="Non-returnable"> Non-returnable </option>
                                    </select>


                                </div>
                                <button className="btn bg-[#555843]  hover:bg-[#34362a] text-white    w-full my-4">ADD</button>
                            </div>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default AsssetUpdateFrom;