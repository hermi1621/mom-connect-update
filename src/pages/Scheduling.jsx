import "../styles/scheduling.css";

import { useState, useEffect } from "react";

import ScheduleForm from "../components/scheduling/ScheduleForm";
import ScheduleCard from "../components/scheduling/ScheduleCard";

import API from "../services/api";
import {checkNotifications} from "../utils/notification";

function Scheduling() {


    const [title, setTitle] = useState("");

    const [category, setCategory] = useState("Health");

    const [date, setDate] = useState("");

    const [time, setTime] = useState("");

    const [reminder, setReminder] = useState("15");

    const [notes, setNotes] = useState("");

    const [important, setImportant] = useState(false);


    const [schedules, setSchedules] = useState([]);





    // GET ALL SCHEDULES

    async function loadSchedules(){


        try{


            const response = await API.get(

                "/schedules"

            );


            setSchedules(response.data);


        }


        catch(error){


            console.log(error);


        }


    }




useEffect(()=>{


    loadSchedules();


    const timer=setInterval(()=>{


        checkNotifications(schedules);


    },60000);



    return ()=>clearInterval(timer);



},[schedules]);








    // CREATE SCHEDULE

    async function addSchedule(e){


        e.preventDefault();



        if(!title || !date || !time){


            alert("Please fill all required fields.");

            return;


        }





        const duplicate = schedules.find(

            (item)=>

                item.date.includes(date) &&

                item.time.startsWith(time)

        );



        if(duplicate){


            alert("A schedule already exists for this date and time.");

            return;


        }







        const newSchedule = {


            title,

            category,

            date,

            time,

            reminder,

            notes,

            important


        };






        try{


            await API.post(

                "/schedules",

                newSchedule

            );



            loadSchedules();




            setTitle("");

            setCategory("Health");

            setDate("");

            setTime("");

            setReminder("15");

            setNotes("");

            setImportant(false);



        }



        catch(error){


            console.log(error);


            alert(

                error.response?.data?.message ||

                "Failed to save schedule"

            );


        }



    }








    // TEMPORARY DELETE (frontend only)

    async function deleteSchedule(id){


    try{


        await API.delete(

            `/schedules/${id}`

        );


        loadSchedules();



    }


    catch(error){


        console.log(error);


        alert("Delete failed");


    }


}










    // TEMPORARY COMPLETE (frontend only)

    function toggleComplete(id){


        setSchedules(

            schedules.map(item=>

                item.id === id

                ?

                {

                    ...item,

                    completed: !item.completed

                }

                :

                item

            )

        );


    }









    // COUNTDOWN

    function countdown(scheduleDate,scheduleTime){



        const target = new Date(

            `${scheduleDate.split("T")[0]}T${scheduleTime}`

        );



        const now = new Date();



        const diff = target - now;



        if(diff <=0){


            return "Completed";


        }






        const days = Math.floor(

            diff /

            (1000 * 60 * 60 * 24)

        );





        const hours = Math.floor(

            (diff %

            (1000 * 60 * 60 * 24))

            /

            (1000 * 60 * 60)

        );





        const minutes = Math.floor(

            (diff %

            (1000 * 60 * 60))

            /

            (1000 * 60)

        );






        if(days > 0){

            return `${days} day(s) left`;

        }





        if(hours > 0){

            return `${hours} hour(s) left`;

        }




        return `${minutes} minute(s) left`;



    }









    return(


        <div className="scheduling-page">


            <div className="scheduling-content">


                <h1>

                    📅 Smart Scheduling

                </h1>






                <ScheduleForm


                    title={title}

                    setTitle={setTitle}



                    category={category}

                    setCategory={setCategory}



                    date={date}

                    setDate={setDate}



                    time={time}

                    setTime={setTime}



                    reminder={reminder}

                    setReminder={setReminder}



                    notes={notes}

                    setNotes={setNotes}



                    important={important}

                    setImportant={setImportant}



                    addSchedule={addSchedule}


                />









                <div className="schedule-list">



                    {

                        schedules.map(schedule=>(



                            <div key={schedule.id}>


                                <ScheduleCard


                                    schedule={schedule}


                                    onDelete={deleteSchedule}


                                    onComplete={toggleComplete}


                                />





                                <div className="schedule-info">



                                    <p>

                                        ⏳

                                        {

                                            countdown(

                                                schedule.date,

                                                schedule.time

                                            )

                                        }


                                    </p>




                                    <p>

                                        Status:

                                        {

                                            schedule.completed

                                            ?

                                            " ✅ Completed"

                                            :

                                            " 🟣 Upcoming"

                                        }


                                    </p>



                                </div>



                            </div>



                        ))

                    }



                </div>






            </div>



        </div>



    );


}



export default Scheduling;