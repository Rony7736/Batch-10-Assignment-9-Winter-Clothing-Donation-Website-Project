import DonateWinter from "../assets/Donate winter .jpg"
import DonateWinter2 from "../assets/Donate winter (1).jpg"
import DonateWinter3 from "../assets/Donate winter (1).jpeg"
import Distribution from "../assets/Distribution (1).jpg"
import Distribution1 from "../assets/Distribution (1).jpeg"
import Distribution2 from "../assets/Distribution (2).jpg"
import Mission from "../assets/about-mission (1).jpeg"
import Mission2 from "../assets/about-mission (1).webp"
import Mission3 from "../assets/about-mission (2).webp"



const About = () => {
    return (
        <div className="py-6 ">
            <h2 className="animate__animated animate__fadeInUp w-7/12 mx-auto text-center text-purple-600 text-2xl lg:text-3xl font-bold -10 mb-4">About Our Winter Clothing Donation</h2>
            <p className="lg:w-7/12 mx-auto text-center px-6">Winter Clothes Campaign is dedicated to ensuring everyone stays warm during the coldest months. Our mission is to provide winter clothing to families and individuals who cannot afford it. Millions face the bitter cold without proper clothing, risking their health and even their lives. But you can help change that!</p>

            <div className="">
                <h2 className="text-2xl font-bold mt-6 mb-3 ml-16 text-green-500">Donate winter clothes</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-3 mx-12">
                    <div className="card bg-base-100 shadow-xl p-4">
                        <img className="h-[190px] lg:h-[250px] rounded-xl" src={DonateWinter} alt="" />
                    </div>
                    <div className="card bg-base-100 shadow-xl p-4">
                        <img className="h-[190px] lg:h-[250px] rounded-xl" src={DonateWinter2} alt="" />
                    </div>
                    <div className="card bg-base-100 shadow-xl p-4">
                        <img className="h-[190px] lg:h-[250px] rounded-xl" src={DonateWinter3} alt="" />
                    </div>
                </div>
            </div>

            <div className="">
                <h2 className="text-2xl font-bold mt-6 mb-3 ml-16 text-green-500">Volunteers help us collect and distribute</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-3 mx-12">
                    <div className="card bg-base-100 shadow-xl p-4">
                        <img className="h-[190px] lg:h-[250px] rounded-xl" src={Distribution} alt="" />
                    </div>
                    <div className="card bg-base-100 shadow-xl p-4">
                        <img className="h-[190px] lg:h-[250px] rounded-xl" src={Distribution1} alt="" />
                    </div>
                    <div className="card bg-base-100 shadow-xl p-4">
                        <img className="h-[190px] lg:h-[250px] rounded-xl" src={Distribution2} alt="" />
                    </div>
                </div>
            </div>

            <div className="">
                <h2 className="text-2xl font-bold mt-6 mb-3 mx-10 ml-16 text-green-500">Share our mission with your friends and family.</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-3 mx-12">
                    <div className="card bg-base-100 shadow-xl p-4">
                        <img className="h-[190px] lg:h-[250px] rounded-xl" src={Mission} alt="" />
                    </div>
                    <div className="card bg-base-100 shadow-xl p-4">
                        <img className="h-[190px] lg:h-[250px] rounded-xl" src={Mission2} alt="" />
                    </div>
                    <div className="card bg-base-100 shadow-xl p-4">
                        <img className="h-[190px] lg:h-[250px] rounded-xl" src={Mission3} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;