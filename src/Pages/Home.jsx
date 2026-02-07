import { Link } from "react-router-dom";
import { projects } from '../Data/projects'

const Home = () => {

    return (
        <section className="main-section">
            <div className="container intro">
                <p>Hi, I'm Balakrishnan</p>
                <p>Frontend Developer | Python Developer</p>
                <p>I build clean, fast and responsive web applications</p>
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
                                        <p><a href={project.link} target="_blank" rel="noreferrer">{"View Project >"}</a></p>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <p><b>Used Technolgies:</b> {project.tech}</p>
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