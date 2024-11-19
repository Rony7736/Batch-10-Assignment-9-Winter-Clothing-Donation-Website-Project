import { NavLink, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/login.avif"
import { useContext, useState } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

import { FaGoogle } from "react-icons/fa";

const Login = () => {

    const { setUser, handleLogin } = useContext(authContext)

    const [error, setError] = useState({})

    const location = useLocation()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = new FormData(e.target)
        const email = form.get("email")
        const password = form.get("password")
        // console.log({email, password});

        handleLogin(email, password)
            .then(result => {
                const user = result.user
                setUser(user)
                // console.log(user)
                navigate(location?.state ? location.state : "/")
            })
            .catch((err) => {
                const errorMessage = err.message;
                setError({ ...error, login: err.message })
                toast.error(errorMessage)
            });
    }

    return (
        <div>
            <div className="hero bg-base-200 lg:py-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img className="lg:ml-12 rounded-3xl" src={login} alt="" />

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <h1 className="text-5xl font-bold text-center pt-6">Login now!</h1>
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />

                                {
                                    error.login && (
                                        <label className="label text-sm text-red-600">
                                            {error.login}
                                        </label>)
                                }

                                <label className="label">
                                    <a href="#" className="label-text-alt text-red-600 text-sm link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-neutral w-60 mx-auto">Login</button>

                            </div>

                        </form>

                        <div className="flex justify-center">
                            <button className="btn btn-neutral w-60 mx-auto"><FaGoogle size={20}></FaGoogle>Login with Google</button>
                        </div>
                        <p className="p-6 text-center">New to the website? Please <NavLink to="/register" className="underline text-red-500">Register</NavLink></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;