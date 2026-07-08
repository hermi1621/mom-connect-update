import "../styles/habitTracking.css";
import { useState } from "react";
import HabitCalendar from "../components/dashboard/HabitCalendar";


function HabitTracking(){


    const [habits,setHabits] = useState([]);

    const [habit,setHabit] = useState("");

    const [selectedDate,setSelectedDate] = useState(new Date());

    const [completedDays,setCompletedDays] = useState([]);



    function addHabit(e){

        e.preventDefault();


        if(!habit) return;


        setHabits([

            ...habits,

            {
                name: habit,
                completed:false
            }

        ]);


        setHabit("");

    }



    function toggleHabit(index){


        const updated = [...habits];


        updated[index].completed =
        !updated[index].completed;


        setHabits(updated);

    }




    function deleteHabit(index){


        const updated = habits.filter(

            (_,i)=>i !== index

        );


        setHabits(updated);

    }




    function completeDay(){


        const day = selectedDate.toDateString();


        if(!completedDays.includes(day)){


            setCompletedDays([

                ...completedDays,

                day

            ]);

        }


    }




    return(


        <div className="habit-page">


            <h1>
                🔥 Habit Tracking
            </h1>



            <HabitCalendar

            date={selectedDate}

            setDate={setSelectedDate}

            completedDays={completedDays}

            />



            <form

            onSubmit={addHabit}

            className="habit-form"

            >


                <input

                placeholder="Create new habit"

                value={habit}

                onChange={
                    e=>setHabit(e.target.value)
                }

                />


                <button>

                    Add Habit

                </button>


            </form>




            <div className="habit-list">


            {

                habits.map((item,index)=>(


                    <div

                    className="habit-card"

                    key={index}

                    >


                        <input

                        type="checkbox"

                        checked={item.completed}

                        onChange={
                            ()=>toggleHabit(index)
                        }

                        />



                        <span

                        className={
                            item.completed
                            ?
                            "completed"
                            :
                            ""
                        }

                        >

                            {item.name}

                        </span>



                        <button

                        onClick={
                            ()=>deleteHabit(index)
                        }

                        >

                            Delete

                        </button>



                    </div>


                ))

            }


            </div>




            <button

            className="complete-day-btn"

            onClick={completeDay}

            >

                Complete Day 🔥

            </button>



        </div>


    );


}


export default HabitTracking;