import { Link } from "react-router-dom";
import { projects } from '../Data/projects';
import { service } from '../Data/services';

const Home = () => {

    return (
        <section className="main-section">
            <div className="container hero-section">
                <h2>Hi, I'm <span>Balakrishnan</span></h2>
                <p>I build modern web applications and automate workflows that save time and scale efficiently.</p>
                {/* <div className="my-pic">

                </div> */}
            </div>

            <div className="container services">
                <p className="section-label"><i className="fa-solid fa-cube"></i> What I Offer</p>
                <h2 className="section-heading">Specialized <span>Services & Solutions</span></h2>
                <p className="services-sub">From polished React frontends to robust Python backends — clean, end-to-end web engineering tailored to your goals.</p>
                <div>
                    <ul className="testimonial-container">
                        {service.map((item) => (
                            <li key={item.id}
                                className="testimonial-card service">
                                <div className="service-icon">
                                    <span className={item.icon}></span>
                                </div>
                                <div className="service-content">
                                    <h4>{item.name}</h4>
                                    <p>{item.content}</p>
                                    <ul>
                                        {item.features.map((f, idx) => (
                                            <li key={idx}>{f}</li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>


            <div className="container project">
                <p className="section-label"><i className="fa-solid fa-laptop-code"></i> Portfolio Showcase</p>
                <h2 className="section-heading">Featured <span>Projects &amp; Applications</span></h2>
                <p className="services-sub">A selection of real-world applications I've designed, built, and shipped — from developer tools to full-stack platforms.</p>
                <div>
                    <ul className="testimonial-container projects-grid">
                        {projects.map((project) => (
                            <li key={project.id} className="testimonial-card project-card">
                                <div className="image-container">
                                    <img className="card-image" alt={project.title} src={project.src} />
                                    <div className="overlay-text">
                                        <a href={project.link} target="_blank" rel="noreferrer" className="overlay-btn">
                                            <span className="fa fa-arrow-up-right-from-square"></span> Live Demo
                                        </a>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="tech-tags">
                                        {project.tech.split(',').map((t, i) => (
                                            <span key={i} className="tech-tag">{t.trim()}</span>
                                        ))}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="cta-section">
                <div className="cta-glow"></div>
                <p className="cta-eyebrow"><i className="fa-solid fa-handshake"></i> Open for collaboration</p>
                <h2 className="cta-heading">Let's Build Something <span>Meaningful Together</span></h2>
                <p className="cta-sub">Have a project in mind, a role to fill, or just want to connect? I'm always open to discussing new opportunities and ideas.</p>
                <Link to="/contact" className="cta-btn">
                    <span className="fa fa-paper-plane"></span>
                    Get In Touch
                </Link>
            </div>
        </section>
    );
}

export default Home;
