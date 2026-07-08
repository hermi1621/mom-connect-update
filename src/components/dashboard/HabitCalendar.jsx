import Calendar from "react-calendar";
import "../../styles/habitCalendar.css";


function HabitCalendar({

    date,
    setDate,
    completedDays

}){


    function tileContent({date}){


        const day =
        date.toDateString();


        if(completedDays.includes(day)){


            return(

                <span>
                    🔥
                </span>

            );

        }


        return null;

    }



    return(

        <div className="habit-calendar">


            <h2>
                📅 Habit Calendar
            </h2>



            <Calendar

                onChange={setDate}

                value={date}

                tileContent={tileContent}

            />


        </div>

    );

}


export default HabitCalendar;