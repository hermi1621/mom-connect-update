import { Link } from "react-router-dom";
import "../../styles/sidebar.css";


function Sidebar(){

    return(

        <div className="sidebar">

            <h2>
                💜 Mom Connect
            </h2>


            <Link to="/profile">
                👤 Profile
            </Link>


            <Link to="/habit">
                🔥 Habit Tracking
            </Link>


            <Link to="/journal">
                📖 Journal
            </Link>


            <Link to="/experts">
                👩‍⚕️ Experts
            </Link>


            <Link to="/analytics">
                📊 Analytics
            </Link>


            <Link to="/schedule">
                📅 Scheduling
            </Link>


        </div>

    );

}


export default Sidebar;