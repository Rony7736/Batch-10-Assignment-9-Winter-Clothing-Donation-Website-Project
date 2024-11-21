
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
import { useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const ForgetPassword = () => {

    const {email} = useContext(authContext)


    const navigate = useNavigate()

    // console.log(location);

 
    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = e.target.email.value
        // console.log(email);
        sendPasswordResetEmail(auth, email)
            .then(data => {
                toast.success("Password Reset email Sent, Please check your email")
                navigate("/login")
            })
            .catch(err => {
                toast.error(err.message)
            })
    }

    return (
        <div className="py-12 flex justify-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className="text-2xl font-bold text-center mt-6">Forgot Password?</h2>
                <form onSubmit={(e) => handleSubmit(e)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" value={email} className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Reset</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;