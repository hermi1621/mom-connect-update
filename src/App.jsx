import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";


import { useEffect } from "react";


import Home from "./pages/Home";

import DashboardLayout from "./components/layout/DashboardLayout";


import Signup from "./pages/Signup";
import Login from "./pages/Login";


import Profile from "./pages/Profile";
import HabitTracking from "./pages/HabitTracking";
import Journal from "./pages/Journal";
import Experts from "./pages/Experts";
import Analytics from "./pages/Analytics";
import Scheduling from "./pages/Scheduling";
import Apps from "./pages/Apps";


function App(){



    useEffect(()=>{


        if("Notification" in window){

            Notification.requestPermission();

        }


    },[]);





    return(


        <BrowserRouter>


            <Routes>



                {/* Home */}


                <Route

                    path="/"

                    element={<Home/>}

                />





                {/* Authentication */}


                <Route

                    path="/signup"

                    element={<Signup/>}

                />



                <Route

                    path="/login"

                    element={<Login/>}

                />







                {/* Dashboard Layout */}



                <Route element={<DashboardLayout/>}>


                    <Route

                        path="/dashboard"

                        element={

                            <h1>
                                Welcome to Moms Connect 💜
                            </h1>

                        }

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

                    <Route
    path="/login"
    element={<Login/>}
/>

                </Route>


                      <Route

    path="/apps"

    element={<Apps/>}

/>

            </Routes>


        </BrowserRouter>


    );


}


export default App;