import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { ThemeContext } from '../components/ThemeContainer';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '../styles/Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    try {
      await emailjs.send(
        'service_kup3jwq',
        'template_kfaug25',
        {
          from_name: formData.name,
          from_email: formData.email, // Ensure email is included
          message: formData.message,
        },
        'Z54_ojkxoCzWt0pyX'
      );

      setFormStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setFormStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`contact ${theme}`}>
      <div className="contact-header">
        <h2>LET'S CONNECT</h2>
        <p>Say hello at <a href="mailto:chysanan@gmail.com">chysanan@gmail.com</a></p>
        <p>For more info, here's my resume:</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/sanam-chaudhary/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="icon linkedin-icon" />
          </a>
          <a href="https://github.com/SanamChudhary" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="icon github-icon" />
          </a>
        </div>
        <div className="pdf-viewer">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer fileUrl={`${process.env.PUBLIC_URL}/resume/Sanam_ChaudharyCV.pdf`} />
          </Worker>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        {formStatus.message && (
          <p className={`form-status ${formStatus.type}`}>{formStatus.message}</p>
        )}
      </form>
    </section>
  );
};

export default Contact;
