
import { toast } from "react-toastify";

const Modal = () => {



    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleClick = () => {
        toast.success("Thank you! We will reach your destination soon.!")

    }


    return (
        <div>

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={handleSubmit} className="space-y-4 py-6">

                        <label className="flex justify-around items-center">
                            <h2 className="text-purple-800 font-bold text-xl">Quantity of Items</h2>
                            <input className="py-2 px-3 rounded-lg" type="text" placeholder="Quantity of Items" required />
                        </label>

                        <label className="flex justify-around items-center">
                            <h2 className="text-purple-800 font-bold text-xl">Item Type</h2>
                            <select className="py-2 px-3 rounded-lg" required>
                                <option value="">Select an item type</option>
                                <option value="blanket">Blanket</option>
                                <option value="jacket">Jacket</option>
                                <option value="sweater">Sweater</option>
                            </select>
                        </label>

                        <label className="flex justify-around items-center">
                            <h2 className="text-purple-800 font-bold text-xl">Pickup Location</h2>
                            <input className="py-2 px-3 rounded-lg" type="text" placeholder="Exam: House 12, Road 5, Dhanmondi, Dhaka" required />
                        </label>

                        <label  className="flex justify-around items-center">
                            <h2 className="text-purple-800 font-bold text-xl">Additional Notes</h2>
                            <textarea  className="py-2 px-3 rounded-lg" placeholder="(Optional)" name="notes"/>
                        </label>

                    </form>

                    <div className="modal-action">
                        <form method="dialog">
                            <button onClick={handleClick} className="btn btn-warning text-white">Submit</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default Modal;