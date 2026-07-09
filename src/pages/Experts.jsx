import "../styles/experts.css";
import { useState } from "react";


const experts=[

    {
        name:"Dr. Sarah Johnson",
        profession:"Psychiatrist",
        experience:"8 Years Experience",
        price:"500 birr / hour",
    },


    {
        name:"Dr. Maria Wilson",
        profession:"Mother Health Specialist",
        experience:"10 Years Experience",
        price:"400 birr/ hour",
    },


    {
        name:"Dr. Anna Brown",
        profession:"Family Doctor",
        experience:"7 Years Experience",
        price:"450 birr / hour",
    }

];



function Experts(){


    const [selectedExpert,setSelectedExpert] = useState(null);



    function openPayment(expert){

        setSelectedExpert(expert);

    }



    function closePayment(){

        setSelectedExpert(null);

    }



    function paySession(){

        alert(
            "use cbe or telebirr"
        );

        setSelectedExpert(null);

    }





    return(

        <div className="experts-page">


            <h1>
                👩‍⚕️ Expert Support
            </h1>



            <p>
                Connect with verified professionals
                who support mothers.
            </p>




            <div className="experts-grid">


            {

            experts.map((expert,index)=>(


                <div

                className="expert-card"

                key={index}

                >



                  



                    <h2>
                        {expert.name}
                    </h2>



                    <h3>
                        {expert.profession}
                    </h3>



                    <p>
                        ⭐ Certified Expert
                    </p>



                    <p>
                        {expert.experience}
                    </p>




                    <strong>
                        {expert.price}
                    </strong>




                    <button

                    onClick={()=>openPayment(expert)}

                    >

                        Book Session

                    </button>



                </div>


            ))

            }



            </div>








            {

            selectedExpert &&


            (

            <div className="payment-overlay">


                <div className="payment-box">


                    <h2>
                        🔒 Premium Expert Session
                    </h2>



                    <h3>
                        {selectedExpert.name}
                    </h3>



                    <p>
                        {selectedExpert.profession}
                    </p>



                    <div className="payment-price">

                        {selectedExpert.price}

                    </div>



                    <p>
                        Complete payment to access
                        this expert session.
                    </p>




                    <button

                    onClick={paySession}

                    >

                        💳 Pay Now

                    </button>




                    <button

                    className="cancel-btn"

                    onClick={closePayment}

                    >

                        Cancel

                    </button>



                </div>


            </div>

            )


            }




        </div>

    );

}


export default Experts;