import { useLoaderData } from "react-router-dom";
import DonationCard from "./DonationCard";

const DonateCards = () => {
    const donationCards = useLoaderData()
    // console.log(donationCards);

    return (
        <div>
            <h2 className="text-xl lg:text-3xl font-bold text-center my-6 text-purple-600">Here is Donation Campaigns</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg: mb-6 mx-10">
                {
                    donationCards.map(donationaCard => <DonationCard key={donationaCard.id} donationaCard={donationaCard}></DonationCard>)
                }
            </div>
        </div>
    );
};

export default DonateCards;