import React from 'react';
import styles from '../styles/components.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerGrid}>
                    <div className={styles.footerBrand}>
                        <h3>KABATA TRUCKS</h3>
                        <p style={{ color: 'rgba(255,255,255,0.7)' }}>
                            Your reliable partner for heavy-duty HOWO trucks in Kenya.
                            Quality, durability, and service you can trust.
                        </p>
                    </div>

                    <div className={styles.footerLinks}>
                        <h4 style={{ marginBottom: '1rem' }}>Quick Links</h4>
                        <a href="#home" className={styles.footerLink}>Home</a>
                        <a href="#inventory" className={styles.footerLink}>Inventory</a>
                        <a href="#why-us" className={styles.footerLink}>Why Choose Us</a>
                        <a href="#contact" className={styles.footerLink}>Contact</a>
                    </div>

                    <div className={styles.footerContact}>
                        <h4 style={{ marginBottom: '1rem' }}>Contact Info</h4>
                        <a href="tel:+254704264411" className={styles.footerLink}>+254 704 264 411</a>
                        <a href="mailto:sales@kabatatrucks.co.ke" className={styles.footerLink}>sales@kabatatrucks.co.ke</a>
                        <p className={styles.footerLink}>Mombasa Road, Nairobi</p>
                    </div>
                </div>

                <div className={styles.copyright}>
                    <p>&copy; {new Date().getFullYear()} Call Kabata HOWO Trucks. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
