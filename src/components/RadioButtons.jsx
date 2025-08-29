function RadioButtons(form, handleChange, name) {
    return <div className="form__group radio">
        <h3>{"How do you reate your rubber duck " + name +"?"}</h3>

        <ul>
            <li>
                <input
                    id={name +"-one"}
                    type="radio"
                    name={name}
                    value="1"
                    checked={form[name] === "1"}
                    onChange={handleChange}
                />
                <label
                    htmlFor={name + "-one"}
                >1</label
                >
            </li>
            <li>
                <input
                    id={name + "-two"}
                    type="radio"
                    name={name}
                    value="2"
                    checked={form[name] === "2"}
                    onChange={handleChange}
                /><label
                    htmlFor={name + "-two"}
                >2</label
                >
            </li>
            <li>
                <input
                    id={name + "-three"}
                    type="radio"
                    name={name}
                    value="3"
                    checked={form[name] === "3"}
                    onChange={handleChange}
                /><label
                    htmlFor={name + "-three"}
                >3</label
                >
            </li>
            <li>
                <input
                    id={name + "-four"}
                    type="radio"
                    name={name}
                    value="4"
                    checked={form[name] === "4"}
                    onChange={handleChange}
                /><label
                    htmlFor={name + "-four"}
                >4</label
                >
            </li>
        </ul>

    </div>

}

export default RadioButtons;