import "../styles/experts.css";


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



                    <button>

                        Book Session

                    </button>


                </div>


            ))

            }


            </div>


        </div>


    );

}


export default Experts;