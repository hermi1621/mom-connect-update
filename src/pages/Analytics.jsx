import "../styles/analytics.css";

import { useEffect, useState } from "react";

import API from "../services/api";

import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";



function Analytics(){


    const [total,setTotal] = useState(0);

    const [completed,setCompleted] = useState(0);

    const [remaining,setRemaining] = useState(0);

    const [completedPercent,setCompletedPercent] = useState(0);

    const [remainingPercent,setRemainingPercent] = useState(0);






    useEffect(()=>{


        getHabitData();


    },[]);






    async function getHabitData(){


        try{


            const response = await API.get(

                "/habits"

            );



            const habits = response.data;





            const totalHabits = habits.length;



            const completedHabits = habits.filter(

                habit => habit.completed === true

            ).length;





            const remainingHabits =

                totalHabits - completedHabits;







            const completePercentage = totalHabits

            ?

            Math.round(

                (completedHabits / totalHabits) * 100

            )

            :

            0;





            const remainingPercentage = totalHabits

            ?

            Math.round(

                (remainingHabits / totalHabits) * 100

            )

            :

            0;







            setTotal(totalHabits);

            setCompleted(completedHabits);

            setRemaining(remainingHabits);

            setCompletedPercent(completePercentage);

            setRemainingPercent(remainingPercentage);



        }


        catch(error){


            console.log(error);


        }


    }







    return(


        <div className="analytics-page">



            <h1>

                📊 Habit Analytics

            </h1>





            <div className="analytics-summary">



                <h2>

                    Total Habits: {total}

                </h2>



                <h3>

                    ✅ Completed: {completed}

                </h3>



                <h3>

                    ⏳ Remaining: {remaining}

                </h3>



            </div>







            <div className="circle-container">



                <div className="circle-card">


                    <h2>

                        Completed

                    </h2>



                    <CircularProgressbar

                        value={completedPercent}

                        text={`${completedPercent}%`}

                        styles={buildStyles({

                            textSize:"20px"

                        })}

                    />


                </div>








                <div className="circle-card">


                    <h2>

                        Not Completed

                    </h2>



                    <CircularProgressbar

                        value={remainingPercent}

                        text={`${remainingPercent}%`}

                        styles={buildStyles({

                            textSize:"20px"

                        })}

                    />


                </div>




            </div>







            {

                completedPercent === 100 && total > 0 && (


                    <div className="celebration">


                        🎉🥳🏆


                        <h1>

                            Perfect!

                        </h1>


                        <p>

                            You completed all habits!

                        </p>



                    </div>


                )

            }





        </div>


    );

}



export default Analytics;