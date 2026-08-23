import React, { useState } from 'react';
import ContactForm from '../Components/ContactForm';
import Notification from '../Components/Notification';

const CurrLocation = React.memo(({ src }) => (
    <iframe
        className="loc-map"
        title="Location Map - Peraiyur, Madurai"
        src={src}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
));

const Contact = () => {
    const [toastMessage, setToastMessage] = useState('');

    const handleCopy = (text, label) => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text);
            setToastMessage(`${label} copied to clipboard!`);
        }
    };

    return (
        <section className="main-section contact-page-wrapper">
            <div className="contact-page-header">
                <p className="section-label">
                    <i className="fa-solid fa-paper-plane"></i> Let's Connect
                </p>
                <h1 className="section-heading">
                    Get In <span>Touch</span>
                </h1>
                <p className="services-sub">
                    Have a project in mind, want to discuss web development opportunities, or just want to say hi? Feel free to send a message or connect directly.
                </p>
            </div>

            <div className="contact-grid-container">
                {/* Left: Contact Form */}
                <div className="contact-form-column">
                    <ContactForm />
                </div>

                {/* Right: Unified Contact Information & Location Card */}
                <div className="contact-info-column">
                    <div className="contact-card-glass info-card unified-contact-card">
                        <div className="info-card-top-section">
                            <h3 className="contact-card-title">
                                <i className="fa-solid fa-address-card"></i> Contact Information
                            </h3>
                            <p className="contact-card-subtitle">Reach out directly via email, phone, or connect on social channels.</p>

                            <div className="contact-detail-items">
                                <div className="contact-detail-item">
                                    <div className="detail-icon">
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <div className="detail-text">
                                        <span className="detail-label">Email Address</span>
                                        <a href="mailto:balakrishnan.connect@gmail.com" className="detail-value">
                                            balakrishnan.connect@gmail.com
                                        </a>
                                    </div>
                                    <button
                                        type="button"
                                        className="copy-action-btn"
                                        onClick={() => handleCopy('balakrishnan.connect@gmail.com', 'Email')}
                                        title="Copy Email"
                                        aria-label="Copy Email"
                                    >
                                        <i className="fa-regular fa-copy"></i>
                                    </button>
                                </div>

                                <div className="contact-detail-item">
                                    <div className="detail-icon">
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <div className="detail-text">
                                        <span className="detail-label">Phone &amp; WhatsApp</span>
                                        <a href="tel:+917639324276" className="detail-value">
                                            +91 7639324276
                                        </a>
                                    </div>
                                    <button
                                        type="button"
                                        className="copy-action-btn"
                                        onClick={() => handleCopy('+917639324276', 'Phone number')}
                                        title="Copy Phone"
                                        aria-label="Copy Phone"
                                    >
                                        <i className="fa-regular fa-copy"></i>
                                    </button>
                                </div>

                                <div className="contact-detail-item">
                                    <div className="detail-icon">
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    <div className="detail-text">
                                        <span className="detail-label">Location</span>
                                        <p className="detail-value">
                                            Peraiyur, Madurai, Tamil Nadu - 625703
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="social-channels-block">
                                <div className="social-pills-list">
                                    <a
                                        href="https://www.github.com/bala-labs"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="social-badge-pill"
                                        title="GitHub"
                                    >
                                        <i className="fa-brands fa-github"></i>
                                        <span>GitHub</span>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/balakrishnan-s-247a3b23b"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="social-badge-pill"
                                        title="LinkedIn"
                                    >
                                        <i className="fa-brands fa-linkedin-in"></i>
                                        <span>LinkedIn</span>
                                    </a>
                                    <a
                                        href="https://www.fiverr.com/baladevworks?public_mode=true"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="social-badge-pill"
                                        title="Fiverr"
                                    >
                                        <i className="fa-solid fa-briefcase"></i>
                                        <span>Fiverr</span>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/balakrishnandev?igsh=OTQ1dTh0N2o2Nmk1"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="social-badge-pill"
                                        title="Instagram"
                                    >
                                        <i className="fa-brands fa-instagram"></i>
                                        <span>Instagram</span>
                                    </a>
                                    <a
                                        href="https://www.facebook.com/share/16y46VXi3A/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="social-badge-pill"
                                        title="Facebook"
                                    >
                                        <i className="fa-brands fa-facebook-f"></i>
                                        <span>Facebook</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Integrated Map Section */}
                        <div className="integrated-map-section">
                            <div className="map-header">
                                <div className="map-header-title">
                                    <i className="fa-solid fa-map-location-dot"></i>
                                    <span>Location Map</span>
                                </div>
                                <a
                                    href="https://maps.google.com/?q=Peraiyur,Tamil+Nadu,625703"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="open-map-btn"
                                    title="Open in Google Maps"
                                >
                                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    <span>Open Maps</span>
                                </a>
                            </div>
                            <div className="map-frame-wrapper">
                                <CurrLocation src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31458.89073281067!2d77.7690350139722!3d9.735427580808373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0728fed8011731%3A0x751252975ebdfdb3!2sPeraiyur%2C%20Tamil%20Nadu%20625703!5e0!3m2!1sen!2sin!4v1767089954916!5m2!1sen!2sin" />
                                <div className="map-pin-overlay">
                                    <i className="fa-solid fa-map-pin"></i>
                                    <span>Peraiyur, TN</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {toastMessage && (
                <Notification message={toastMessage} closeMessage={setToastMessage} />
            )}
        </section>
    );
};

export default Contact;
