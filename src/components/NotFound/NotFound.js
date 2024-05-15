import "./NotFound.css";
import mb from "../../images/mb.png";

const NotFound = () => {
    return (
        <div className="notFound">
            <img src={mb} alt="MB logo" />
            <h1>Error 404: Page Not Found</h1>
        </div>
    );
}
 
export default NotFound;