import "./About.css";
import me from "../../images/me.jpg";

const About = () => {
    return (
        <div className="aboutDiv">
            <h1 className="pageTitle">About Me</h1>
            <div className="sideBySide">
                <img src={me} alt="Me" className="profilePic" />
                <div className="textDiv">
                    <p>I am a computer science student and California State University, Fullerton and Co-Founder & CEO of <a href="https://rutstech.com" target="_blank" rel="noreferrer noopener">Ruts Technologies</a>. I specialize in backend web development with Python and PHP and low-level development in C++. I have developed custom WordPress sites for small businesses and organizations. I anticipate to graduate in December 2024 with my Bachelors degree then earn a Master's in Computer Science.</p>
                    <p>I have always been very passionate about programming and technology and have always look for ways to learn more about it. I started programing at about the age of 12 by taking the programing merit badge in Boy Scouts, watching YouTube videos, online tutorials, and taking classes offered in school. My first real project was designing a website for my Venturing crew, which I successfully completed by building a static HTML website. It was not long before I realized programing is what I wanted to do. After I graduated high school a year early, I started attending college at Orange Coast College, which really refined my skills into skills that are able to produce professional code and teach others how to do the same.</p>
                    <div className="socialLinks">
                        <a href="https://github.com/micahbaumann" target="_blank" rel="noreferrer noopener"><i className="fa-brands fa-github"></i></a>
                        <a href="https://linkedin.com/in/micahbaumann" target="_blank" rel="noreferrer noopener"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;