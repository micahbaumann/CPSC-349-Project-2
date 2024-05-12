import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = (props) => {
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
    const [firstScroll, setFirstScroll] = useState(true);
    const nav = useRef();

    if (firstScroll && prevScrollPos > 0) {
        nav.current.style.top = 0;
    }

    useEffect(() => {
        const handleScroll = () => {
            const curScrollPos = window.scrollY;
            const navbar = nav.current;

            // if (curScrollPos === 0) {
            // setNavbarVisible(true);
            // } else {
            // setNavbarVisible(curScrollPos < prevScrollPos);
            // }

            if (curScrollPos === 0) {
                navbar.style.boxShadow = "none";
                navbar.style.borderBottom = "2px solid #dee0e3";
            } else {
                navbar.style.boxShadow = "0 1px 2px rgba(0,0,0,0.5)";
                navbar.style.borderBottom = "0";
            }

            if (curScrollPos <= navbar.offsetHeight || prevScrollPos > curScrollPos || (firstScroll && prevScrollPos > 0)) {
                navbar.style.top = 0;
            } else {
                navbar.style.top = `-${navbar.offsetHeight + 3}px`;
            }
            setPrevScrollPos(curScrollPos);
            setFirstScroll(false);
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos, firstScroll]);

    useEffect(() => {
        props.setNavbarHeight(nav.current.offsetHeight);
    }, [props]);

    return ( 
        <div className="navbar" id="nav" ref={nav}>
            <div className="navLeft">
                <Link to="/"><img src={props.image} alt="Logo" className="navbar-image"/></Link>
                <Link to="/"><h1 className="navTitle">{props.title}</h1></Link>
            </div>
            <div className="navlinks">
                <ul className="navlist">
                    {props.links.map((link, key) => <li key={key}><Link to={link.link}>{link.name}</Link></li>)}
                </ul>
            </div>
        </div>
    );
}
 
export default Navbar;