import "../styles/journal.css";
import { useState } from "react";


function Journal(){


    const [journals,setJournals] = useState([]);

    const [title,setTitle] = useState("");

    const [content,setContent] = useState("");

    const [password,setPassword] = useState("");



    function saveJournal(e){

        e.preventDefault();


        if(!title || !content)
            return;



        const newJournal = {

            id:Date.now(),

            title,

            content,

            password,

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

                placeholder="Protect with password"

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
                        {item.title}
                    </h2>


                    <small>
                        {item.date}
                    </small>



                    <p>
                        {item.content}
                    </p>



                    <button

                    onClick={
                        ()=>deleteJournal(item.id)
                    }

                    >

                        Delete

                    </button>


                </div>


            ))

            }


            </div>



        </div>

    );

}


export default Journal;