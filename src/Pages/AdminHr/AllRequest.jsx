

const AllRequest = () => {




    // const [selectedCategory, setSelectedCategory] = useState("All");
    // const [searchQuery, setSearchQuery] = useState("");



    // const blogData = async () => {
    //     try {
    //         const response = await fetch('https://the-blogopolis-server.vercel.app/api/v1/blogs');
    //         const data = await response.json();
    //         return data;
    //     } catch (error) {
    //         throw new Error('Error fetching data: ' + error.message);
    //     }
    // };
    // const { data: bolgs, isLoading } = useQuery({ queryKey: ['/api/v1/blogs'], queryFn: blogData })
    // if (isLoading) {
    //     return <p className="text-center">loading...</p>
    // }
    // console.log(bolgs);

    // const filterBlogs = () => {
    //     let filteredBlogs = bolgs;

    //     // Filter by category
    //     if (selectedCategory !== "All") {
    //         filteredBlogs = filteredBlogs.filter(blog => blog.category === selectedCategory);
    //     }

    //     // Filter by search query
    //     if (searchQuery.trim() !== "") {
    //         filteredBlogs = filteredBlogs.filter(blog => blog.title.toLowerCase().includes(searchQuery.toLowerCase()));
    //     }

    //     return filteredBlogs;
    // };

    // const handleCategoryChange = (event) => {
    //     setSelectedCategory(event.target.value);
    // };

    // const handleSearchChange = (event) => {
    //     setSearchQuery(event.target.value);
    // };

    // const renderBlogs = () => {
    //     const filteredBlogs = filterBlogs();

    //     if (filteredBlogs.length === 0) {
    //         return <p>No blogs available matching your criteria.</p>;
    //     }

    //     return filteredBlogs.map((blog) => (
    //         <RecentblogCard key={blog._id} blog={blog}></RecentblogCard>
    //     ));
    // };


















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