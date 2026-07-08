import "../styles/profile.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Profile(){


const navigate = useNavigate();



const avatars=[

"/images/avatars/avatar1.png",

"/images/avatars/avatar2.png",

"/images/avatars/avatar3.png"

];



const [avatar,setAvatar]=useState(
    avatars[0]
);



const user = JSON.parse(
    localStorage.getItem("user")
);



function logout(){


    localStorage.removeItem("user");


    navigate("/signup");


}




return(


<div className="profile-page">


<h1>
👤 My Profile
</h1>





{

user ?

(

<div className="profile-card">


<img

src={avatar}

alt="profile"

/>



<h2>
{user.name}
</h2>



<p>
{user.email}
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



<button

className="logout"

onClick={logout}

>

Logout

</button>



</div>

)



:

(


<div className="not-login">


<h2>
You are not logged in
</h2>


<p>
Please create an account to continue.
</p>



<button

onClick={()=>
navigate("/signup")
}

>

Go To Signup

</button>


</div>


)


}





</div>


);


}


export default Profile;