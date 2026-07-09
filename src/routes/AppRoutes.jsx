import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Scheduling from "../pages/Scheduling";
import HabitTracking from "../pages/HabitTracking";
import Analytics from "../pages/Analytics";
import Journal from "../pages/Journal";
import Apps from "../pages/Apps";
import Experts from "../pages/Experts";
import Profile from "../pages/Profile";
import Login from "../pages/Login";

import ProtectedRoute from "../components/auth/ProtectedRoute";


function AppRoutes(){

    return(

        <BrowserRouter>


            <Routes>


                {/* Public Pages */}


                <Route

                path="/"

                element={<Home/>}

                />


                <Route

                path="/signup"

                element={<Signup/>}

                />


                <Route

                path="/login"

                element={<Login/>}

                />




                {/* Protected Pages */}


                <Route

                path="/dashboard"

                element={

                    <ProtectedRoute>

                        <Dashboard/>

                    </ProtectedRoute>

                }

                />


                <Route

                path="/scheduling"

                element={

                    <ProtectedRoute>

                        <Scheduling/>

                    </ProtectedRoute>

                }

                />


                <Route

                path="/habit-tracking"

                element={

                    <ProtectedRoute>

                        <HabitTracking/>

                    </ProtectedRoute>

                }

                />



                <Route

                path="/analytics"

                element={

                    <ProtectedRoute>

                        <Analytics/>

                    </ProtectedRoute>

                }

                />



                <Route

                path="/journal"

                element={

                    <ProtectedRoute>

                        <Journal/>

                    </ProtectedRoute>

                }

                />



                <Route

                path="/apps"

                element={

                    <ProtectedRoute>

                        <Apps/>

                    </ProtectedRoute>

                }

                />



                <Route

                path="/experts"

                element={

                    <ProtectedRoute>

                        <Experts/>

                    </ProtectedRoute>

                }

                />



                <Route

                path="/profile"

                element={

                    <ProtectedRoute>

                        <Profile/>

                    </ProtectedRoute>

                }

                />


            </Routes>


        </BrowserRouter>

    );

}


export default AppRoutes;