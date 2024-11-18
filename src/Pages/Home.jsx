import About from "../components/About";
import Banner from "../components/Banner";
import Faq from "../components/Faq";
import Success from "../components/Success";
import Works from "../components/Works";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <About></About>
            <Works></Works>
            <Success></Success>
            <Faq></Faq>
        </div>
    );
};

export default Home;