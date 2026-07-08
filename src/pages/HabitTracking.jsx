import "../styles/habitTracking.css";
import { useState, useEffect } from "react";
import HabitCalendar from "../components/dashboard/HabitCalendar";

function HabitTracking() {

    const [habit, setHabit] = useState("");

    const [selectedDate, setSelectedDate] = useState(null);

    const [habits, setHabits] = useState(() => {
        const saved = localStorage.getItem("habitTasks");
        return saved ? JSON.parse(saved) : [];
    });

    const [completedDays, setCompletedDays] = useState(() => {
        const saved = localStorage.getItem("completedDays");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("habitTasks", JSON.stringify(habits));
    }, [habits]);

    useEffect(() => {
        localStorage.setItem("completedDays", JSON.stringify(completedDays));
    }, [completedDays]);

    function addHabit(e) {

        e.preventDefault();

        if (!selectedDate) {
            alert("Please select a date first.");
            return;
        }

        if (!habit.trim()) return;

        setHabits([
            ...habits,
            {
                id: Date.now(),
                name: habit,
                completed: false,
                date: selectedDate.toDateString()
            }
        ]);

        setHabit("");

    }

    function toggleHabit(id) {

        setHabits(
            habits.map((item) =>
                item.id === id
                    ? { ...item, completed: !item.completed }
                    : item
            )
        );

    }

    function deleteHabit(id) {

        setHabits(
            habits.filter((item) => item.id !== id)
        );

    }

    function completeDay() {

        if (!selectedDate) return;

        const day = selectedDate.toDateString();

        if (!completedDays.includes(day)) {

            setCompletedDays([
                ...completedDays,
                day
            ]);

        }

    }

    const todayHabits = selectedDate
        ? habits.filter(
            (item) => item.date === selectedDate.toDateString()
        )
        : [];

    return (

        <div className="habit-page">

            <h1>🔥 Habit Tracking</h1>

            <HabitCalendar
                date={selectedDate}
                setDate={setSelectedDate}
                completedDays={completedDays}
            />

            {!selectedDate && (
                <p className="select-message">
                    📅 Select a day from the calendar to start adding habits.
                </p>
            )}

            {selectedDate && (

                <div className="selected-date">

                    <h2>
                        {selectedDate.toLocaleDateString("en-US", {
                            weekday: "long",
                            day: "numeric",
                            month: "long",
                            year: "numeric"
                        })}
                    </h2>

                </div>

            )}

            <form
                onSubmit={addHabit}
                className="habit-form"
            >

                <input
                    placeholder={
                        selectedDate
                            ? "Write your habit..."
                            : "Select a date first"
                    }
                    value={habit}
                    onChange={(e) => setHabit(e.target.value)}
                    disabled={!selectedDate}
                />

                <button disabled={!selectedDate}>
                    Add Habit
                </button>

            </form>

            <div className="habit-list">

                {selectedDate && todayHabits.length === 0 && (

                    <p className="empty-task">
                        No habits for this date.
                    </p>

                )}

                {todayHabits.map((item) => (

                    <div
                        className="habit-card"
                        key={item.id}
                    >

                        <input
                            type="checkbox"
                            checked={item.completed}
                            onChange={() => toggleHabit(item.id)}
                        />

                        <span
                            className={
                                item.completed
                                    ? "completed"
                                    : ""
                            }
                        >
                            {item.name}
                        </span>

                        <button
                            onClick={() => deleteHabit(item.id)}
                        >
                            Delete
                        </button>

                    </div>

                ))}

            </div>

            <button
                className="complete-day-btn"
                onClick={completeDay}
                disabled={!selectedDate}
            >
                Complete Day 🔥
            </button>

        </div>

    );

}

export default HabitTracking;