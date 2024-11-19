import { NavLink } from "react-router-dom";
import register from "../../assets/register.avif"
import { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";

const Register = () => {

    const contextData = useContext(authContext)
    const { handleRegister, setUser } = contextData


    // const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get("name")
        const email = form.get("email")
        const image = form.get("image")
        const password = form.get("password")
        // console.log({name, email, image, password});

        handleRegister(email, password)
            .then(result => {
                const user = result.user
                setUser(user)
                console.log(user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
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

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p>Already Have An Account? Please <NavLink to="/login" className="underline text-red-500">Login</NavLink></p>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;


