import React, { useState } from 'react';
import styles from '../styles/components.module.css';
import { generateWhatsAppLink } from '../utils/whatsapp';
import { sendLeadToGoogleSheets } from '../utils/leadTracker';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '', // Keeping email optional/backup
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 1. Silent Log
        sendLeadToGoogleSheets({
            source: 'Contact Form',
            name: formData.name,
            phone: formData.phone,
            message: formData.message,
            truck: 'N/A'
        });

        // 2. Open WhatsApp
        const message = `Name: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
        window.open(generateWhatsAppLink(message), '_blank');

        // Reset
        setFormData({ name: '', phone: '', email: '', message: '' });
    };

    return (
        <section className={styles.section} id="contact">
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Get in Touch</h2>
                    <p className={styles.sectionSubtitle}>
                        Have questions about a truck? We're here to help.
                    </p>
                </div>

                <div className={styles.contactContainer}>
                    <div className={styles.contactInfo}>
                        <h3>Contact Us Directly</h3>
                        <p className={styles.contactText}>
                            Reach us via WhatsApp for instant responses or call us directly.
                        </p>

                        <a
                            href="#"
                            className={styles.whatsappLarge}
                            onClick={(e) => {
                                e.preventDefault();
                                sendLeadToGoogleSheets({ source: 'Contact Section - Big Button', message: 'Direct WhatsApp Click', truck: 'N/A' });
                                window.open(generateWhatsAppLink("I'd like to make an inquiry."), '_blank');
                            }}
                        >
                            <span>WhatsApp Us: +254 704 264 411</span>
                        </a>

                        <div className={styles.contactDetails}>
                            <p><strong>Email:</strong> sales@kabatatrucks.co.ke</p>
                            <p><strong>Location:</strong> Mombasa Road, Nairobi, Kenya</p>
                            <p><strong>Working Hours:</strong> Mon - Sat: 8am - 6pm</p>
                        </div>

                        <div className={styles.socialMedia}>
                            <h4 style={{ marginBottom: '0.5rem', marginTop: '1.5rem', color: '#0a192f' }}>Connect with us:</h4>
                            <div style={{ display: 'flex', gap: '1rem', fontSize: '1.5rem' }}>
                                <a href="https://facebook.com/kabatatrucks" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: '#1877F2' }}>
                                    <i className="fa-brands fa-facebook"></i> FB
                                </a>
                                <a href="https://instagram.com/kabatatrucks" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: '#E4405F' }}>
                                    <i className="fa-brands fa-instagram"></i> IG
                                </a>
                                <a href="https://tiktok.com/@kabatatrucks" target="_blank" rel="noopener noreferrer" aria-label="TikTok" style={{ color: '#000000' }}>
                                    <i className="fa-brands fa-tiktok"></i> TT
                                </a>
                            </div>
                        </div>
                    </div>
                    <form className={styles.contactForm} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.formLabel}>Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className={styles.formInput}
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="phone" className={styles.formLabel}>Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className={styles.formInput}
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Email is optional for WhatsApp flow, but good for backup data */}
                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.formLabel}>Email Address (Optional)</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={styles.formInput}
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.formLabel}>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className={styles.formTextarea}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="I'm interested in the HOWO Dump Truck..."
                            ></textarea>
                        </div>

                        <button type="submit" className={styles.submitBtn}>
                            Continue on WhatsApp
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
