import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import HowToHelp from "../Pages/HowToHelp";
import Dashboard from "../Pages/Dashboard";
import DonationCampaigns from "../Pages/DonationCampaigns";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/donation",
            element: <DonationCampaigns></DonationCampaigns>,
            loader: ()=> fetch("/donation.json")
        },
        {
            path: "/tohelp",
            element: <HowToHelp></HowToHelp>
        },
        {
            path: "/dashboard",
            element: <Dashboard></Dashboard>
        },
      ]
    },
  ]);

  export default router