import { useState } from "react";
import SurveyQuestions from "./SurveyQuestions";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>

    
      <section className="survey__form">
        {/* SurveyQuestions() */}
        
        
        

        {/* <div> */}
          {SurveyQuestions()}


        {/* </div> */}
        
        </section>


    </main>
  );
}

export default Survey;
