import { useLoaderData } from "react-router-dom";
import Modal from "./components/Modal";

const Details = () => {

    const singleData = useLoaderData()
    // console.log(singleData);
    const { id, title, image, description, status, contactInfo, division } = singleData

    return (
        <div className="py-10">
            <h2 className="text-3xl text-center text-purple-600 font-bold my-6">Donation Details</h2>

            <div className="card bg-base-100 shadow-xl border md:w-[450px] md:h-[500px] mx-auto mb-10 p-6">
                <figure>
                    <img className="rounded-xl h-[200px]" src={image} alt="" />
                </figure>

                <div className="py-6">
                    <h2 className="card-title mb-3">{title}</h2>
                    <div className="flex gap-20 mb-2">
                        <p className="font-bold"> Status : </p>
                        <p className="badge bg-green-200 px-6 py-3 font-medium">{status}</p>
                    </div>

                    <div className="flex gap-12 mb-2">
                        <p className="font-semibold">Contact info:</p>
                        <p> {contactInfo}</p>
                    </div>

                    <div className="flex items-center gap-20 mb-2">
                        <p className="font-semibold">Division:</p>
                        <p className="">{division}</p>
                    </div>
                    <p>Description: {description}</p>
                </div>

                <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn btn-warning text-white">Donate Now</button>

                <Modal></Modal>

            </div>
        </div>
    );
};

export default Details;