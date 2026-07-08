import Calendar from "react-calendar";
import { useState } from "react";

import "../../styles/habitCalendar.css";


function HabitCalendar(){

    const [date,setDate] = useState(new Date());


    return(

        <div className="habit-calendar">


            <h2>
                📅 Habit Calendar
            </h2>


            <Calendar

                onChange={setDate}

                value={date}

            />


            <p>

                Selected Day:

                {" "}

                {date.toDateString()}

            </p>


        </div>

    );

}


export default HabitCalendar;