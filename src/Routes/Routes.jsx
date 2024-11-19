import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import HowToHelp from "../Pages/HowToHelp";
import Dashboard from "../Pages/Dashboard";
import DonationCampaigns from "../Pages/DonationCampaigns";
import Details from "../Details";

import 'animate.css';
// import { WOW } from 'wowjs';


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
        loader: () => fetch("/donation.json")
      },
      {
        path: "/tohelp",
        element: <HowToHelp></HowToHelp>
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: async ({ params }) => {
          const res = await fetch("/donation.json")
          const data = await res.json()

          const singleData = data.find(d => d.id == params.id)
          // console.log(singleData);
          
          return singleData;
        }
      },
    ]
  },
]);

export default router