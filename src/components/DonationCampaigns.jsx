import { Outlet } from "react-router-dom";
import DonateCards from "./DonateCards";

const DonationCampaigns = () => {
    return (
        <div>
            <Outlet></Outlet>
            <DonateCards></DonateCards>
        </div>
    );
};

export default DonationCampaigns;