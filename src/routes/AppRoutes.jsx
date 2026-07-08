import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Scheduling from "../pages/Scheduling";
import HabitTracking from "../pages/HabitTracking";



function AppRoutes(){

    return(

        <BrowserRouter>

            <Routes>


                <Route
                    path="/"
                    element={<Home/>}
                />


                <Route
                    path="/signup"
                    element={<Signup/>}
                />
                 
                  <Route
                path="/dashboard"
                element={<Dashboard/>}
                />

                <Route
path="/scheduling"
element={<Scheduling/>}
/>
      <Route
path="/habit-tracking"
element={<HabitTracking/>}
/>

            </Routes>

        </BrowserRouter>

    );

}


export default AppRoutes;