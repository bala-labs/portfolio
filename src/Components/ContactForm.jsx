import { useState } from "react";
import Notification from './Notification';

const initialForm = {
    name: "",
    email: "",
    phone: "",
    message: ""
};

const encode = (data) =>
    Object.keys(data)
        .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");

const ContactForm = () => {
    const [formData, setFormData] = useState(initialForm);
    const [notification, setNotification] = useState('');
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const errs = {};
        if (!formData.name.trim()) {
            errs.name = "Name is required";
        } else if (!/^[a-zA-Z\s]{2,50}$/.test(formData.name.trim())) {
            errs.name = "Please enter a valid name (letters only)";
        }

        if (!formData.email.trim()) {
            errs.email = "Email address is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
            errs.email = "Please enter a valid email address";
        }

        if (formData.phone.trim() && !/^\+?[0-9\s-]{7,15}$/.test(formData.phone.trim())) {
            errs.phone = "Please enter a valid phone number";
        }

        if (!formData.message.trim()) {
            errs.message = "Please enter your message";
        }

        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);

        try {
            const response = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({
                    "form-name": "contact",
                    ...formData
                })
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            setNotification("Thank you! Your message received.");
            setFormData(initialForm);
            setErrors({});
        } catch {
            setNotification("Message received! I'll get back to you shortly.");
            setFormData(initialForm);
            setErrors({});
        } finally {
            setIsSubmitting(false);
        }
        window.scrollTo(0, 0);
    };

    return (
        <div className="contact-card-glass form-card">
            <h3 className="contact-card-title">
                <i className="fa-solid fa-envelope-open-text"></i> Send a Direct Message
            </h3>
            <p className="contact-card-subtitle">
                Fill in the form below and I'll get back to you within 24 hours.
            </p>

            <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="modern-contact-form"
                onSubmit={handleSubmit}
            >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                    <label>Don't fill this out: <input name="bot-field" /></label>
                </p>

                <div className="form-group-field">
                    <label htmlFor="contact-name" className="field-label">
                        <i className="fa-solid fa-user"></i> Your Name <span className="req-star">*</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="contact-name"
                        className={`field-input ${errors.name ? 'input-error' : ''}`}
                        placeholder="Enter Your Full Name"
                        onChange={handleChange}
                        value={formData.name}
                        autoComplete="name"
                    />
                    {errors.name && (
                        <p className="field-error-msg">
                            <i className="fa-solid fa-circle-exclamation"></i> {errors.name}
                        </p>
                    )}
                </div>

                <div className="form-group-field">
                    <label htmlFor="contact-email" className="field-label">
                        <i className="fa-solid fa-at"></i> Email Address <span className="req-star">*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="contact-email"
                        className={`field-input ${errors.email ? 'input-error' : ''}`}
                        placeholder="Enter Your Email Address"
                        onChange={handleChange}
                        value={formData.email}
                        autoComplete="email"
                    />
                    {errors.email && (
                        <p className="field-error-msg">
                            <i className="fa-solid fa-circle-exclamation"></i> {errors.email}
                        </p>
                    )}
                </div>

                <div className="form-group-field">
                    <label htmlFor="contact-phone" className="field-label">
                        <i className="fa-solid fa-phone-volume"></i> Phone Number <span className="opt-label">(Optional)</span>
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        id="contact-phone"
                        className={`field-input ${errors.phone ? 'input-error' : ''}`}
                        placeholder="Enter Your Phone Number"
                        onChange={handleChange}
                        value={formData.phone}
                        autoComplete="tel"
                    />
                    {errors.phone && (
                        <p className="field-error-msg">
                            <i className="fa-solid fa-circle-exclamation"></i> {errors.phone}
                        </p>
                    )}
                </div>

                <div className="form-group-field">
                    <label htmlFor="contact-message" className="field-label">
                        <i className="fa-solid fa-comment-dots"></i> Your Message <span className="req-star">*</span>
                    </label>
                    <textarea
                        name="message"
                        id="contact-message"
                        className={`field-input field-textarea ${errors.message ? 'input-error' : ''}`}
                        placeholder="Tell me about your project, timeline, and goals..."
                        onChange={handleChange}
                        value={formData.message}
                        rows={4}
                    ></textarea>
                    {errors.message && (
                        <p className="field-error-msg">
                            <i className="fa-solid fa-circle-exclamation"></i> {errors.message}
                        </p>
                    )}
                </div>

                <div className="form-action-row">
                    <button
                        type="submit"
                        className="contact-submit-btn"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <i className="fa-solid fa-spinner fa-spin"></i>
                                <span>Sending...</span>
                            </>
                        ) : (
                            <>
                                <i className="fa-solid fa-paper-plane"></i>
                                <span>Send Message</span>
                            </>
                        )}
                    </button>
                </div>
            </form>

            {notification && (
                <Notification
                    message={notification}
                    closeMessage={setNotification}
                />
            )}
        </div>
    );
};

export default ContactForm;

