import { useNavigate } from "react-router-dom";
import "../../styles/navbar.css";


function Navbar(){


    const navigate = useNavigate();



    return(


        <nav className="navbar">


            <div className="logo">

                💜 Moms Connect

            </div>



            <div className="nav-buttons">


                <button

                    className="login-btn"

                    onClick={()=>navigate("/login")}

                >

                    Login

                </button>




                <button

                    className="signup-btn"

                    onClick={()=>navigate("/signup")}

                >

                    Sign Up

                </button>



            </div>



        </nav>


    );


}


export default Navbar;