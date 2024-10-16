/* eslint-disable no-undef */
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import Alert from '../components/Alert.jsx'; // alert component
import useAlert from '../hooks/useAlert.js'; // assuming this hook exists

const Contact = () => {
    const formRef = useRef();
    const { alert, showAlert, hideAlert } = useAlert(); // useAlert hook for managing alerts
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,  // Service ID from .env
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Template ID from .env
            {
                from_name: form.name,
                to_name: 'Sparsh',
                from_email: form.email,
                to_email: 'arsh262002@gmail.com',
                message: form.message,
            },
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY    // Public Key from .env
        )
            .then(
                () => {
                    setLoading(false);
                    showAlert({
                        show: true,
                        text: 'Thank you for your message 😃',
                        type: 'success',
                    });

                    setTimeout(() => {
                        hideAlert(); // Hide alert after 3 seconds
                        setForm({ name: '', email: '', message: '' }); // Reset form
                    }, 3000);
                },
                (error) => {
                    setLoading(false);
                    console.error(error);
                    showAlert({
                        show: true,
                        text: "I didn't receive your message 😢",
                        type: 'danger',
                    });
                }
            );
    };

    return (
        <section className="c-space my-20" id="contact">
            {alert.show && <Alert {...alert} />} {/* Render the alert conditionally */}

            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />

                <div className="contact-container">
                    <h3 className="head-text mt-10"> Let's talk</h3>
                    <p className="text-lg text-white-600 mt-3">
                        Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to life, I’m here to help.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="ex., John Doe"
                                disabled={loading}
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Email address</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="ex., johndoe@gmail.com"
                                disabled={loading}
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Your message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Share your thoughts or inquiries..."
                                disabled={loading}
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
