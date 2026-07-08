import "../styles/journal.css";
import { useState, useEffect } from "react";


function Journal(){


    const [journals,setJournals] = useState(()=>{

        const saved =
        localStorage.getItem("journals");

        return saved
        ?
        JSON.parse(saved)
        :
        [];

    });



    const [title,setTitle] = useState("");

    const [content,setContent] = useState("");

    const [password,setPassword] = useState("");



    const [selectedJournal,setSelectedJournal] = useState(null);

    const [unlockPassword,setUnlockPassword] = useState("");



    useEffect(()=>{

        localStorage.setItem(
            "journals",
            JSON.stringify(journals)
        );

    },[journals]);





    function saveJournal(e){

        e.preventDefault();


        if(!title || !content)
            return;



        const newJournal = {

            id:Date.now(),

            title,

            content,

            password,

            locked: password.length > 0,

            date:new Date().toLocaleDateString()

        };



        setJournals([

            ...journals,

            newJournal

        ]);



        setTitle("");

        setContent("");

        setPassword("");

    }





    function deleteJournal(id){


        setJournals(

            journals.filter(

                item=>item.id !== id

            )

        );


    }






    function unlockJournal(){


        if(
            unlockPassword === selectedJournal.password
        ){


            setJournals(

                journals.map(item=>

                    item.id === selectedJournal.id

                    ?

                    {
                        ...item,
                        locked:false
                    }

                    :

                    item

                )

            );


            setSelectedJournal(null);

            setUnlockPassword("");


        }

        else{

            alert("Incorrect password 🔒");

        }


    }







    return(


        <div className="journal-page">


            <h1>
                📖 My Journal
            </h1>




            <form

            className="journal-form"

            onSubmit={saveJournal}

            >


                <input

                placeholder="Journal title"

                value={title}

                onChange={
                    e=>setTitle(e.target.value)
                }

                />



                <textarea

                placeholder="Write your thoughts..."

                value={content}

                onChange={
                    e=>setContent(e.target.value)
                }

                />



                <input

                type="password"

                placeholder="Protect with password (optional)"

                value={password}

                onChange={
                    e=>setPassword(e.target.value)
                }

                />



                <button>

                    Save Journal 💜

                </button>


            </form>







            <div className="journal-list">



            {

            journals.map(item=>(


                <div

                className="journal-card"

                key={item.id}

                >


                    <h2>

                    {

                    item.locked

                    ?

                    "🔒 Locked Journal"

                    :

                    item.title

                    }

                    </h2>



                    <small>

                        {item.date}

                    </small>




                    {

                    item.locked

                    ?

                    (

                    <button

                    onClick={()=>
                        setSelectedJournal(item)
                    }

                    >

                        Unlock 🔑

                    </button>

                    )

                    :

                    (

                    <>

                    <p>

                        {item.content}

                    </p>



                    <button

                    onClick={()=>
                        deleteJournal(item.id)
                    }

                    >

                        Delete

                    </button>

                    </>

                    )


                    }



                </div>


            ))

            }


            </div>








            {

            selectedJournal &&

            (

            <div className="unlock-box">


                <div className="unlock-card">


                    <h2>
                        🔐 Unlock Journal
                    </h2>


                    <input

                    type="password"

                    placeholder="Enter password"

                    value={unlockPassword}

                    onChange={
                        e=>setUnlockPassword(e.target.value)
                    }

                    />


                    <button

                    onClick={unlockJournal}

                    >

                        Open Journal

                    </button>


                    <button

                    onClick={()=>{
                        setSelectedJournal(null);
                        setUnlockPassword("");
                    }}

                    >

                        Cancel

                    </button>


                </div>


            </div>

            )


            }



        </div>


    );

}


export default Journal;