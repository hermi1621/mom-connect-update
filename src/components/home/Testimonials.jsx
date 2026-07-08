import "../../styles/testimonials.css";


const reviews = [

    {
        name:"Sarah Johnson",
        role:"New Mother",
        message:
        "Moms Connect helped me organize my daily routine and become more confident.",
        image:"/images/mothers/mother1.jpg"
    },

    {
        name:"Emily Brown",
        role:"Working Mother",
        message:
        "The habit tracking and scheduling features changed the way I manage my time.",
        image:"/images/mothers/mother2.jpg"
    },

    {
        name:"Lily Anderson",
        role:"Mother & Entrepreneur",
        message:
        "I love the expert support and the peaceful journaling experience.",
        image:"/images/mothers/mother3.jpg"
    }

];


function Testimonials(){

    return(

        <section className="testimonials">


            <div className="section-header">

                <span>
                    💕 Community Love
                </span>

                <h2>
                    What Mothers Say
                </h2>

                <p>
                    Thousands of mothers are growing
                    with Moms Connect.
                </p>

            </div>



            <div className="review-grid">


                {
                    reviews.map((review,index)=>(


                        <div 
                        className="review-card"
                        key={index}
                        >


                            <div className="stars">

                                ⭐⭐⭐⭐⭐

                            </div>


                            <p>

                                "{review.message}"

                            </p>



                            <div className="review-user">


                                <img 
                                src={review.image}
                                alt={review.name}
                                />


                                <div>

                                    <h3>
                                        {review.name}
                                    </h3>

                                    <span>
                                        {review.role}
                                    </span>

                                </div>


                            </div>



                        </div>


                    ))
                }


            </div>


        </section>


    );

}


export default Testimonials;