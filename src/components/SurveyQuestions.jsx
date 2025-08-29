import CheckList from "./CheckList";
import RadioButtons from "./RadioButtons";
import TextForm from "./TextForm";
import { useState } from "react";

function SurveyQuestions() {
    const duckFeatures = ["Its yellow!", "It squeeks!", "it has a logo!", "its big!"]

    const spendTimeWithDuck = ["Swimming", "Bathing", "Chatting", "I don't like to spend time with it"]

    const [form, setForm] = useState({
        username: "",
        email: "",
        review: "",
        color: "",
        consistency: "",
        logo: "",
        bestFeatures: [],
        worstFeatures: [],
        spendTime: []
    })

    function handleChange(event) {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        const inputType = event.target.type;
        const inputChecked = event.target.checked;

        if (inputName === "email") {
            setForm({ ...form, email: inputValue })
        }
        if (inputName === "username") {
            setForm({ ...form, username: inputValue })
        }
        if (inputName === "review") {
            setForm({ ...form, review: inputValue })
        }
        if (inputName === "color") {
            setForm({ ...form, color: inputValue })
        }
        if (inputName === "consistency") {
            setForm({ ...form, consistency: inputValue })
        }
        if (inputName === "logo") {
            setForm({ ...form, logo: inputValue })
        }
        if (inputType === "checkbox" && inputName === "spend-time") {
            setForm(prev => {
                const updated = inputChecked
                    ? [...prev.spendTime, inputValue]
                    : prev.spendTime.filter(a => a !== inputValue);
                return { ...prev, spendTime: updated };
            });
        }
        if (inputType === "checkbox" && inputName === "best-features") {
            setForm(prev => {
                const updated = inputChecked
                    ? [...prev.bestFeatures, inputValue]
                    : prev.bestFeatures.filter(a => a !== inputValue);
                return { ...prev, bestFeatures: updated };
            });
        }
        if (inputType === "checkbox" && inputName === "worst-features") {
            console.log(inputChecked)
            console.log(inputName)
            console.log(inputType)
            console.log(inputValue)

            setForm(prev => {
                const updated = inputChecked
                    ? [...prev.worstFeatures, inputValue]
                    : prev.worstFeatures.filter(a => a !== inputValue);
                return { ...prev, worstFeatures: updated };
            });
        }
    }


    function handleSubmit(event) {
        event.preventDefault();
        setForm({
        username: "",
        email: "",
        review: "",
        color: "",
        consistency: "",
        logo: "",
        bestFeatures: [],
        worstFeatures: [],
        spendTime: []
    })
        console.log(form)
    }

    return <>
        <form className="form" onSubmit={handleSubmit}>
            <h2> More complaints</h2>

            <CheckList
                form={form}
                handleChange={handleChange}
                question="What would you say are the best features?"
                options={duckFeatures}
                name="best-Features"
            />
            <CheckList
                form={form}
                handleChange={handleChange}
                question="What would you say are the worst features?"
                options={duckFeatures}
                name="worst-Features"
            />



            {RadioButtons(form, handleChange, "consistency")}
            {RadioButtons(form, handleChange, "color")}
            {RadioButtons(form, handleChange, "logo")}

            <CheckList
                form={form}
                handleChange={handleChange}
                question="How do you like to spend time with your rubber duck?"
                options={spendTimeWithDuck}
                name="spend-time"
            />

            {TextForm("What else have you got to say about your rubber duck?"
                , null, "review", form.review, true, handleChange)}

            <label>
                Put your name here (if you feel like it):
                <input
                    type="text"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                />
            </label>

            <label>
                Leave us your email pretty please??
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />
            </label>
            <input
                className="form__submit" type="submit" value="Submit Survey!"
            />



        </form>

    </>;
}

export default SurveyQuestions;



