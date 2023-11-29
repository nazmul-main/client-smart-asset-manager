import Banner from "../../Components/Baneer/Banner";
import Packages from "../../Shared/Packages";
import About from "./About/About";

const Home = () => {
    const token = localStorage.getItem('access-token')
    console.log('request by intercept', token);
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Packages></Packages>
        </div>
    );
};

export default Home;