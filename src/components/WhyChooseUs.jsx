import React from 'react';
import styles from '../styles/components.module.css';

const WhyChooseUs = () => {
    const features = [
        {
            title: 'Genuine Quality',
            description: 'We supply only authentic, factory-direct HOWO trucks tailored for rugged environments.',
            icon: '🛡️'
        },
        {
            title: 'Competitive Pricing',
            description: 'Get the best market rates with transparent pricing and no hidden costs.',
            icon: '💰'
        },
        {
            title: 'After-Sales Support',
            description: 'Our relationship doesn\'t end at the sale. We provide guidance on maintenance and parts.',
            icon: '🔧'
        },
        {
            title: 'Financing Guidance',
            description: 'We assist you in navigating financing options to get your fleet moving faster.',
            icon: '🤝'
        }
    ];

    return (
        <section className={`${styles.section} ${styles.sectionDark}`} id="why-us">
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Why Choose Kabata Trucks?</h2>
                    <p className={styles.sectionSubtitle}>
                        Your trusted partner in heavy-duty logistics and construction
                    </p>
                </div>

                <div className={styles.featuresGrid}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.featureCard}>
                            <div className={styles.featureIcon}>{feature.icon}</div>
                            <h3 className={styles.featureTitle}>{feature.title}</h3>
                            <p className={styles.featureDesc}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
