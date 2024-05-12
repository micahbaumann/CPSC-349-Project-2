import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-bottom">
                <p>Copyright &copy; {new Date().getFullYear()} Micah Baumann</p>
            </div>
        </div>
    );
}
 
export default Footer;