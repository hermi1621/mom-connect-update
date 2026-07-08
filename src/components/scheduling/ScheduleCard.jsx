import "../../styles/scheduleCard.css";

function ScheduleCard({

    schedule,

    onDelete,

    onComplete

}){

    return(

        <div className="schedule-card">

            <div>

                <h3>

                    {schedule.title}

                </h3>

                <p>

                    📂 {schedule.category}

                </p>

                <p>

                    📅 {schedule.date}

                </p>

                <p>

                    ⏰ {schedule.time}

                </p>

                <p>

                    🔔 {schedule.reminder} Minutes Before

                </p>

                <p>

                    📝 {schedule.notes}

                </p>

                <p>

                    {schedule.important ? "⭐ Important" : ""}

                </p>

            </div>

            <div className="schedule-actions">

                <button
                    onClick={()=>onComplete(schedule.id)}
                >

                    ✅ Done

                </button>

                <button
                    onClick={()=>onDelete(schedule.id)}
                >

                    🗑 Delete

                </button>

            </div>

        </div>

    );

}

export default ScheduleCard;