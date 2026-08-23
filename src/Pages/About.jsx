import { Link } from 'react-router-dom';
import { exps } from '../Data/experience';
import { skills } from '../Data/skills';

const About = () => {

    return (
        <section className="main-section">
            <div className="container about-intro-section">
                <p className="section-label"><i className="fa-solid fa-user"></i> About Me</p>
                <h1 className="section-heading">Crafting <span>Modern &amp; Scalable</span> Web Solutions</h1>
                <p className="services-sub">Passionate Full-Stack Developer dedicated to building intuitive user interfaces, efficient backends, and reliable automated workflows.</p>

                <div className="about-bio-grid">
                    {/* Left: Bio & Quick Facts */}
                    <div className="about-bio-glass-card">
                        <h3 className="about-bio-title">
                            Hi! I'm <span className="highlight-text">Balakrishnan</span>, a Developer from Madurai, India.
                        </h3>
                        <p className="about-bio-paragraph">
                            I specialize in engineering full-stack web applications using React, modern CSS, Python, and FastAPI. With a strong foundation in frontend architecture and asynchronous backend design, I love turning complex problem statements into functional, beautiful, and lightning-fast digital experiences.
                        </p>
                        <p className="about-bio-paragraph">
                            Whether creating interactive single-page applications, integrating third-party APIs, debugging software issues, or building automated scripts that save hours of manual effort, I prioritize clean, maintainable code and long-term scalability.
                        </p>

                        <div className="about-quick-facts-grid">
                            <div className="quick-fact-badge">
                                <i className="fa-solid fa-location-dot"></i>
                                <div className="fact-info">
                                    <span className="fact-name">Location</span>
                                    <span className="fact-val">Madurai, TN, India</span>
                                </div>
                            </div>
                            <div className="quick-fact-badge">
                                <i className="fa-solid fa-graduation-cap"></i>
                                <div className="fact-info">
                                    <span className="fact-name">Core Focus</span>
                                    <span className="fact-val">Full-Stack &amp; Python APIs</span>
                                </div>
                            </div>
                            <div className="quick-fact-badge">
                                <i className="fa-solid fa-laptop-code"></i>
                                <div className="fact-info">
                                    <span className="fact-name">Experience</span>
                                    <span className="fact-val">Freelance &amp; Industry</span>
                                </div>
                            </div>
                            <div className="quick-fact-badge">
                                <i className="fa-solid fa-comments"></i>
                                <div className="fact-info">
                                    <span className="fact-name">Collaboration</span>
                                    <span className="fact-val">Open for Opportunities</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Technical Highlights */}
                    <div className="about-highlights-card">
                        <div className="highlight-item">
                            <div className="highlight-icon-box">
                                <i className="fa-solid fa-code-branch"></i>
                            </div>
                            <div className="highlight-item-text">
                                <h4>Modern Frontend Excellence</h4>
                                <p>React, component-driven architecture, mobile-first responsive design, and smooth user interactions.</p>
                            </div>
                        </div>

                        <div className="highlight-item">
                            <div className="highlight-icon-box">
                                <i className="fa-solid fa-bolt"></i>
                            </div>
                            <div className="highlight-item-text">
                                <h4>Fast &amp; Scalable APIs</h4>
                                <p>High-throughput FastAPI microservices, MySQL database modeling, and clean RESTful endpoints.</p>
                            </div>
                        </div>

                        <div className="highlight-item">
                            <div className="highlight-icon-box">
                                <i className="fa-solid fa-robot"></i>
                            </div>
                            <div className="highlight-item-text">
                                <h4>Workflow Automation</h4>
                                <p>Selenium automation, web scraping, and Python scripts that optimize everyday business workflows.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container skill">
                <p className="section-label"><i className="fa-solid fa-layer-group"></i> Technical Stack</p>
                <h2 className="section-heading">Skills &amp; <span>Technologies</span></h2>
                <p className="services-sub">A curated toolkit of languages, frameworks, databases, and tools I use to build scalable web applications.</p>
                <div className="card-wrapper">
                    <ul className="skills-grid-container">
                        {
                            skills.map((skill) => (
                                <li className="skill-category-glass-card" key={skill.id}>
                                    <div className="skill-card-top">
                                        <div className="skill-icon-wrap">
                                            <i className={skill.icon || "fa-solid fa-cube"}></i>
                                        </div>
                                        <h4>{skill.title}</h4>
                                    </div>
                                    <div className="skill-pills-wrap">
                                        {skill.tools.split(',').map((tool, idx) => (
                                            <span className="skill-tool-pill" key={idx}>
                                                {tool.trim()}
                                            </span>
                                        ))}
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            <div className="container exp">
                <p className="section-label"><i className="fa-solid fa-briefcase"></i> Career Journey</p>
                <h2 className="section-heading">Work &amp; <span>Experience</span></h2>
                <p className="services-sub">My professional track record across software engineering, digital solutions, and freelance web development.</p>
                <div>
                    <ul className="experience-grid-container">
                        {exps.map((exp) => (
                            <li key={exp.id} className="experience-glass-card">
                                <div className="exp-card-header">
                                    <div className="exp-company-logo-wrap">
                                        <img className="exp-logo-img" alt={exp.title} src={exp.src} />
                                    </div>
                                    <div className="exp-header-info">
                                        <h3>{exp.title}</h3>
                                        <span className="exp-role-badge">
                                            <i className="fa-solid fa-user-gear"></i> {exp.role}
                                        </span>
                                    </div>
                                </div>
                                <p className="exp-card-desc">{exp.description}</p>
                                {exp.badge && (
                                    <div className="exp-tag-row">
                                        <span className="exp-category-pill">{exp.badge}</span>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="resume-cta-wrapper">
                <div className="resume-cta-card">
                    <div className="resume-cta-glow"></div>
                    <div className="resume-cta-left">
                        <div className="resume-icon-badge">
                            <i className="fa-solid fa-file-pdf"></i>
                        </div>
                        <div className="resume-cta-text">
                            <h3 className="resume-cta-title">Download My Complete Resume</h3>
                            <p className="resume-cta-sub">
                                Get a detailed overview of my educational background, technical expertise, and career journey in a single PDF.
                            </p>
                        </div>
                    </div>
                    <div className="resume-cta-actions">
                        <a
                            href="../Resume/Balakrishnan_Resume.pdf"
                            download="Balakrishnan_Resume.pdf"
                            className="resume-download-btn"
                        >
                            <i className="fa-solid fa-download"></i>
                            <span>Download PDF</span>
                        </a>
                        <Link to="/contact" className="resume-contact-btn">
                            <i className="fa-solid fa-paper-plane"></i>
                            <span>Hire Me</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;