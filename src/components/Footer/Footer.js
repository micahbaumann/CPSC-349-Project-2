import "./Footer.css";
import { Link } from "react-router-dom";

const scrollUp = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
};

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-bottom">
                <p>Copyright &copy; {new Date().getFullYear()} Micah Baumann</p>
                <Link onClick={scrollUp} to="/" className="footLinks">Home</Link>
                <Link onClick={scrollUp} to="/about" className="footLinks">About</Link>
                <Link onClick={scrollUp} to="/projects" className="footLinks">Projects</Link>
                <Link onClick={scrollUp} to="/contact" className="footLinks">Contact</Link>
            </div>
        </div>
    );
}
 
export default Footer;