import "../styles/signup.css";
import { useState } from "react";


const avatars = [

    "/images/avatars/avatar1.png",
    "/images/avatars/avatar2.png",
    "/images/avatars/avatar3.png"

];


function Signup(){

    const [method,setMethod] = useState("");

    const [avatar,setAvatar] = useState("");



    return(

        <div className="signup-page">


            <div className="signup-box">


                <h1>
                    Create Your Account 💜
                </h1>


                <p>
                    Start your journey with Moms Connect
                </p>



                {
                    !method && (

                    <div className="method-buttons">


                        <button
                        onClick={()=>setMethod("email")}
                        >

                            📧 Sign up with Email

                        </button>


                        <button
                        onClick={()=>setMethod("phone")}
                        >

                            📱 Sign up with Phone

                        </button>


                    </div>

                    )
                }



                {
                    method && (

                    <form>


                        <input
                        placeholder="Your Name"
                        />


                        {
                            method==="email" &&

                            <input
                            placeholder="Email Address"
                            />

                        }



                        {
                            method==="phone" &&

                            <input
                            placeholder="Phone Number"
                            />

                        }



                        {
                            method==="email" &&

                            <input
                            placeholder="Phone Number (Optional)"
                            />

                        }



                        {
                            method==="phone" &&

                            <input
                            placeholder="Email (Optional)"
                            />

                        }



                        <select>

                            <option>
                                Select Country
                            </option>

                            <option>
                                Ethiopia
                            </option>

                            <option>
                                United States
                            </option>

                            <option>
                                United Kingdom
                            </option>


                        </select>



                        <input
                        type="password"
                        placeholder="Password"
                        />


                        <input
                        type="password"
                        placeholder="Confirm Password"
                        />



                        <h3>
                            Choose Avatar
                        </h3>



                        <div className="avatars">


                        {
                            avatars.map((item,index)=>(

                                <img

                                key={index}

                                src={item}

                                className={
                                    avatar===item
                                    ?
                                    "selected-avatar"
                                    :
                                    ""
                                }

                                onClick={()=>setAvatar(item)}

                                />

                            ))
                        }


                        </div>



                        <button>
                            Create Account
                        </button>



                    </form>

                    )
                }



            </div>


        </div>

    );

}


export default Signup;