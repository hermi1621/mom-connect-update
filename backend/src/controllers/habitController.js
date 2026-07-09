const Habit = require("../models/Habit");



// CREATE HABIT

exports.createHabit = async(req,res)=>{


    try{


        const {

            name,

            description,

            frequency


        } = req.body;



        const user_id = 1;



        const habit = await Habit.create({

            user_id,

            name,

            description,

            frequency

        });



        res.status(201).json({

            message:"Habit created successfully",

            habit

        });



    }


    catch(error){


        console.log(error);


        res.status(500).json({

            message:"Failed to create habit",

            error:error.message

        });


    }


};








// GET ALL HABITS

exports.getHabits = async(req,res)=>{


    try{


        const user_id = 1;



        const habits = await Habit.getAll(user_id);



        res.json(habits);



    }


    catch(error){


        console.log(error);


        res.status(500).json({

            message:"Failed to get habits",

            error:error.message

        });


    }


};









// COMPLETE / UNCOMPLETE HABIT

exports.completeHabit = async(req,res)=>{


    try{


        const habit = await Habit.complete(

            req.params.id

        );



        res.json({

            message:"Habit updated",

            habit

        });



    }


    catch(error){


        console.log(error);



        res.status(500).json({

            message:"Failed to update habit",

            error:error.message

        });


    }


};









// DELETE HABIT

exports.deleteHabit = async(req,res)=>{


    try{


        const habit = await Habit.delete(

            req.params.id

        );



        res.json({

            message:"Habit deleted",

            habit

        });



    }


    catch(error){


        console.log(error);



        res.status(500).json({

            message:"Failed to delete habit",

            error:error.message

        });


    }


};