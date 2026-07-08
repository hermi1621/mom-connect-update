import "../styles/scheduling.css";
import { useState } from "react";

import ScheduleForm from "../components/scheduling/ScheduleForm";
import ScheduleCard from "../components/scheduling/ScheduleCard";

function Scheduling() {

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("Health");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [reminder, setReminder] = useState("15");
    const [notes, setNotes] = useState("");
    const [important, setImportant] = useState(false);

    const [schedules, setSchedules] = useState([]);

    function addSchedule(e) {

        e.preventDefault();

        if (!title || !date || !time) {

            alert("Please fill all required fields.");

            return;

        }

        const duplicate = schedules.find(

            (item) =>

                item.date === date &&

                item.time === time

        );

        if (duplicate) {

            alert("A schedule already exists for this date and time.");

            return;

        }

        const newSchedule = {

            id: Date.now(),

            title,

            category,

            date,

            time,

            reminder,

            notes,

            important,

            completed: false

        };

        setSchedules([...schedules, newSchedule]);

        setTitle("");
        setCategory("Health");
        setDate("");
        setTime("");
        setReminder("15");
        setNotes("");
        setImportant(false);

    }

    function deleteSchedule(id) {

        setSchedules(

            schedules.filter(

                item => item.id !== id

            )

        );

    }

    function toggleComplete(id) {

        setSchedules(

            schedules.map(item =>

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

    function countdown(scheduleDate, scheduleTime) {

        const target = new Date(`${scheduleDate}T${scheduleTime}`);

        const now = new Date();

        const diff = target - now;

        if (diff <= 0) {

            return "Completed";

        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));

        const hours = Math.floor(

            (diff % (1000 * 60 * 60 * 24))

            /

            (1000 * 60 * 60)

        );

        const minutes = Math.floor(

            (diff % (1000 * 60 * 60))

            /

            (1000 * 60)

        );

        if (days > 0)

            return `${days} day(s) left`;

        if (hours > 0)

            return `${hours} hour(s) left`;

        return `${minutes} minute(s) left`;

    }

    return (

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

                        schedules.map(schedule => (

                            <div

                                key={schedule.id}

                            >

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

                                        Status :

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