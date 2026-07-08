import "../../styles/features.css";

import {
    FaCalendarAlt,
    FaFire,
    FaChartLine,
    FaBookOpen,
    FaMobileAlt,
    FaUserMd
} from "react-icons/fa";


const features = [

    {
        icon:<FaCalendarAlt/>,
        title:"Smart Scheduling",
        description:
        "Create reminders, organize important events and receive notifications before your tasks."
    },

    {
        icon:<FaFire/>,
        title:"Habit Tracking",
        description:
        "Build healthy habits, track your progress and celebrate your achievements."
    },

    {
        icon:<FaChartLine/>,
        title:"Analytics",
        description:
        "Understand your productivity and see your growth through beautiful reports."
    },

    {
        icon:<FaBookOpen/>,
        title:"Personal Journal",
        description:
        "Write your thoughts, save memories and protect your private journal."
    },

    {
        icon:<FaMobileAlt/>,
        title:"App Integration",
        description:
        "Access your favorite apps without leaving your Moms Connect environment."
    },

    {
        icon:<FaUserMd/>,
        title:"Expert Support",
        description:
        "Connect with verified doctors and specialists when you need professional support."
    }

];


function Features(){

    return(

        <section className="features">


            <div className="section-header">

                <span>
                    🌸 Our Features
                </span>


                <h2>
                    Everything A Mother Needs
                </h2>


                <p>
                    Manage your daily life, improve yourself,
                    and get support in one beautiful platform.
                </p>


            </div>



            <div className="feature-grid">


                {
                    features.map((feature,index)=>(


                        <div 
                        className="feature-card"
                        key={index}
                        >


                            <div className="feature-icon">

                                {feature.icon}

                            </div>


                            <h3>

                                {feature.title}

                            </h3>


                            <p>

                                {feature.description}

                            </p>


                        </div>


                    ))
                }


            </div>



        </section>


    );

}


export default Features;