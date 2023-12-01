

const AllRequest = () => {



    return (
        <div>
            <div className="max-w-screen-xl mx-auto px-4 my-12 min-h-screen">
                <div>
                    <div>
                        <form className="flex flex-col md:flex-row gap-3 w-1/2 mx-auto">
                            <div className="flex">
                                <input
                                    type="text"
                                    placeholder="Search for the tool you like"
                                    className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-[#286d39] focus:outline-none focus:border-[#286d39]"
                                // value={searchQuery}
                                // onChange={handleSearchChange}
                                />
                                <button
                                    type="submit"
                                    className="bg-[#286d39] text-white rounded-r px-2 md:px-3 py-0 md:py-1"
                                >
                                    Search
                                </button>
                            </div>
                            <select
                                id="pricingType"
                                name="pricingType"
                                className="w-full h-10 border-2 border-[#286d39] focus:outline-none focus:border-[#286d39] text-[#286d39] rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
                            // value={selectedCategory}
                            // onChange={handleCategoryChange}
                            >
                                <option value="All">All Category</option>
                                <option value="Cooking">Cooking</option>
                                <option value="Travel">Travel</option>
                            </select>
                        </form>
                    </div>
                </div>
                <div className="mt-14">
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
                        {/* {renderBlogs()} */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllRequest;