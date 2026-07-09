import "../styles/signup.css";

import { useState } from "react";

import API from "../services/api";


const avatars = [

    "/images/avatars/avatar1.png",

    "/images/avatars/avatar2.png",

    "/images/avatars/avatar3.png"

];


function Signup(){


    const [method,setMethod] = useState("");

    const [avatar,setAvatar] = useState("");

    const [name,setName] = useState("");

    const [email,setEmail] = useState("");

    const [phone,setPhone] = useState("");

    const [country,setCountry] = useState("");

    const [password,setPassword] = useState("");

    const [confirmPassword,setConfirmPassword] = useState("");



    async function handleSignup(e){


        e.preventDefault();



        if(password !== confirmPassword){

            alert("Passwords do not match");

            return;

        }



        try{


            const response = await API.post(

                "/auth/signup",

                {

                    name,

                    email,

                    phone,

                    country,

                    password,

                    avatar

                }

            );



            console.log(response.data);



            alert("Signup successful");



        }


        catch(error){


            console.log(error);



            alert(

                error.response?.data?.message ||

                "Signup failed"

            );


        }


    }



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


                <form onSubmit={handleSignup}>


                    <input

                    placeholder="Your Name"

                    value={name}

                    onChange={(e)=>setName(e.target.value)}

                    required

                    />




                    {
                    method==="email" &&

                    <input

                    placeholder="Email Address"

                    type="email"

                    value={email}

                    onChange={(e)=>setEmail(e.target.value)}

                    required

                    />

                    }




                    {
                    method==="phone" &&

                    <input

                    placeholder="Phone Number"

                    value={phone}

                    onChange={(e)=>setPhone(e.target.value)}

                    required

                    />

                    }




                    {
                    method==="email" &&


                    <input

                    placeholder="Phone Number (Optional)"

                    value={phone}

                    onChange={(e)=>setPhone(e.target.value)}

                    />


                    }





                    {
                    method==="phone" &&


                    <input

                    placeholder="Email (Optional)"

                    value={email}

                    onChange={(e)=>setEmail(e.target.value)}

                    />


                    }




                    <select

                    value={country}

                    onChange={(e)=>setCountry(e.target.value)}

                    required

                    >

                        <option value="">

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

                    value={password}

                    onChange={(e)=>setPassword(e.target.value)}

                    required

                    />





                    <input

                    type="password"

                    placeholder="Confirm Password"

                    value={confirmPassword}

                    onChange={(e)=>setConfirmPassword(e.target.value)}

                    required

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