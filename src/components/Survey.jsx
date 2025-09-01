import { useState } from "react";
import SurveyQuestions from "./SurveyQuestions";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answersList, setAnswersList] = useState([]);

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
        <AnswersList answersList={answersList}/>
      </section>

    
      <section className="survey__form">
        {/* SurveyQuestions() */}
        
        
        

        {/* <div> */}
          <SurveyQuestions answersList={answersList} setAnswersList={setAnswersList}/>


        {/* </div> */}
        
        </section>


    </main>
  );
}

export default Survey;
