const express = require("express");

const router = express.Router();


// Temporary storage (until database model is connected)
let schedules = [];



// GET ALL SCHEDULES

router.get("/", (req,res)=>{


    res.json(schedules);


});





// CREATE SCHEDULE

router.post("/", (req,res)=>{


    const newSchedule = {


        id: Date.now(),


        title:req.body.title,

        category:req.body.category,

        date:req.body.date,

        time:req.body.time,

        reminder:req.body.reminder,

        notes:req.body.notes,

        important:req.body.important,


        completed:false


    };



    schedules.push(newSchedule);



    res.json({

        message:"Schedule created",

        schedule:newSchedule

    });



});







// DELETE SCHEDULE

router.delete("/:id",(req,res)=>{


    const id = Number(req.params.id);



    schedules = schedules.filter(

        item => item.id !== id

    );



    res.json({

        message:"Schedule deleted"

    });


});





module.exports = router;