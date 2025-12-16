import React from 'react';
import styles from '../styles/components.module.css';
import { generateWhatsAppLink } from '../utils/whatsapp';
import { sendLeadToGoogleSheets } from '../utils/leadTracker';

const TruckCard = ({ truck }) => {
    const handleInquiry = (e) => {
        e.preventDefault();

        // 1. Silent Log
        sendLeadToGoogleSheets({
            source: 'Inventory Card',
            message: `Inquiry for ${truck.model}`,
            truck: truck.model
        });

        // 2. Open WhatsApp
        const message = `I am interested in the ${truck.model}. Please send me more details and pricing.`;
        window.open(generateWhatsAppLink(message), '_blank');
    };

    return (
        <div className={styles.truckCard}>
            <img src={truck.image} alt={truck.model} className={styles.cardImage} />
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{truck.model}</h3>
                <p className={styles.cardDesc}>{truck.description}</p>

                <div className={styles.specsList}>
                    {truck.specs.map((spec, index) => (
                        <span key={index} className={styles.specTag}>
                            {spec}
                        </span>
                    ))}
                </div>

                <a
                    href="#"
                    className={styles.cardBtn}
                    onClick={handleInquiry}
                >
                    Inquire on WhatsApp
                </a>
            </div>
        </div>
    );
};

export default TruckCard;
