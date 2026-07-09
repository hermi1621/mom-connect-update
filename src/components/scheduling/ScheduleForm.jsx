import "../../styles/scheduleForm.css";

function ScheduleForm({

    title,
    setTitle,

    category,
    setCategory,

    date,
    setDate,

    time,
    setTime,

    reminder,
    setReminder,

    notes,
    setNotes,

    important,
    setImportant,

    addSchedule

}) {

    return (

        <form
            className="schedule-form"
            onSubmit={addSchedule}
        >

            <h2>➕ Create Schedule</h2>

            <input
                placeholder="Schedule title"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />

            <select
                value={category}
                onChange={(e)=>setCategory(e.target.value)}
            >

                <option>Health</option>

                <option>Baby Care</option>

                <option>Exercise</option>

                <option>Personal</option>

                <option>Family</option>

            </select>

            <input
                type="date"
                value={date}
                onChange={(e)=>setDate(e.target.value)}
            />

            <input
                type="time"
                value={time}
                onChange={(e)=>setTime(e.target.value)}
            />

            <select
                value={reminder}
                onChange={(e)=>setReminder(e.target.value)}
            >

                <option value="15">
                    15 Minutes Before
                </option>

                <option value="30">
                    30 Minutes Before
                </option>

            </select>

            <textarea
                placeholder="Notes..."
                value={notes}
                onChange={(e)=>setNotes(e.target.value)}
            />

            <label>

                <input
                    type="checkbox"
                    checked={important}
                    onChange={(e)=>setImportant(e.target.checked)}
                />

                Important

            </label>

            <button>

                Save Schedule 💜

            </button>

        </form>

    );

}

export default ScheduleForm;