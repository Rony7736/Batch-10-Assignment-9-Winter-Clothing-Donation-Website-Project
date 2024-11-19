import { NavLink } from "react-router-dom";
import login from "../../assets/login.avif"

const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
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
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className="p-6">New to the website? Please <NavLink to="/register" className="underline text-red-500">Register</NavLink></p>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;