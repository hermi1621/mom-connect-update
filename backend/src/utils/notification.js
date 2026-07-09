export function checkNotifications(schedules){


    if(Notification.permission !== "granted"){

        return;

    }



    const now = new Date();



    schedules.forEach(schedule=>{


        const scheduleTime = new Date(
            `${schedule.date.split("T")[0]}T${schedule.time}`
        );



        const reminderTime = new Date(

            scheduleTime.getTime()

            -

            Number(schedule.reminder) * 60000

        );



        if(

            now >= reminderTime &&

            now <= scheduleTime &&

            !schedule.completed

        ){


            new Notification(

                "🔔 Moms Connect Reminder",

                {

                    body:
                    `${schedule.title} is coming soon`

                }

            );


        }


    });


}