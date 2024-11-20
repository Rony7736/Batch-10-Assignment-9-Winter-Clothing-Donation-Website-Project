import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { NavLink } from "react-router-dom";

const Dashboard = () => {

    const { user } = useContext(authContext)
    // console.log(user);


    return (
        <div className="py-10">
            <h2 className="text-center text-2xl mb-12 font-bold">Welcome {user.displayName}</h2>
            <div className="flex justify-center items-center">
                <div className="card card-side bg-base-100 shadow-xl p-6">
                    <figure>
                        {
                            user && user?.email ? <div>
                                <img className="w-40 rounded-2xl" src={user?.photoURL} alt="Movie" />
                            </div> : ""
                        }

                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">User Name: {user?.displayName}</h2>
                        <p>User Email: {user?.email}</p>
                        <div className="card-actions justify-end">
                            <NavLink to="/updateprofile">
                                <button className="btn btn-primary">Update</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;