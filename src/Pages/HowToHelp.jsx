
const HowToHelp = () => {
    return (
        <div className="py-10">
            <h2 className="WOW animate__animated animate__fadeInUp text-3xl text-center text-purple-600 font-bold my-6" data-wow-duration="3s" data-wow-delay="1s">How to Help us</h2>
            <p className="text-center lg:w-7/12 lg:mx-auto mb-6 mx-10">Join us in spreading warmth this winter! You can help by donating winter clothes, contributing funds, or volunteering your time. Drop off your items at designated locations or support us online with a secure donation. Together, we can bring comfort to those in need. Let’s make a difference—get involved today</p>

            <div className="flex flex-col lg:flex-row justify-around gap-4 mx-10 mb-10">

                <div className="card bg-base-100 shadow-xl px-10 py-6  md:w-[500px] lg:h-[300px] mb-6">
                    <h2 className="text-2xl font-bold my-2 text-green-500">Donation Guidelines</h2>
                    <ul>
                        <li className="list-disc">What to Donate: Winter essentials like jackets, sweaters, blankets, gloves, scarves, and hats.</li>
                        <li className="list-disc">Condition: All items should be clean, gently used, or new.</li>
                        <li className="list-disc">Drop-off Locations: Visit our locations page for the nearest drop-off point.</li>
                        <li className="list-disc">Packaging: Please pack items neatly in bags or boxes.</li>
                        <li className="list-disc">Deadline: Donations are accepted until [specific date].</li>
                    </ul>
                </div>

                <div className="card bg-base-100 shadow-xl px-10 py-6 md:w-[500px] lg:h-[300px]">
                    <h2 className="text-2xl font-bold my-2 text-green-500">Volunteer Opportunities</h2>
                    <ul>
                        <li className="list-disc">Roles Available: Help with clothing collection, sorting, packing, or distribution.</li>
                        <li className="list-disc">Time Commitment: Flexible shifts—choose what works best for you.</li>
                        <li className="list-disc">Locations: Volunteer at our donation centers or assist with delivery in local communities.</li>
                        <li className="list-disc">Sign Up: Fill out our volunteer form to get started.</li>
                    </ul>
                </div>

            </div>

            <div className="flex flex-col lg:flex-row justify-around mx-10">

                <div className="card bg-base-100 shadow-xl px-10 py-6  md:w-[500px] lg:h-[300px] mb-6">
                    <h2 className="text-2xl font-bold my-2 text-green-500">Contact Information:</h2>
                    <ul>
                        <li className="list-disc">Email: support@winterwarmth.org</li>
                        <li className="list-disc">Phone: +88 (017) 123-45672 (Available Mon-Fri, 9 AM–5 PM)</li>
                        <li className="list-disc">Office Address: Dhaka, Bonani</li>
                        <li className="list-disc">Social Media: Connect with us on Facebook, Instagram, and Twitter.</li>
                    </ul>
                </div>

            </div>

        </div>
    );
};

export default HowToHelp;