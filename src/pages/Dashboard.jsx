import "../styles/dashboard.css";


function Dashboard(){

    return(

        <div className="dashboard">


            <aside className="sidebar">


                <h2>
                    💜 Moms Connect
                </h2>


                <button>
                    📅 Scheduling
                </button>


               <a href="/habit-tracking">
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


                <button>
                    👩‍⚕️ Experts
                </button>


                <button>
                    👤 Profile
                </button>


            </aside>



            <main className="dashboard-content">


                <div className="welcome-card">

                    <h1>
                        Welcome back 💜
                    </h1>

                    <p>
                        Manage your day, track your habits,
                        and grow every day.
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