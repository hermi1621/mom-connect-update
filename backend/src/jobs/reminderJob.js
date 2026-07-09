const cron = require("node-cron");

const sendEmail = require("../services/emailService");

const Schedule = require("../models/Schedule");



cron.schedule("* * * * *", async()=>{


    try{


        const now = new Date();



        const schedules = await Schedule.find({

            reminderSent:false

        });





        for(const schedule of schedules){



            const scheduleTime = new Date(

                schedule.date + " " + schedule.time

            );



            const difference =

                scheduleTime - now;





            // send email 15 minutes before

            if(

                difference <= 15 * 60 * 1000 &&

                difference > 0

            ){



                await sendEmail(


                    schedule.email,


                    "Moms Connect Reminder 💜",


                    `Your activity "${schedule.title}" starts in 15 minutes.`


                );



                schedule.reminderSent = true;


                await schedule.save();


            }


        }



    }


    catch(error){


        console.log(

            "Reminder error:",

            error

        );


    }


});