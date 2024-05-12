import "./form.css";

const Button = (props) => {
    return (
        <div className={`input ${props.className}`}>
            <button>{props.children}</button>
        </div>
    );
}
 
export default Button;