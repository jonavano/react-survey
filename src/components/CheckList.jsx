/* eslint-disable react/prop-types */
function CheckList({form, handleChange, question, options, name}) {
    return (<div className="form__group">
        <h3 htmlFor= {name}>{question}</h3>
        <ul>
            <li>
                <label
                ><input
                        name={name}
                        type="checkbox"
                        value={options[0]} 
                        checked={form[name]?.includes(options[0])}
                        onChange={handleChange}
                        />{options[0]}
                        </label>
            </li>
            <li>
                <label
                ><input 
                name={name} 
                type="checkbox"
                 value={options[1]}
                 checked={form[name]?.includes(options[1])}
                        onChange={handleChange}
                 />{options[1]}</label>

            </li>
            <li>
                <label
                ><input
                        name={name}
                        type="checkbox"
                        value={options[2]} 
                        checked={form[name]?.includes(options[2])}
                        onChange={handleChange}
                        />{options[2]}</label>
            </li>
            <li>
                <label
                ><input 
                name={name}
                type="checkbox" 
                value={options[3]}
                checked={form[name]?.includes(options[3])}
                        onChange={handleChange}
                />{options[3]}</label>
            </li>
        </ul>
    </div>);
}

export default CheckList;