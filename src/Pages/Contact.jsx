import React from 'react'; 
import ContactForm from '../Components/ContactForm';

const CurrLocation = React.memo(({ src }) => (
    <iframe className='loc' title="location" src={src}  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
));

const Contact = () => {

    return (
        <section className='main-section contacts'>
            <div className='contact-content'>
                <div className="container contact">
                    <h2>Contact Me</h2>
                    <div>Feel free to reach out for collaboration, project discussions, or any web development opportunities. I'm always open to connecting and learning.</div>
                </div>

                <div className="container form">
                    <ContactForm />
                </div>
            </div>
            <div className="address-info">
                <div className="container links">
                    <h2>Reach Me</h2>
                    <div className="contact-links">
                        <div><span className="fa fa-map-marker-alt"></span> <p>Peraiyur, Madurai, Tamilnadu - 625703</p></div>
                        <a href="tel:+917639324276"><span className="fa fa-phone"></span> <p>+91 7639324276</p></a>
                        <a href="mailto:balakrishnan.connect@gmail.com"><span className="fa fa-envelope"></span> <p>balakrishnan.connect@gmail.com</p></a>
                    </div>
                    <div className="social-link">
                        <a href="https://www.fiverr.com/baladevworks?public_mode=true" title='freelance' target="_blank" rel="noreferrer"><span className='fa fa-briefcase'></span></a>
                        <a href="https://www.linkedin.com/in/balakrishnan-s-247a3b23b" title='linkedin' target="_blank" rel="noreferrer"><span className="fab fa-linkedin"></span></a>
                        <a href="https://www.github.com/bala-labs" target="_blank" title='github' rel="noreferrer"><span className="fab fa-github"></span></a>
                        <a href="https://www.instagram.com/s_b_krish/" target="_blank" title='instagram' rel="noreferrer"><span className="fab fa-instagram"></span></a>
                        <a href="https://www.facebook.com/share/16y46VXi3A/" target="_blank" title='facebook' rel="noreferrer"><span className="fab fa-facebook"></span></a>
                    </div>
                </div>
                <div className="container location">
                    <div>
                        <CurrLocation src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31458.89073281067!2d77.7690350139722!3d9.735427580808373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0728fed8011731%3A0x751252975ebdfdb3!2sPeraiyur%2C%20Tamil%20Nadu%20625703!5e0!3m2!1sen!2sin!4v1767089954916!5m2!1sen!2sin" />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Contact;