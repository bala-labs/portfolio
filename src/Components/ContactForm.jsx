import { useState } from "react";
import Notification from './Notification'

const initialForm = {
    name: "",
    email: "",
    phone: "",
    message: ""
}

const encode = (data) => Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");

const Form = () => {
    const [formData, setFormData] = useState(initialForm);
    const [message, setMessage] = useState('');
    const [error, setError] = useState(initialForm);

    const handleChange = (e) => {
        const {name, value} = e.target;
        error[name] && setError((error) => ({...error, [name]: ""}));
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
            if (!formData.name.trim()) setError((error) => ({...error, name: "* Name is required"}));
            if (!formData.email.trim()) setError((error) => ({...error, email: "* Email is required"}));
            if (!formData.phone.trim()) setError((error) => ({...error, phone: "* Phone Number is required"}));

            return;
        }

        if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
            setError((error) => ({...error, name: "* Invalid Name"}));
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
            setError((error) => ({...error, email: "* Invalid Email Address"}));
            return;
        }

        if (isNaN(formData.phone.trim().length) || formData.phone.trim().length !== 10) {
            setError((error) => ({...error, phone: "* Invalid Phone Number"}));
            return;
        }

        try {
            let response = await fetch("/j", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({
                    "form-name": "contact",
                    ...formData
                })
            });

            if (!response.ok) {
                throw new Error(`Request Failed. ${response.status}`);
            } 

            setMessage("You request submitted successfully.");
        } catch(err) {
            setMessage("Error Occured: Please try again later.");
            console.error(err.message);
            setError(err.message);
        }

        setFormData(initialForm);
    }

    return (
        <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" className="contact-form" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
                <label>Don't fill this out: <input name="bot-field" /></label>
            </p>
            
            <div className="form-section">
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' id='name' placeholder='Enter your name' onChange={handleChange} value={formData.name} autoComplete="true" />
                {error.name && <p className='error'>{error.name}</p>}
            </div>
            <div className="form-section">
                <label htmlFor='email'>Email:</label>
                <input type='text' name='email' id='email' placeholder='Enter your email' onChange={handleChange} value={formData.email} autoComplete="true" />
                {error.email && <p className='error'>{error.email}</p>}
            </div>
            <div className="form-section">
                <label htmlFor='phone'>Phone Number:</label>
                <input type='tel' name='phone' id='phone' placeholder='Enter your phone number' onChange={handleChange} value={formData.phone} autoComplete="true" />
                {error.phone && <p className='error'>{error.phone}</p>}
            </div>
            <div className="form-section">
                <label htmlFor='message'>Message:</label>
                <textarea name='message' id="message" placeholder="Enter your message" onChange={handleChange} value={formData.message}></textarea>
            </div>
            <div className="form-btn">
                <button type='submit'>Submit</button>
            </div>
            {message && <Notification message={message} closeMessage={setMessage} />}
        </form>
    );
}

export default Form;
