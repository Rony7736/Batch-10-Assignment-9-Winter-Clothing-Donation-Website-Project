import success from "../assets/success.webp"
import success2 from "../assets/success (1).jpeg"
import success3 from "../assets/success (1).jpg"
import success4 from "../assets/success (2).jpeg"
import success5 from "../assets/success (1).webp"
import success6 from "../assets/success (2).webp"

const Success = () => {
    return (
        <div className="pb-10">
            <h2 className="text-3xl text-center text-purple-600 font-bold my-6">Success Stories</h2>
            <p className="text-center lg:w-7/12 lg:mx-auto mb-6 mx-10 ">Every donation creates a ripple of hope. Last winter, we reached over 10,000 people, including Rahima, a mother of three in Rajshahi. Struggling against the cold, she received jackets and blankets, transforming her family’s winter. Stories like hers show how your kindness brings warmth and joy to those in need.</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-10 gap-6 pb-6 card bg-base-100 border p-10">
                <div className="card bg-base-100 shadow-xl">
                    <img className="h-[190px] lg:h-[250px]" src={success} alt="" />
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <img className="h-[190px] lg:h-[250px]" src={success2}  alt="" />
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <img className="h-[190px] lg:h-[250px]" src={success3}  alt="" />
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <img className="h-[190px] lg:h-[250px]" src={success4}  alt="" />
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <img className="h-[190px] lg:h-[250px]" src={success5}  alt="" />
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <img className="h-[190px] lg:h-[250px]" src={success6}  alt="" />
                </div>
            </div>

        </div>
    );
};

export default Success;