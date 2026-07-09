import "../../styles/inspiration.css";
const mothers = [

    {
        name:"Wangari Maathai",
        work:"Environmental Activist & Nobel Prize Winner",
        quote:"It’s the little things citizens do. That’s what will make the difference.",
        
    },

    {
        name:"Marie Curie",
        work:"Scientist & Nobel Prize Winner",
        quote:"Nothing in life is to be feared, it is only to be understood.",
    },

    {
        name:"Oprah Winfrey",
        work:"Media Entrepreneur & Philanthropist",
        quote:"Think like a queen. A queen is not afraid to fail.",
    }

];


function Inspiration(){

    return(

        <section className="inspiration">

            <div className="section-header">

                <span>
                    ✨ Inspiration
                </span>

                <h2>
                    Mothers Who Changed The World
                </h2>

                <p>
                    Stories of courage, strength and success
                    to inspire every mother.
                </p>

            </div>


            <div className="mother-cards">

                {
                    mothers.map((mother,index)=>(

                        <div 
                        className="mother-card"
                        key={index}
                        >
                         

                         
                            


                            <h3>
                                {mother.name}
                            </h3>


                            <h4>
                                {mother.work}
                            </h4>


                            <p>
                                "{mother.quote}"
                            </p>


                        </div>

                    ))
                }

            </div>

        </section>

    );

}


export default Inspiration;