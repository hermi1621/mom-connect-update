import "../styles/profile.css";
import { useState } from "react";


function Profile(){


const avatars=[

"/images/avatars/avatar1.png",

"/images/avatars/avatar2.png",

"/images/avatars/avatar3.png"

];


const [avatar,setAvatar]=useState(
avatars[0]
);



return(

<div className="profile-page">


<h1>
👤 My Profile
</h1>



<div className="profile-card">


<img

src={avatar}

alt="profile"

/>



<h2>
Hermela
</h2>


<p>
hermela@gmail.com
</p>


<p>
🇪🇹 Ethiopia
</p>



<div className="avatar-options">


{
avatars.map((item,index)=>(


<img

key={index}

src={item}

onClick={()=>setAvatar(item)}

/>


))
}



</div>


</div>




<div className="profile-stats">


<div>

<h2>
🔥 7
</h2>

<p>
Day Streak
</p>

</div>



<div>

<h2>
25
</h2>

<p>
Schedules
</p>

</div>



<div>

<h2>
12
</h2>

<p>
Journals
</p>

</div>



</div>


<button className="logout">

Logout

</button>



</div>


);


}


export default Profile;