import CheckList from "./CheckList";
import RadioButtons from "./RadioButtons";
import TextForm from "./TextForm";

function SurveyQuestions() {
    return <>
        <form className="form">
            <h2> More complaints</h2>


            {CheckList()}
            {CheckList()}

            {RadioButtons()}
            {RadioButtons()}
            {RadioButtons()}

            {CheckList()}

            {TextForm("What else have you got to say about your rubber duck?",null, "review" , null, true)}
            <label>
                Put your name here (if you feel like it):
                <input
                    type="text"
                    name="username"
                    value="" />
            </label>
            <label>
                Leave us your email pretty please??
                <input
                    type="email"
                    name="email"
                    value=""
                />
            </label>
            <input
                className="form__submit" type="submit" value="Submit Survey!"
            />



        </form>
       
    </>;
}

export default SurveyQuestions;



