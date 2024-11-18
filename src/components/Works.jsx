
const Works = () => {
    return (
        <div className="pb-10">
            <h2 className="text-3xl text-center font-bold my-6">How It Works</h2>
            <p className="text-center lg:w-7/12 lg:mx-auto mb-6 mx-10">We accept warm clothes, such as jackets, sweaters, shawls, blankets, and gloves, for children and adults. Ensure the clothes are clean and in good condition.</p>

            <div className="flex flex-col lg:flex-row justify-around gap-4 mx-10 mb-10">

                <div className="card bg-base-100 shadow-xl px-10 py-6  lg:w-[500px] h-[230px] mb-6">
                    <h2 className="text-2xl font-bold my-2">Steps to Donate:</h2>
                    <ul>
                        <li className="list-decimal">Sort out the winter clothes you want to donate.</li>
                        <li className="list-decimal">Pack them in a clean bag.</li>
                        <li className="list-decimal">Drop them off at our nearest collection point.</li>
                    </ul>
                </div>

                <div className="card bg-base-100 shadow-xl px-10 py-6 lg:w-[500px] h-[230px]">
                    <h2 className="text-2xl font-bold my-2">Collection Points</h2>
                    <ul>
                        <li className="list-disc">Dhaka Division: [Specific Address or Landmark].</li>
                        <li className="list-disc">Chittagong Division: [Specific Address or Landmark]</li>
                        <li className="list-disc">Rajshahi Division: [Specific Address or Landmark]</li>
                        <li className="list-disc">Sylhet Division: [Specific Address or Landmark]</li>
                        <li className="list-disc">Khulna Division: [Specific Address or Landmark]</li>
                    </ul>
                </div>

            </div>

            <div className="flex flex-col lg:flex-row justify-around mx-10">

                <div className="card bg-base-100 shadow-xl px-10 py-6  lg:w-[500px] h-[230px] mb-6">
                    <h2 className="text-2xl font-bold my-2">Supported Divisions</h2>
                    <ul>
                        <li className="list-disc">Dhaka Division: [Specific Address or Landmark].</li>
                        <li className="list-disc">Chittagong Division: [Specific Address or Landmark]</li>
                        <li className="list-disc">Rajshahi Division: [Specific Address or Landmark]</li>
                        <li className="list-disc">Sylhet Division: [Specific Address or Landmark]</li>
                        <li className="list-disc">Khulna Division: [Specific Address or Landmark]</li>
                    </ul>
                </div>

                <div className="card bg-base-100 shadow-xl px-10 py-6  lg:w-[500px] h-[230px]">
                    <h2 className="text-2xl font-bold my-2">Stay Updated</h2>
                    <ul>
                        <li className="list-disc">Dhaka Division: [Specific Address or Landmark].</li>
                        <li className="list-disc">Chittagong Division: [Specific Address or Landmark]</li>
                        <li className="list-disc">Rajshahi Division: [Specific Address or Landmark]</li>
                        <li className="list-disc">Sylhet Division: [Specific Address or Landmark]</li>
                        <li className="list-disc">Khulna Division: [Specific Address or Landmark]</li>
                    </ul>
                </div>

            </div>

        </div>
    );
};

export default Works;