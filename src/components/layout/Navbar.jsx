import "../../styles/navbar.css";
import { FaHeart } from "react-icons/fa";

function Navbar() {

    return (

        <nav className="navbar">

            <div className="logo">

                <FaHeart className="logo-icon"/>

                <h2>Moms Connect</h2>

            </div>

            <ul className="nav-links">

                <li><a href="#">Home</a></li>

                <li><a href="#">Scheduling</a></li>

                <li><a href="#">Habit Tracking</a></li>

                <li><a href="#">Analytics</a></li>

                <li><a href="#">Journal</a></li>

                <li><a href="#">Apps</a></li>

                <li><a href="#">Experts</a></li>

                <li><a href="#">Features</a></li>

            </ul>

            <button className="signup-btn">

                Sign Up

            </button>

        </nav>

    );

}

export default Navbar;