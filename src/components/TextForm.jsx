function TestForm(text,Type, Name,Value, big) {
    let cols = null;
    let rows = null;
    if (big) {
        cols = "30";
        rows = "10";
    }
    return <label>{text}
        <textarea
            name={Name}
            cols={cols}
            rows={rows}
            value={Value}
            type= {Type}
        >
        </textarea>
    </label>;
}

export default TestForm;