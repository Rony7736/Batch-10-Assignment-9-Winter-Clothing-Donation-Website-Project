import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
    return (
        <div>
            <ToastContainer position="top-center" />

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