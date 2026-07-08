import "../styles/experts.css";
import { useState } from "react";


const experts=[

    {
        name:"Dr. Sarah Johnson",
        profession:"Psychiatrist",
        experience:"8 Years Experience",
        price:"$50 / hour",
        image:"/images/experts/expert1.png"
    },


    {
        name:"Dr. Maria Wilson",
        profession:"Mother Health Specialist",
        experience:"10 Years Experience",
        price:"$40 / hour",
        image:"/images/experts/expert2.png"
    },


    {
        name:"Dr. Anna Brown",
        profession:"Family Doctor",
        experience:"7 Years Experience",
        price:"$45 / hour",
        image:"/images/experts/expert3.png"
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
            "Payment successful! You can now access your expert session."
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



                    <img

                    src={expert.image}

                    alt={expert.name}

                    />



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