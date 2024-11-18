import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div>
            <div className="lg:w-[1440px] mx-auto">
                <Navbar></Navbar>
            </div>
            <div className="lg:w-[1440px] mx-auto bg-[#F9F9F9]">
                <Outlet></Outlet>
            </div>
            <div className="lg:w-[1440px] mx-auto">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;