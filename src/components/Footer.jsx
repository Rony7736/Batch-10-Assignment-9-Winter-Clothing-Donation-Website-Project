import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div>

            <div className='bg-[#06091A]'>
                <div className='flex flex-col items-center justify-center py-10 w-10/12 mx-auto'>

                    <div className='flex flex-col lg:flex-row justify-between w-full'>

                        <div className='text-white'>
                            <h1 className='mb-6 text-3xl'>Winter Donation</h1>
                            <p className='w-[300px] text-[#9B9DA3] text-sm'>Even though the winter is welcomed by the privileged wealthy people by colorful pashminas and festive moods, it brings a lot of sufferings to the poor people of our country. Quite sadly, many poor people in our country cannot afford to buy warm clothes for winter.</p>
                            <div className="my-6">
                                <p className='w-64 text-white text-xl mb-6'>Social Media Links</p>
                                <div className="flex gap-4">
                                    <a href="" className="text-white"><FaFacebookF></FaFacebookF></a>
                                    <a href="" className="text-white"><FaInstagram></FaInstagram></a>
                                    <a href="" className="text-white"><FaTwitter></FaTwitter></a>

                                </div>
                            </div>
                        </div>

                        <div>
                            <h1 className='text-white mb-6 text-lg'>Quick Links</h1>

                            <ul className='text-[#9B9DA3] text-lg list-disc pl-4'>
                                <li>Home</li>
                                <li>Donation Campaigns</li>
                                <li>How to Help</li>
                                <li>Dashboard</li>
                            </ul>
                        </div>

                        <div className='mb-6'>
                            <h1 className='mb-6 text-white text-lg'>Contact Us</h1>

                            <div className="flex flex-col gap-3">
                                <input className='py-3 pl-3 rounded-xl' type="text" placeholder='Enter your Name' name="" id="" />
                                <input className='py-3 pl-3 rounded-xl' type="text" placeholder='Enter your email' name="" id="" />
                                <input className='py-3 pl-3 rounded-xl' type="text" placeholder='Enter your Number' name="" id="" />
                                <button className='py-3 pl-3 font-bold rounded-xl bg-gradient-to-b from-[#E9828E] to-[#F6C96A]'>Submit</button>
                            </div>
                        </div>

                    </div>

                    <p className='text-[#9B9DA3] mt-6'> &#64; 2024 Your Company All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;