import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-bottom">
                <p>Copyright &copy; {new Date().getFullYear()} Micah Baumann</p>
                <a href="/" className="footLinks">Home</a>
                <a href="/about" className="footLinks">About</a>
                <a href="/projects" className="footLinks">Projects</a>
                <a href="/contact" className="footLinks">Contact</a>
            </div>
        </div>
    );
}
 
export default Footer;