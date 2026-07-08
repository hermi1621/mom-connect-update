import "../styles/analytics.css";
import { useState } from "react";


function Analytics(){


    const [habitProgress] = useState(80);

    const [scheduleProgress] = useState(70);



    return(


        <div className="analytics-page">


            <h1>
                📊 Your Analytics
            </h1>



            <div className="analytics-grid">



                <div className="analytics-card">


                    <h2>
                        🔥 Habit Tracking
                    </h2>


                    <div className="progress-bar">


                        <div

                        className="progress-fill"

                        style={{
                            width:`${habitProgress}%`
                        }}

                        >

                        </div>


                    </div>


                    <p>
                        {habitProgress}% Completed
                    </p>


                </div>




                <div className="analytics-card">


                    <h2>
                        📅 Scheduling
                    </h2>


                    <div className="progress-bar">


                        <div

                        className="progress-fill"

                        style={{
                            width:`${scheduleProgress}%`
                        }}

                        >

                        </div>


                    </div>


                    <p>
                        {scheduleProgress}% Completed
                    </p>


                </div>




            </div>




            <div className="statistics">


                <div>

                    <h2>
                        ✅
                    </h2>

                    <p>
                        Completed Tasks
                    </p>

                    <strong>
                        120
                    </strong>

                </div>



                <div>

                    <h2>
                        ❌
                    </h2>

                    <p>
                        Missed Tasks
                    </p>

                    <strong>
                        20
                    </strong>

                </div>



            </div>



        </div>


    );

}


export default Analytics;