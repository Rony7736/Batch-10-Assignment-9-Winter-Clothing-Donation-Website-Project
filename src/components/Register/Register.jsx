
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import register from "../../assets/register.avif"
import { useContext, useState } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa"
import { FaEyeSlash } from "react-icons/fa";

const Register = () => {

    const contextData = useContext(authContext)
    const { handleRegister, setUser, updateUSerProfile } = contextData

    const [error, setError] = useState({})
    const [showPassword, setShowPassword] = useState(false)

    const location = useLocation()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get("name")
        if (name.length < 4) {
            setError({ ...error, name: "must be more then 4 chatracter long" })
            return;
        }
        const email = form.get("email")
        const image = form.get("image")
        const password = form.get("password")
        // console.log({name, email, image, password});

        handleRegister(email, password)
            .then(result => {
                const user = result.user
                setUser(user)
                // console.log(user)
                navigate(location && "/")
                updateUSerProfile({ displayName: name, photoURL: image })
                    .then(() => {
                        navigate("/")
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage)
            });

    }

    return (
        <div>
            <div className="hero bg-base-200 lg:py-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img className="lg:ml-12 rounded-3xl" src={register} alt="" />

                    </div>

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl my-10">
                        <h1 className="text-4xl font-bold text-center pt-6">Register now!</h1>
                        <form onSubmit={handleSubmit} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                            </div>
                            {
                                error.name &&
                                <label className="label text-xs text-red-600">
                                    {error.name}
                                </label>
                            }

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="photo url" name="image" className="input input-bordered" required />
                            </div>

                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"}
                                    placeholder="Password" name="password" className="input input-bordered" required />
                                <button onClick={() => setShowPassword(!showPassword)} className=" btn-xs absolute right-4 top-12">
                                    {
                                        showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                    }
                                </button>
                            </div>

                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-neutral w-60 mx-auto">Register</button>
                            </div>

                        </form>

                        <div className="flex justify-center">
                            <button className="btn btn-neutral w-60 mx-auto"><FaGoogle size={20}></FaGoogle>Login with Google</button>
                        </div>

                        <p className="p-6 text-center">Already Have An Account? Please <NavLink to="/login" className="underline text-red-500">Login</NavLink></p>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;


