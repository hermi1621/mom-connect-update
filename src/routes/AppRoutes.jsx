import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Scheduling from "../pages/Scheduling";
import HabitTracking from "../pages/HabitTracking";
import Analytics from "../pages/Analytics";
import Journal from "../pages/Journal";
import Apps from "../pages/Apps";



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
            

            <Route

path="/analytics"

element={<Analytics/>}

/>
  

  <Route

path="/journal"

element={<Journal/>}

/>

<Route

path="/apps"

element={<Apps/>}

/>


            </Routes>

        </BrowserRouter>

    );

}


export default AppRoutes;