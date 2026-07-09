import "../../styles/hero.css";

import heroImage from "../../assets/hero/images.jpg";

import { FaArrowRight, FaPlay } from "react-icons/fa";

import { useNavigate } from "react-router-dom";



function Hero() {


    const navigate = useNavigate();



    return (


        <section className="hero">



            <div className="hero-left">



                <span className="hero-tag">

                    💜 Empowering Mothers Every Day

                </span>





                <h1>

                    Every Mother Deserves

                    <br />

                    Support, Love & Growth

                </h1>





                <p>

                    Organize your schedule, build healthy habits,

                    write your journal, connect with experts,

                    and become the best version of yourself.

                </p>






                <div className="hero-buttons">



                    <button

                        className="primary-btn"

                        onClick={()=>navigate("/signup")}

                    >

                        Get Started

                        <FaArrowRight/>

                    </button>





                    <button

                        className="secondary-btn"

                        onClick={()=>navigate("/login")}

                    >

                        <FaPlay/>

                        Login

                    </button>



                </div>






                <div className="hero-stats">



                    <div>

                        <h2>

                            10K+

                        </h2>


                        <span>

                            Mothers

                        </span>

                    </div>





                    <div>

                        <h2>

                            50K+

                        </h2>


                        <span>

                            Schedules

                        </span>

                    </div>





                    <div>

                        <h2>

                            100+

                        </h2>


                        <span>

                            Experts

                        </span>

                    </div>



                </div>





            </div>







            <div className="hero-right">



                <div className="hero-image">



                    <img

                        src={heroImage}

                        alt="Mother using Moms Connect"

                    />



                </div>



            </div>





        </section>


    );


}


export default Hero;