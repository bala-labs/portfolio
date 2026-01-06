const exps = [
    {
        id: "e1",
        title: "Infinstor",
        description: "The MLOps Operating System helps data scientists build next generation machine learning workflows with the click of a button.",
        role: "Sofware Developer",
        src: `${process.env.PUBLIC_URL}/assets/infinstor.webp`
    }
];

const skills = [
    {
        id: "languages",
        title: "Languages",
        tools: "Python, C, Java"
    },
    {
        id: "front-end",
        title: "Front-End",
        tools: "HTML, CSS, JS, React"
    },
    {
        id: "back-end",
        title: "Back-End",
        tools: "fastAPI"
    },
    {
        id: "db",
        title: "Databases",
        tools: "MySQL"
    },
    {
        id: "testing",
        title: "Testing",
        tools: "Unit Testing, Selenium Automation, Pytest"
    },
    {
        id: "others",
        title: "Other Skills",
        tools: "Git & GitHub, XPath, API integration, Responsive Design"
    }
];

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
                    <p>Download my resume to view my education, technical skills, and project experience.</p>
                    <a href='../Resume/Balakrishnan_Resume.pdf' download>
                        <button className="resume-btn">My Resume</button>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About;