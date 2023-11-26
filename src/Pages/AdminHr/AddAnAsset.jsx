
const AddAnAsset = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="max-w-screen-xl md:w-1/2 mx-auto px-4 md:px-8 py-8 md:12 bg-gray-200  ">
                <form className=' px-4 md:px-12 py-4 bg-[#6cb95b]' >
                    <div>
                        <h2 className="py-4 text-xl md:text-3xl font-bold text-center">Add An Asset</h2>
                        <div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Title
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-50 borde"
                                    name="title"
                                    type="text"
                                    placeholder="Name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Title
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-50 borde"
                                    name="title"
                                    type="text"
                                    placeholder="Name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium ">Select a package</label>
                                <select
                                    id="countries" className="bg-gray-50 border border-gray-300  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   ">
                                    <option selected>Choose a Package</option>
                                    <option value="Laptop">Laptops </option>
                                    <option value="laptop">Laptops</option>
                                    <option value="laptop">Laptops</option>
                                    <option value="laptop">Laptops</option>
                                    <option value="Laptop">Laptops </option>
                                    <option value="laptop">Laptops</option>
                                    <option value="laptop">Laptops</option>
                                    <option value="laptop">Laptops</option>
                                    <option value="Laptop">Laptops </option>
                                    <option value="laptop">Laptops</option>
                                    <option value="laptop">Laptops</option>
                                    <option value="laptop">Laptops</option>
                                    <option value="Laptop">Laptops </option>
                                    <option value="laptop">Laptops</option>
                                    <option value="laptop">Laptops</option>
                                    <option value="laptop">Laptops</option>
                                    <option value="Laptop">Laptops </option>
                                    <option value="laptop">Laptops</option>
                                    <option value="laptop">Laptops</option>
                                    <option value="laptop">Laptops</option>
                                    <option value="Laptop">Laptops </option>
                                    <option value="laptop">Laptops</option>
                                    <option value="laptop">Laptops</option>
                                    <option value="laptop">Laptops</option>
                                    <option value="laptop">Laptops</option>
                                </select>

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