import "./form.css";

const Textarea = (props) => {
    const transferStyle = {};
    if (props.innerWidth) {
        transferStyle.width = props.innerWidth;
    }
    if (props.innerReize) {
        transferStyle.resize = props.innerReize;
    }
    return (
        <div className={`input ${props.className}`}>
            <textarea
                autoCapitalize={props.autoCapitalize}
                autoComplete={props.autoComplete}
                autoCorrect={props.autoCorrect}
                autoFocus={props.autoFocus}
                cols={props.cols}
                dirname={props.dirname}
                disabled={props.disabled}
                form={props.form}
                maxLength={props.maxLength}
                minLength={props.minLength}
                name={props.name}
                placeholder=""
                readOnly={props.readOnly}
                required={props.required}
                rows={props.rows}
                spellCheck={props.spellCheck}
                wrap={props.wrap}
                style={transferStyle}
                className="input"
            >{props.children}</textarea>
            {props.placeholderLabel && <span className="floating-label-ta">{props.placeholderLabel}</span>}
            <span className="inputError">{props.error}</span>
        </div>
    );
}
 
export default Textarea;