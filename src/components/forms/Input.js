import "./form.css";

const Input = (props) => {
    const transferStyle = {};
    if (props.innerWidth) {
        transferStyle.width = props.innerWidth;
    }
    return (
        <div className={`input ${props.className}`}>
            <input
                type={props.type}
                name={props.name}
                accept={props.accept}
                alt={props.alt}
                autoCapitalize={props.autoCapitalize}
                autoComplete={props.autoComplete}
                capture={props.capture}
                checked={props.checked}
                dirname={props.dirname}
                disabled={props.disabled}
                form={props.form}
                formAction={props.formAction}
                formEncType={props.formEncType}
                formMethod={props.formMethod}
                formNoValidate={props.formNoValidate}
                formTarget={props.formTarget}
                height={props.height}
                list={props.list}
                max={props.max}
                maxLength={props.maxLength}
                min={props.min}
                minLength={props.minLength}
                multiple={props.multiple}
                pattern={props.pattern}
                placeholder=""
                readOnly={props.readOnly}
                required={props.required}
                size={props.size}
                src={props.src}
                step={props.step}
                value={props.value}
                width={props.width}
                style={transferStyle}
                className="input-real"
            />
            {props.placeholderLabel && <span className="floating-label">{props.placeholderLabel}</span>}
            <span className="inputError">{props.error}</span>
        </div>
    );
}
 
export default Input;