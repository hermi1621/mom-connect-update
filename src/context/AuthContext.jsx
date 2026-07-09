import { createContext, useState, useEffect } from "react";


export const AuthContext = createContext();



function AuthProvider({children}){


    const [user,setUser] = useState(null);



    useEffect(()=>{


        const savedUser = localStorage.getItem("user");


        if(savedUser){

            setUser(JSON.parse(savedUser));

        }


    },[]);





    function login(userData){


        setUser(userData);


        localStorage.setItem(

            "user",

            JSON.stringify(userData)

        );


    }





    function logout(){


        localStorage.removeItem("user");

        localStorage.removeItem("token");


        setUser(null);


    }





    return(


        <AuthContext.Provider


        value={{

            user,

            login,

            logout

        }}


        >


            {children}


        </AuthContext.Provider>


    );


}



export default AuthProvider;