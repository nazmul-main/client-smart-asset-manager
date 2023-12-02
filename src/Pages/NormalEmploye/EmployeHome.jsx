import MonthlyRequest from "./MonthlyRequest";
import MyCoustomRequest from "./MyCoustomRequest";
import Pending from "./Pending";



const EmployeHome = () => {
    return (
        <div className="max-w-screen-xl  mx-auto px-4">
                
            <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
                <MyCoustomRequest classNamew='w-full'></MyCoustomRequest>
                <Pending ></Pending>
                <MonthlyRequest></MonthlyRequest>
            </div>

        </div>
    );
};

export default EmployeHome;