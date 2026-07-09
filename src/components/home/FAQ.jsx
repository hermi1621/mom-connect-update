import "../../styles/faq.css";
import { useState } from "react";


const questions = [

    {
        question:"How does Moms Connect help mothers?",
        answer:
        "Moms Connect helps mothers organize schedules, track habits, write journals, and receive professional support."
    },

    {
        question:"Can I keep my journal private?",
        answer:
        "Yes. Your journal entries can be protected with a password for privacy."
    },

    {
        question:"How do reminders work?",
        answer:
        "You can create schedules with dates and times. Moms Connect will remind you before important tasks."
    },

    {
        question:"How can I contact experts?",
        answer:
        "You can browse verified experts and book consultations when needed."
    },

    {
        question:"Is Moms Connect free?",
        answer:
        "Basic features are free. Expert consultations and premium services may require payment."
    }

];


function FAQ(){


    const [active,setActive] = useState(null);



    return(

        <section className="faq">


            <div className="section-header">

                <span>
                    🌸 Questions
                </span>


                <h2>
                    Frequently Asked Questions
                </h2>


                <p>
                    Everything you need to know about Moms Connect.
                </p>

            </div>



            <div className="faq-container">


            {
                questions.map((item,index)=>(


                    <div 
                    className="faq-item"
                    key={index}
                    >


                        <button
                        onClick={()=> 
                            setActive(
                                active===index ? null : index
                            )
                        }
                        >

                            {item.question}


                            <span>
                                +
                            </span>


                        </button>



                        {
                            active===index && (

                                <p>

                                    {item.answer}

                                </p>

                            )
                        }


                    </div>


                ))
            }


            </div>


        </section>

    );

}


export default FAQ;