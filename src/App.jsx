import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";


import { useEffect } from "react";


import DashboardLayout from "./components/layout/DashboardLayout";


import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import Profile from "./pages/Profile";
import HabitTracking from "./pages/HabitTracking";
import Journal from "./pages/Journal";
import Experts from "./pages/Experts";
import Analytics from "./pages/Analytics";
import Scheduling from "./pages/Scheduling";



function App(){


    useEffect(()=>{


        if("Notification" in window){


            Notification.requestPermission();


        }


    },[]);



    return(


        <BrowserRouter>


            <Routes>


                {/* Public Pages */}


                <Route

                    path="/signup"

                    element={<Signup/>}

                />



                <Route

                    path="/login"

                    element={<Login/>}

                />





                {/* Dashboard Pages */}


                <Route element={<DashboardLayout/>}>


                    <Route

                        path="/dashboard"

                        element={<Dashboard/>}

                    />



                    <Route

                        path="/profile"

                        element={<Profile/>}

                    />



                    <Route

                        path="/habit"

                        element={<HabitTracking/>}

                    />



                    <Route

                        path="/journal"

                        element={<Journal/>}

                    />



                    <Route

                        path="/experts"

                        element={<Experts/>}

                    />



                    <Route

                        path="/analytics"

                        element={<Analytics/>}

                    />



                    <Route

                        path="/schedule"

                        element={<Scheduling/>}

                    />


                </Route>



            </Routes>


        </BrowserRouter>


    );


}



export default App;