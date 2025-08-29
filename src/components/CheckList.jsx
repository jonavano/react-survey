function CheckList() {
    return <div className="form__group">
        <h3 htmlFor="subscribe">Subscribe to newsletter</h3>
        <ul>
            <li>
                <label
                ><input
                        name="spend-time"
                        type="checkbox"
                        value="swimming" />Swimming</label>
            </li>
            <li>
                <label
                ><input name="spend-time" type="checkbox" value="bathing" />Bathing</label>
            </li>
            <li>
                <label
                ><input
                        name="spend-time"
                        type="checkbox"
                        value="chatting" />Chatting</label>
            </li>
            <li>
                <label
                ><input name="spend-time" type="checkbox" value="noTime" />I don't like to
                    spend time with it</label>
            </li>
        </ul>
    </div>;
}

export default CheckList;