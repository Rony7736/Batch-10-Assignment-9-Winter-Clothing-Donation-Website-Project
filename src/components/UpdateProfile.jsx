import { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateProfile = () => {

    const { updateUSerProfile } = useContext(authContext)
    

    const [photoURL, setPhotoURL] = useState("");
    const [displayName, setDisplayName] = useState("");
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const image = e.target.image.value

        updateUSerProfile({photoURL, displayName})
        .then(() => {
            toast.success("Profile updated successfully!");
            navigate("/dashboard"); 
          })
          .catch((error) => {
            console.error("Error updating profile:", error);
            toast.error("Failed to update profile. Please try again.");
          });
    };


    return (
        <div className="py-12 flex justify-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl my-12">
            <h1 className="text-center mt-6 text-2xl font-bold">Update Profile</h1>

            <form onSubmit={handleUpdate} className="card-body">

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" placeholder="Enter photo URL" name="image" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">User Name</span>
                    </label>
                    <input type="text" placeholder="Enter your name" name="name" value={displayName} onChange={(e) => setDisplayName(e.target.value)} className="input input-bordered" />
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-neutral" type="submit">Update Information</button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default UpdateProfile;

