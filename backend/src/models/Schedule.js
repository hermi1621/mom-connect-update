const mongoose = require("mongoose");


const scheduleSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },


    date:{
        type:String,
        required:true
    },


    time:{
        type:String,
        required:true
    },


    email:{
        type:String,
        required:true
    },


    reminderSent:{
        type:Boolean,
        default:false
    }


});


module.exports = mongoose.model(
    "Schedule",
    scheduleSchema
);