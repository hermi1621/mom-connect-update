import "../styles/profile.css";

import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

import { useNavigate } from "react-router-dom";


function Profile(){


    const {user, logout} = useContext(AuthContext);


    const navigate = useNavigate();



    function handleLogout(){


        logout();


        navigate("/login");


    }



    if(!user){


        return (

            <h2>

                No user found

            </h2>

        );

    }



    return(


        <div className="profile-page">


            <div className="profile-card">



                <img

                src={

                    user.avatar

                    ?

                    user.avatar

                    :

                    "/images/default-avatar.png"

                }

                className="profile-avatar"

                />



                <h1>

                    Welcome {user.name} 💜

                </h1>




                <p>

                    📧 {user.email}

                </p>



                <p>

                    📱 {user.phone || "No phone"}

                </p>



                <p>

                    🌍 {user.country || "No country"}

                </p>




                <button

                onClick={handleLogout}

                >

                    Logout

                </button>



            </div>


        </div>


    );

}


export default Profile;