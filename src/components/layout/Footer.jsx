import "../../styles/footer.css";

import {
    FaHeart,
    FaInstagram,
    FaTelegram,
    FaFacebook
} from "react-icons/fa";


function Footer(){

    return(

        <footer className="footer">


            <div className="footer-container">


                <div className="footer-brand">

                    <h2>
                        <FaHeart/>
                        Moms Connect
                    </h2>


                    <p>
                        Supporting mothers with love,
                        organization and personal growth.
                    </p>


                </div>



                <div className="footer-links">

                    <h3>
                        Explore
                    </h3>

                    <a href="#">
                        Home
                    </a>

                    <a href="#">
                        Features
                    </a>

                    <a href="#">
                        Experts
                    </a>

                    <a href="#">
                        Journal
                    </a>

                </div>



                <div className="footer-links">

                    <h3>
                        Services
                    </h3>

                    <a href="#">
                        Scheduling
                    </a>

                    <a href="#">
                        Habit Tracking
                    </a>

                    <a href="#">
                        Analytics
                    </a>

                    <a href="#">
                        App Integration
                    </a>

                </div>



                <div className="footer-social">

                    <h3>
                        Follow Us
                    </h3>


                    <div>

                        <FaInstagram/>

                        <FaTelegram/>

                        <FaFacebook/>

                    </div>


                </div>


            </div>



            <div className="copyright">

                © 2026 Moms Connect. All rights reserved.

            </div>


        </footer>

    );

}


export default Footer;