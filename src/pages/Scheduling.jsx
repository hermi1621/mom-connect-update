import "../styles/scheduling.css";
import { useState } from "react";


function Scheduling(){

    const [tasks,setTasks] = useState([]);


    const [form,setForm] = useState({

        title:"",
        date:"",
        time:""

    });



    function addSchedule(e){

        e.preventDefault();


        const exists = tasks.find(

            task =>
            task.date === form.date &&
            task.time === form.time

        );


        if(exists){

            alert(
                "This schedule already exists!"
            );

            return;

        }


        setTasks([

            ...tasks,

            {
                ...form,
                completed:false
            }

        ]);


        setForm({

            title:"",
            date:"",
            time:""

        });


    }



    function deleteTask(index){

        const updated =
        tasks.filter(
            (_,i)=>i!==index
        );


        setTasks(updated);

    }



    return(

        <div className="scheduling-page">


            <h1>
                📅 My Schedule
            </h1>



            <form
            className="schedule-form"
            onSubmit={addSchedule}
            >


                <input

                placeholder="Schedule title"

                value={form.title}

                onChange={
                    e=>setForm({

                        ...form,

                        title:e.target.value

                    })
                }

                />



                <input

                type="date"

                value={form.date}

                onChange={
                    e=>setForm({

                        ...form,

                        date:e.target.value

                    })
                }

                />



                <input

                type="time"

                value={form.time}

                onChange={
                    e=>setForm({

                        ...form,

                        time:e.target.value

                    })
                }

                />



                <button>
                    Add Schedule
                </button>


            </form>



            <div className="schedule-list">


            {

                tasks.map((task,index)=>(


                    <div
                    className="schedule-card"
                    key={index}
                    >


                        <h3>
                            {task.title}
                        </h3>


                        <p>
                            📅 {task.date}
                        </p>


                        <p>
                            ⏰ {task.time}
                        </p>



                        <input
                        type="checkbox"
                        />


                        <button
                        onClick={
                            ()=>deleteTask(index)
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


export default Scheduling;