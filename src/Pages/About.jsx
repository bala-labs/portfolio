import { exps } from '../Data/experience';
import { skills } from '../Data/skills';

const About = () => {

    return (
        <section className="main-section">
            <div className="container about">
                <h2>About Me</h2>
                <div className="about-content">
                    Hi! I'm Balakrishnan, a passionate web developer specializing in building responsive and user-friendly websites. I love turning ideas into functional, interactive web experiences. With a strong foundation in HTML, CSS, JavaScript and React, I enjoy solving problems and continuously learning new technologies to create websites that are both beautiful and efficient
                </div>
            </div>

            <div className="container skill">
                <h2>Skills</h2>
                <div className="card-wrapper">
                    <ul className="testimonial-container">
                        {
                            skills.map((skill) => (
                                <li className="testimonial-card skill-container" key={skill.id}>
                                    <h4>{skill.title}</h4>
                                    <div>{skill.tools}</div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            <div className="container exp">
                <h2>Experience</h2>
                <div>
                    <ul className="testimonial-container">
                        {exps.map((exp) => (
                            <li key={exp.id} className="testimonial-card">
                                 <div className="company-logo">
                                    <img className="card-image" alt={exp.title} src={exp.src} />
                                </div>
                                <div className="card-content">
                                    <h3>{exp.title}</h3>
                                    <p>{exp.description}</p>
                                    <p><b>Role:</b> {exp.role}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="container resume">
                <div className='download-section'>
                    <p><a href='../Resume/Balakrishnan_Resume.pdf' download>
                        <span title='My Resume' className='fa fa-download'></span>
                    </a> Download my resume to view my education, technical skills, and project experience.</p>
                </div>
            </div>
        </section>
    );
}

export default About;