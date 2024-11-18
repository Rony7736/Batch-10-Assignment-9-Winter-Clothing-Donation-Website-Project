
const DonationCard = ({ donationaCard }) => {
    // console.log(donationaCard);
    const { id, title, image, description, status, contactInfo, division } = donationaCard

    return (
        <div className="card bg-base-100 shadow-xl border">
            <figure>
                <img className="object-cover w-full h-[230px]" src={image} alt="" />
            </figure>

            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="flex justify-between">
                    <span className="font-bold"> Status : </span>
                    <span className="badge bg-green-200 px-6 py-3 font-medium">{status}</span>
                </div>

                <div className="flex justify-between items-center ">
                    <p className="font-bold">Division:</p>
                    <span className="font-medium">{division}</span>
                </div>
                <button className="btn btn-warning text-white font-bold text-lg mt-3">Donate Now</button>         
            </div>
            
        </div>
    );
};

export default DonationCard;