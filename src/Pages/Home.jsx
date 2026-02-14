import { Link } from "react-router-dom";
import { projects } from '../Data/projects'

const Home = () => {

    return (
        <section className="main-section">
            <div className="container hero-section">
                <h2>Hi, I'm <span>Balakrishnan</span></h2>
                <p>Full Stack Developer building modern web applications using React, FastAPI, and modern CSS.</p>
                {/* <div className="my-pic">

                </div> */}
            </div>

            <div className="container project">
                <h2>My Projects</h2>
                <div>
                    <ul className="testimonial-container">
                        {projects.map((project) => (
                            <li key={project.id} className="testimonial-card">
                                <div className="image-container">
                                    <img className="card-image" alt={project.title} src={project.src} />
                                    <div className="overlay-text">
                                        <p><a href={project.link} target="_blank" rel="noreferrer">View Project <span className="fa fa-arrow-right"></span></a></p>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div><b>Used Technolgies:</b> <span>{project.tech}</span></div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="container hire">
                <div className="contact-me">
                    <p>Looking for a dedicated developer to collaborate with? Let's build something meaningful together -  <Link to="/contact">Get In Touch</Link></p>
                </div>
            </div>
        </section>
    );
}

export default Home;