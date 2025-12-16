import React from 'react';
import styles from '../styles/components.module.css';
import heroBg from '../assets/hero-background.png';
import { generateWhatsAppLink } from '../utils/whatsapp';
import { sendLeadToGoogleSheets } from '../utils/leadTracker';

const Hero = () => {
    const handleWhatsAppClick = (e) => {
        e.preventDefault();

        // 1. Silent Log
        sendLeadToGoogleSheets({
            source: 'Hero Section',
            message: 'General Inquiry via Hero Section',
            truck: 'N/A'
        });

        // 2. Open WhatsApp
        const message = "Hello, I'm interested in HOWO trucks listed on the Call Kabata HOWO Trucks website.";
        window.open(generateWhatsAppLink(message), '_blank');
    };

    return (
        <div className={styles.hero} id="home">
            <div className={styles.heroOverlay}></div>
            <img src={heroBg} alt="HOWO Truck Hero" className={styles.heroBackground} />

            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>Reliable HOWO Trucks for Heavy-Duty Work</h1>
                <p className={styles.heroSubtext}>
                    Trusted dealer of HOWO dump trucks, tractor heads, and mixer trucks.
                    Built for performance and durability.
                </p>

                <div className={styles.heroButtons}>
                    <a href="#inventory" className={styles.btnPrimary}>
                        View Inventory
                    </a>
                    <a
                        href="#"
                        className={styles.btnOutline}
                        onClick={handleWhatsAppClick}
                    >
                        WhatsApp Us
                    </a>
                </div>

                <div className={styles.trustBadge}>
                    Heavy Duty • Reliable • Affordable
                </div>
            </div>
        </div>
    );
};

export default Hero;
