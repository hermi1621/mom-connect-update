import "../styles/habitTracking.css";

import { useEffect, useState } from "react";

import API from "../services/api";



function HabitTracking(){


    const [habits,setHabits] = useState([]);


    const [name,setName] = useState("");

    const [description,setDescription] = useState("");

    const [frequency,setFrequency] = useState("Daily");





    // GET HABITS FROM DATABASE

    async function loadHabits(){


        try{


            const response = await API.get(

                "/habits"

            );


            setHabits(response.data);


        }


        catch(error){


            console.log(error);


        }


    }







    useEffect(()=>{


        loadHabits();


    },[]);









    // ADD HABIT

    async function addHabit(e){


        e.preventDefault();



        if(!name){


            alert("Enter habit name");

            return;

        }



        try{


            await API.post(

                "/habits",

                {

                    name,

                    description,

                    frequency

                }

            );



            loadHabits();



            setName("");

            setDescription("");

            setFrequency("Daily");



        }


        catch(error){


            console.log(error);


            alert("Failed to add habit");


        }


    }









    // CHECK / UNCHECK HABIT

    async function completeHabit(id){


        try{


            await API.put(

                `/habits/${id}/complete`

            );



            loadHabits();



        }


        catch(error){


            console.log(error);


        }


    }









    // DELETE HABIT

    async function deleteHabit(id){


        try{


            await API.delete(

                `/habits/${id}`

            );



            loadHabits();



        }


        catch(error){


            console.log(error);


        }


    }









    return(


        <div className="habit-page">



            <h1>

                🔥 Habit Tracking

            </h1>







            <form onSubmit={addHabit}>


                <input

                    type="text"

                    placeholder="Habit name"

                    value={name}

                    onChange={(e)=>

                        setName(e.target.value)

                    }

                />





                <input

                    type="text"

                    placeholder="Description"

                    value={description}

                    onChange={(e)=>

                        setDescription(e.target.value)

                    }

                />







                <select

                    value={frequency}

                    onChange={(e)=>

                        setFrequency(e.target.value)

                    }

                >


                    <option value="Daily">

                        Daily

                    </option>


                    <option value="Weekly">

                        Weekly

                    </option>


                    <option value="Monthly">

                        Monthly

                    </option>


                </select>






                <button type="submit">

                    Add Habit

                </button>



            </form>









            <div className="habit-list">



                {

                    habits.map((habit)=>(


                        <div

                            className="habit-card"

                            key={habit.id}

                        >





                            <h2>

                                {habit.name}

                            </h2>





                            <p>

                                {habit.description}

                            </p>





                            <p>

                                Frequency:

                                {" "}

                                {habit.frequency}

                            </p>









                            <label>


                                <input

                                    type="checkbox"

                                    checked={habit.completed}

                                    onChange={()=>completeHabit(habit.id)}

                                />



                                {

                                    habit.completed

                                    ?

                                    " Completed ✅"

                                    :

                                    " Mark Complete"

                                }



                            </label>









                            <button

                                onClick={()=>deleteHabit(habit.id)}

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