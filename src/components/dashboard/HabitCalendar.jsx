import { useState } from "react";
import "../../styles/habitCalendar.css";


function HabitCalendar({
    date,
    setDate,
    completedDays
}) {


    const [currentMonth, setCurrentMonth] = useState(
        new Date()
    );


    const monthName = currentMonth.toLocaleString(
        "default",
        {
            month:"long"
        }
    );


    const year = currentMonth.getFullYear();



    const daysInMonth = new Date(
        year,
        currentMonth.getMonth()+1,
        0
    ).getDate();



    const firstDay = new Date(
        year,
        currentMonth.getMonth(),
        1
    ).getDay();



    const previousMonth = () => {

        setCurrentMonth(
            new Date(
                year,
                currentMonth.getMonth()-1,
                1
            )
        );

    };



    const nextMonth = () => {

        setCurrentMonth(
            new Date(
                year,
                currentMonth.getMonth()+1,
                1
            )
        );

    };



    function selectDay(day){


        const selected = new Date(
            year,
            currentMonth.getMonth(),
            day
        );


        setDate(selected);

    }



    function isToday(day){


        const today = new Date();


        return (

            today.getDate() === day &&
            today.getMonth() === currentMonth.getMonth() &&
            today.getFullYear() === year

        );

    }



    function isSelected(day){


        if(!date) return false;


        return (

            date.getDate() === day &&
            date.getMonth() === currentMonth.getMonth() &&
            date.getFullYear() === year

        );


    }



    function isCompleted(day){


        const checkDate = new Date(
            year,
            currentMonth.getMonth(),
            day
        );


        return completedDays.includes(
            checkDate.toDateString()
        );


    }




    const calendarDays = [];


    for(let i=0;i<firstDay;i++){

        calendarDays.push("");

    }



    for(let day=1;day<=daysInMonth;day++){

        calendarDays.push(day);

    }




    return (

        <div className="calendar-box">


            <div className="calendar-header">


                <button onClick={previousMonth}>
                    ❮
                </button>


                <h2>
                    {monthName} {year}
                </h2>


                <button onClick={nextMonth}>
                    ❯
                </button>


            </div>





            <div className="week-days">

                {

                [
                    "Sun",
                    "Mon",
                    "Tue",
                    "Wed",
                    "Thu",
                    "Fri",
                    "Sat"

                ].map(day=>(

                    <span key={day}>
                        {day}
                    </span>

                ))

                }

            </div>





            <div className="calendar-grid">


                {

                calendarDays.map((day,index)=>(


                    <div

                    key={index}

                    className={

                        day === ""

                        ?

                        "empty"

                        :

                        `calendar-day

                        ${isToday(day)
                        ?
                        "today"
                        :
                        ""}

                        ${isSelected(day)
                        ?
                        "selected"
                        :
                        ""}

                        ${isCompleted(day)
                        ?
                        "completed-day"
                        :
                        ""}

                        `

                    }


                    onClick={
                        day
                        ?
                        ()=>selectDay(day)
                        :
                        undefined
                    }


                    >


                    {day}


                    </div>


                ))

                }


            </div>



        </div>

    );


}


export default HabitCalendar;