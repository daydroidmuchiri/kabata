import React, { useState } from 'react';
import styles from '../styles/components.module.css';
import { generateWhatsAppLink } from '../utils/whatsapp';
import { sendLeadToGoogleSheets } from '../utils/leadTracker';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleWhatsAppClick = (e) => {
        e.preventDefault();

        // 1. Silent Log
        sendLeadToGoogleSheets({
            source: 'Navbar',
            message: 'General Inquiry via Navbar',
            truck: 'N/A'
        });

        // 2. Open WhatsApp
        const message = "Hello, I'm interested in HOWO trucks listed on the Call Kabata HOWO Trucks website.";
        window.open(generateWhatsAppLink(message), '_blank');
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <a href="#" className={styles.logo}>
                    KABATA <span>TRUCKS</span>
                </a>

                <button className={styles.mobileMenuBtn} onClick={toggleMenu} aria-label="Toggle menu">
                    ☰
                </button>

                <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
                    <a href="#inventory" className={styles.navLink} onClick={() => setIsOpen(false)}>Catalogue</a>
                    <a href="#why-us" className={styles.navLink} onClick={() => setIsOpen(false)}>Why Us</a>
                    <a href="#contact" className={styles.navLink} onClick={() => setIsOpen(false)}>Contact</a>
                    <a
                        href="#"
                        className={styles.navCta}
                        onClick={handleWhatsAppClick}
                    >
                        <span>WhatsApp Us</span>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
