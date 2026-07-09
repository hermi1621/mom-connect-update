const Schedule = require("../models/Schedule");



// CREATE SCHEDULE

exports.createSchedule = async (req, res) => {


    try {


        const {

            title,
            category,
            date,
            time,
            reminder,
            notes,
            important

        } = req.body;



        // Temporary user id
        // Later we will get this from JWT token

        const user_id = 1;



        const schedule = await Schedule.create({

            user_id,

            title,

            category,

            date,

            time,

            reminder,

            notes,

            important

        });



        res.status(201).json({

            message: "Schedule created successfully",

            schedule

        });



    }


    catch(error){


        console.log(error);


        res.status(500).json({

            message: "Failed to create schedule",

            error: error.message

        });


    }


};



exports.deleteSchedule = async(req,res)=>{


    try{


        const {id} = req.params;



        const deleted = await Schedule.delete(id);



        res.json({

            message:"Schedule deleted successfully",

            deleted

        });



    }


    catch(error){


        console.log(error);


        res.status(500).json({

            message:"Failed to delete schedule",

            error:error.message

        });


    }


};


// GET ALL SCHEDULES

exports.getSchedules = async (req, res) => {


    try {


        // Temporary user id
        // Later we replace this with logged-in user id

        const user_id = 1;



        const schedules = await Schedule.getAll(user_id);



        res.status(200).json(schedules);



    }


    catch(error){


        console.log(error);



        res.status(500).json({

            message: "Failed to get schedules",

            error: error.message

        });


    }


};

exports.completeSchedule = async(req,res)=>{


    try{


        const {id}=req.params;



        const schedule = await Schedule.complete(id);



        res.json({

            message:"Schedule status updated",

            schedule

        });



    }


    catch(error){


        console.log(error);



        res.status(500).json({

            message:"Failed to update schedule",

            error:error.message

        });


    }


};