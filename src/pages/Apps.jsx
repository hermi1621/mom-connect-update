import "../styles/apps.css";


const apps=[

    {
        name:"Instagram",
        icon:"📸",
        link:"https://instagram.com"
    },

    {
        name:"TikTok",
        icon:"🎵",
        link:"https://tiktok.com"
    },

    {
        name:"Telegram",
        icon:"✈️",
        link:"https://telegram.org"
    }

];



function Apps(){


    return(

        <div className="apps-page">


            <h1>
                📱 Apps Center
            </h1>



            <div className="apps-grid">


            {
                apps.map((app,index)=>(


                    <div

                    className="app-card"

                    key={index}

                    >


                        <div className="app-icon">

                            {app.icon}

                        </div>


                        <h2>

                            {app.name}

                        </h2>



                        <a

                        href={app.link}

                        target="_blank"

                        >

                            Open App

                        </a>


                    </div>


                ))
            }


            </div>


        </div>

    );

}


export default Apps;