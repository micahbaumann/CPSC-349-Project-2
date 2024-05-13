import "./form.css";

const Button = (props) => {
    let name = "";
    if (props.name) {
        name = props.name;
    }
    return (
        <div className={`input ${props.className}`}>
            <button
                autoFocus={props.autofocus}
                disabled={props.disabled}
                form={props.form}
                formAction={props.formaction}
                formEncType={props.formenctype}
                formMethod={props.formMethod}
                formNoValidate={props.formNoValidate}
                formTarget={props.formTarget}
                name={name}
                type={props.type}
                value={props.value}
            >{props.children}</button>
        </div>
    );
}
 
export default Button;