import "../styles/analytics.css";
import { useEffect, useState } from "react";


function Analytics(){


    const [completedTasks,setCompletedTasks] = useState(0);

    const [remainingTasks,setRemainingTasks] = useState(0);



    function calculateAnalytics(){


        const savedTasks = JSON.parse(
            localStorage.getItem("habitTasks")
        ) || [];



        const completed = savedTasks.filter(
            task => task.completed
        ).length;



        const remaining = savedTasks.filter(
            task => !task.completed
        ).length;



        setCompletedTasks(completed);

        setRemainingTasks(remaining);


    }




    useEffect(()=>{


        calculateAnalytics();



        window.addEventListener(
            "storage",
            calculateAnalytics
        );



        return ()=>{

            window.removeEventListener(
                "storage",
                calculateAnalytics
            );

        };


    },[]);





    const totalTasks =
    completedTasks + remainingTasks;



    const completedPercent =
    totalTasks === 0
    ?
    0
    :
    Math.round(
        (completedTasks / totalTasks) * 100
    );



    const remainingPercent =
    totalTasks === 0
    ?
    0
    :
    Math.round(
        (remainingTasks / totalTasks) * 100
    );





    return(


        <div className="analytics-page">


            <h1>
                📊 Your Analytics
            </h1>




            <div className="analytics-grid">



                <div className="analytics-card">


                    <h2>
                        🔥 Completed Tasks
                    </h2>



                    <div

                    className="circle"

                    style={{

                        background:
                        `conic-gradient(
                            #22c55e 
                            ${completedPercent}%,
                            #e5e7eb 
                            0
                        )`

                    }}

                    >


                        <span>

                            {completedPercent}%

                        </span>


                    </div>



                    <p>
                        {completedTasks} Completed
                    </p>


                </div>






                <div className="analytics-card">


                    <h2>
                        ⏳ Remaining Tasks
                    </h2>



                    <div

                    className="circle"

                    style={{

                        background:
                        `conic-gradient(
                            #7c3aed 
                            ${remainingPercent}%,
                            #e5e7eb 
                            0
                        )`

                    }}

                    >


                        <span>

                            {remainingPercent}%

                        </span>


                    </div>




                    <p>
                        {remainingTasks} Remaining
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
                        {completedTasks}
                    </strong>

                </div>





                <div>

                    <h2>
                        📌
                    </h2>

                    <p>
                        Total Tasks
                    </p>

                    <strong>
                        {totalTasks}
                    </strong>

                </div>



            </div>



        </div>


    );


}


export default Analytics;