import "./Projects.css";
import pre from "../../images/pre.png";
import mb from "../../images/mb.png";
import square from "../../images/square.png";
import urls from "../../images/urls.png";
import ruts from "../../images/ruts.jpg";
import morrisgd from "../../images/morrisgd.jpg";

const Projects = () => {
    return (
    <div className="projectsDiv">
        <h1 className="pageTitle">My Projects</h1>
        <div className="innerDivProject">
            <div className="projectRight">
                <div className="project">
                    <h1 className="projectTitle">Jodles</h1>
                    <div className="projectSides">
                        <img src={square} alt="Ruts Technologies Logo" />
                        <p>Jodles is an upcoming "adventure vehicle" rental site that allows users to rent vehicles and post their own vehicles for rent. Jodles is build using React and Next.js for the front end and Flask for the backend. This site will be deployed on AWS EC2.</p>
                    </div>
                </div>
            </div>

            <div className="projectLeft">
                <div className="project">
                    <h1 className="projectTitle">URLS Framework</h1>
                    <div className="projectSides">
                        <img src={urls} alt="URLs Framework Logo" />
                        <div>
                            <p>URLs is a micro framework that takes ugly URLs and allows you to rewrite it any way you want. It is made in PHP and is designed to be deployed on an Apache server.</p>
                            <a href="https://github.com/urls-framework/URLS" target="_blank" rel="noreferrer noopener">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="projectRight">
                <div className="project">
                    <h1 className="projectTitle">Pre Language</h1>
                    <div className="projectSides">
                        <img src={pre} alt="Pre Language Logo" />
                        <p>Pre is an upcoming precompiler language designed to make programing faster, easier, and more efficient by allowing you to write templating code that is only run once. It is designed to process your code before it is compiled or interpreted. It is also designed to work with any language. Pre is built in C++.</p>
                    </div>
                </div>
            </div>

            <div className="projectLeft">
                <div className="project">
                    <h1 className="projectTitle">This Website (<a href="https://micahbaumann.com" target="_blank" rel="noreferrer noopener">micahbaumann.com</a>)</h1>
                    <div className="projectSides">
                        <img src={mb} alt="MB Logo" />
                        <p>This website is a static website built using React and is deployed on GitHub Pages.</p>
                    </div>
                </div>
            </div>

            <div className="projectRight">
                <div className="project">
                    <h1 className="projectTitle">Racers Under the Son Website (<a href="https://ruts.org" target="_blank" rel="noreferrer noopener">ruts.org</a>)</h1>
                    <div className="projectSides">
                        <img src={ruts} alt="Ruts Logo" />
                        <p>Ruts.org is a WordPress website I built for Racers Under the Son. I built a theme using HTML, CSS and JS. I then migrated their site from the old theme to the new theme.</p>
                    </div>
                </div>
            </div>

            <div className="projectLeft">
                <div className="project">
                    <h1 className="projectTitle">Morris Garage Doors Website (<a href="https://morrisgaragedoors.com" target="_blank" rel="noreferrer noopener">morrisgaragedoors.com</a>)</h1>
                    <div className="projectSides">
                        <img src={morrisgd} alt="Morris Garage Doors Logo" />
                        <p>Morrisgaragedoors.com is a WordPress website I built for Morris Garage Doors. I built a theme using HTML, CSS and JS. I deployed the site on AWS Lightsail with plans to migrate it to AWS EC2.</p>
                    </div>
                </div>
            </div>

            <div className="projectRight">
                <div className="project">
                    <h1 className="projectTitle">NuMail</h1>
                    <div className="projectSides">
                        <img src={mb} alt="MB Logo" />
                        <p>NuMail is an upcoming protocol brings email into the 21st century. It improves classic features of SMTP, like allowing larger attachments and improved delivery verification, but also adds new features such as standardized calendar integration, instant messaging, easy unsubscribe, read verifications, etc. NuMail is also backwards compatible with SMTP for a seamless transition to the new protocol.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default Projects;