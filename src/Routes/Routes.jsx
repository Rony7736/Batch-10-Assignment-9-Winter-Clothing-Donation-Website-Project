import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import DonationCampaigns from "../components/DonationCampaigns";
import HowToHelp from "../components/HowToHelp";
import Dashboard from "../components/Dashboard";


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