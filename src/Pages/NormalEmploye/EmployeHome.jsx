import SectionTiltle from "../../Components/SectionTiltle";
import MonthlyRequest from "./MonthlyRequest";
import MyCoustomRequest from "./MyCoustomRequest";
import Pending from "./Pending";



const EmployeHome = () => {
    return (
        <div className="max-w-screen-xl  mx-auto px-4">
            <SectionTiltle subHeading={'some infometion '} heading={'SomeThing request Information'}></SectionTiltle>

            <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
                <MyCoustomRequest classNamew='w-full'></MyCoustomRequest>
                <Pending ></Pending>
            </div>
                <MonthlyRequest></MonthlyRequest>

        </div>
    );
};

export default EmployeHome;