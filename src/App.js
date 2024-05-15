// Stylesheets/Images
import './App.css';
import mb from "./images/mb.png";

// Libraries
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

// Components
import Navbar from './components/navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
    const [navbarHeight, setNavbarHeight] = useState(0);

    return (
    <div className="App">
        
        <Router>
            <Navbar
                links={
                    [
                        {
                            name: "Home",
                            link: "/"
                        },
                        {
                            name: "About",
                            link: "/about"
                        },
                        {
                            name: "Projects",
                            link: "/projects"
                        },
                        {
                            name: "Contact",
                            link: "/contact"
                        },
                    ]
                }
                image={mb}
                setNavbarHeight={setNavbarHeight}
                title="Micah Baumann"
            />
            <div className='main' style={{ paddingTop: navbarHeight }}>
                <Routes>
                <Route path="/" element={<Outlet />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
            </div>
            <Footer />
        </Router>
    </div>
    );
}

export default App;
