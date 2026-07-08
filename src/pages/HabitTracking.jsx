import "../styles/habitTracking.css";
import { useState } from "react";
import HabitCalendar from "../components/dashboard/HabitCalendar";

function HabitTracking(){


    const [habits,setHabits] = useState([]);

    const [habit,setHabit] = useState("");



    function addHabit(e){

        e.preventDefault();


        if(!habit) return;


        setHabits([

            ...habits,

            {

                name:habit,

                completed:false

            }

        ]);


        setHabit("");

    }



    function toggleHabit(index){


        const updated=[...habits];


        updated[index].completed =
        !updated[index].completed;


        setHabits(updated);


    }



    function deleteHabit(index){


        setHabits(

            habits.filter(
                (_,i)=>i!==index
            )

        );


    }



    return(

        
        <div className="habit-page">


            <h1>
                🔥 Habit Tracking
            </h1>
            
<HabitCalendar/>


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


        </div>

    );

}


export default HabitTracking;