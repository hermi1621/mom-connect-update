const express = require("express");

const cors = require("cors");


const authRoutes = require("./routes/authRoutes");

const scheduleRoutes = require("./routes/scheduleRoutes");

const habitRoutes = require("./routes/habitRoutes");

const app = express();



// Middleware first

app.use(cors());

app.use(express.json());




// Routes after middleware


app.use(

    "/api/auth",

    authRoutes

);



app.use(

    "/api/schedules",

    scheduleRoutes

);

app.use(

"/api/habits",

habitRoutes

);


app.get("/", (req,res)=>{


    res.json({

        message:"MomCare API is running"

    });


});



module.exports = app;