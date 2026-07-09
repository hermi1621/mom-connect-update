import "../styles/dashboard.css";

import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";


function Dashboard(){


    const {user} = useContext(AuthContext);



    return(


        <div className="dashboard">



            <aside className="sidebar">


                <h2>

                    💜 Moms Connect

                </h2>



                <div className="user-mini-profile">


                    <img

                    src={

                        user?.avatar

                        ?

                        user.avatar

                        :

                        "/images/default-avatar.png"

                    }

                    alt="avatar"

                    />



                    <h3>

                        {user?.name}

                    </h3>



                </div>



                <button>

                    📅 Scheduling

                </button>



                <a href="/habit">

                    🔥 Habit Tracking

                </a>



                <a href="/analytics">

                    📊 Analytics

                </a>



                <a href="/journal">

                    📖 Journaling

                </a>



                <a href="/apps">

                    📱 Apps

                </a>



                <a href="/experts">

                    👩‍⚕️ Experts

                </a>



                <a href="/profile">

                    👤 Profile

                </a>



            </aside>





            <main className="dashboard-content">



                <div className="welcome-card">



                    <h1>

                        Welcome back, {user?.name} 💜

                    </h1>



                    <p>

                        Manage your day, track your habits,

                        and grow every day.

                    </p>



                    <p>

                        📧 {user?.email}

                    </p>



                    <p>

                        🌍 {user?.country || "No country"}

                    </p>



                </div>






                <div className="dashboard-cards">



                    <div>

                        <h3>

                            Today's Tasks

                        </h3>


                        <p>

                            0 Completed

                        </p>


                    </div>




                    <div>

                        <h3>

                            Habit Progress

                        </h3>


                        <p>

                            0%

                        </p>


                    </div>




                    <div>

                        <h3>

                            Journal Entries

                        </h3>


                        <p>

                            0 Notes

                        </p>


                    </div>



                </div>



            </main>



        </div>


    );


}


export default Dashboard;