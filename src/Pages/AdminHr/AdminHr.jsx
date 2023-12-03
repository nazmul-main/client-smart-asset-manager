

const AdminHr = () => {
    return (
        <div>
            <div className="flex max-w-screen mx-auto  gap">

                <div className="md:w-2/12 w-1/12 min-h-screen bg-[#2b914a]">
                    <h2 className="text-3xl font-semibold text-center py-4">HR/Admin</h2>
                    <ul className="menu p-4">

                       
                    </ul>
                    <div className="divider"></div>

                </div>

                {/* dashboard content */}
                {/* <div className="w-10/12 bg-gray-50">
                    <Outlet></Outlet>
                </div> */}
            </div>
        </div>
    );
};

export default AdminHr;