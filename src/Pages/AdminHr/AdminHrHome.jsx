import { Helmet } from "react-helmet-async";
import SectionTiltle from "../../Components/SectionTiltle";
import LimitedStoke from "./AdminHome/LimitedStoke";
import PendingRequest from "./AdminHome/PendingRequest";
import PieCart from "./AdminHome/PieCart";
import TopMostReqItem from "./AdminHome/TopMostReqItem";


const AdminHrHome = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 my-12">
             <Helmet>
                <title>Admin | Home</title>
            </Helmet>
            <SectionTiltle subHeading={'some of imformention'} heading={'Admin Home '}/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12  md:px-8 px-4">
                <PendingRequest></PendingRequest>
                <TopMostReqItem></TopMostReqItem>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center md:px-8 px-4">
                <LimitedStoke />
                <PieCart></PieCart>
            </div>
        </div>
    );
};

export default AdminHrHome;