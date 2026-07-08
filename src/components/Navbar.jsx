import "./Navbar.css";

function Navbar() {

    return (

        <nav className="navbar">

            <div className="logo">

                🌸 Moms Connect

            </div>

            <ul className="nav-links">

                <li><a href="#">Home</a></li>

                <li><a href="#">Features</a></li>

                <li><a href="#">Experts</a></li>

                <li><a href="#">Pricing</a></li>

                <li><a href="#">Contact</a></li>

            </ul>

            <div className="nav-buttons">

                <button className="login-btn">

                    Login

                </button>

                <button className="signup-btn">

                    Sign Up

                </button>

            </div>

        </nav>

    );

}

export default Navbar;