import "./Home.css"
import SkillCard from "../SkillCard/SkillCard";
import cpp from "../../images/cpp_logo.png";
import python from "../../images/python.png";
import php from "../../images/php.png";
import java from "../../images/java.png";
import sql from "../../images/sql.png";
import html from "../../images/html5.png";
import css from "../../images/css.png";
import js from "../../images/javascript.svg";
import mysql from "../../images/mysql.png";
import mariadb from "../../images/mariadb.png";
import sqlite from "../../images/sqlite.png";
import pma from "../../images/pma.png";
import pre from "../../images/pre.png";
import fastapi from "../../images/fastapi.svg";
import flask from "../../images/flask.webp";
import krakend from "../../images/krakend.webp";
import reactLogo from "../../images/react.svg";
import next from "../../images/nextjs.svg";
import litefs from "../../images/litefs.svg";
import jquery from "../../images/jquery.png";
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        document.title = "Micah Baumann";
    }, []);
    
    return (
        <div className="homeDiv">
            <div className="innerDiv">
                <h1 className="pageTitle">Hi, I'm Micah!</h1>
                <p className="introText">
                    I am a computer science student and California State University, Fullerton and Co-Founder & CEO of <a href="https://rutstech.com" target="_blank" rel="noreferrer noopener">Ruts Technologies</a>. I specialize in backend web development with Python and PHP and low-level development in C++. I have developed custom WordPress sites for small businesses and organizations.
                </p>
                <h1 className="pageTitle">Skills</h1>
                <h1>Languages</h1>
                <div className="cards">
                    <SkillCard src={cpp} alt="C++ Logo" Title="C++" />
                    <SkillCard src={python} alt="Python Logo" Title="Python" />
                    <SkillCard src={php} alt="PHP Logo" Title="PHP" />
                    <SkillCard src={java} alt="Java Logo" Title="Java" />
                    <SkillCard src={sql} alt="SQL Logo" Title="SQL" />
                    <SkillCard src={html} alt="HTML Logo" Title="HTML" />
                    <SkillCard src={css} alt="CSS Logo" Title="CSS" />
                    <SkillCard src={js} alt="JavaScript Logo" Title="JavaScript" />
                    <SkillCard src={pre} alt="Pre Logo" Title="Pre" />
                </div>

                <h1>Database Systems</h1>
                <div className="cards">
                    <SkillCard src={mysql} alt="MySQL Logo" Title="MySQL" />
                    <SkillCard src={mariadb} alt="MariaDB Logo" Title="MariaDB" />
                    <SkillCard src={sqlite} alt="SQLite Logo" Title="SQLite" />
                    <SkillCard src={sql} alt="SQL Logo" Title="SQL" />
                    <SkillCard src={pma} alt="phpMyAdmin Logo" Title="phpMyAdmin" />
                </div>

                <h1>Frameworks and Libraries</h1>
                <div className="cards">
                    <SkillCard src={fastapi} alt="FastAPI Logo" Title="FastAPI" />
                    <SkillCard src={flask} alt="Flask Logo" Title="Flask" />
                    <SkillCard src={krakend} alt="KrakenD Logo" Title="KrakenD" />
                    <SkillCard src={reactLogo} alt="React Logo" Title="React" />
                    <SkillCard src={next} alt="Next.js Logo" Title="Next.js" />
                    <SkillCard src={litefs} alt="LiteFS Logo" Title="LiteFS" />
                    <SkillCard src={jquery} alt="jQuery Logo" Title="jQuery" />
                </div>
            </div>
        </div>
    );
}
 
export default Home;