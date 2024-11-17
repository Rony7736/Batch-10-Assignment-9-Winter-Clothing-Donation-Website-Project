import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            I am main Layout
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;