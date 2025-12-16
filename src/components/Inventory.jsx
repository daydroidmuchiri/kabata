import React, { useState } from 'react';
import TruckCard from './TruckCard';
import { inventory } from '../data/inventory';
import styles from '../styles/components.module.css';
import { generateWhatsAppLink } from '../utils/whatsapp';
import { sendLeadToGoogleSheets } from '../utils/leadTracker';

const CATEGORIES = [
    'All',
    'Dump Trucks',
    'Tractor Trucks',
    'Cargo Trucks',
    'Mixer Trucks',
    'Special Vehicles',
    'Light Trucks',
    'Semi Trailers'
];

const Inventory = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredInventory = selectedCategory === 'All'
        ? inventory
        : inventory.filter(truck => truck.category === selectedCategory);

    const handleCategoryInquiry = () => {
        const categoryName = selectedCategory === 'All' ? 'HOWO Trucks' : selectedCategory;

        // 1. Silent Log
        sendLeadToGoogleSheets({
            source: 'Category Filter',
            message: `Inquiry about ${categoryName}`,
            truck: 'N/A' // Not specific to one truck
        });

        // 2. Open WhatsApp
        const message = `Hello, I'm interested in ${categoryName} I saw on the Call Kabata HOWO Trucks website.`;
        window.open(generateWhatsAppLink(message), '_blank');
    };

    return (
        <section className={styles.section} id="inventory">
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Our Catalogue</h2>
                    <p className={styles.sectionSubtitle}>
                        Browse our full range of HOWO heavy-duty vehicles
                    </p>
                </div>

                {/* Category Tabs */}
                <div className={styles.categoryTabs}>
                    {CATEGORIES.map(category => (
                        <button
                            key={category}
                            className={`${styles.categoryTab} ${selectedCategory === category ? styles.activeTab : ''}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Category Level CTA */}
                <div className={styles.categoryCtaContainer}>
                    <p>Looking for a specific {selectedCategory === 'All' ? 'HOWO Truck' : selectedCategory}?</p>
                    <button className={styles.categoryCtaBtn} onClick={handleCategoryInquiry}>
                        Inquire about {selectedCategory === 'All' ? 'All Trucks' : selectedCategory}
                    </button>
                </div>

                <div className={styles.inventoryGrid}>
                    {filteredInventory.map((truck) => (
                        <TruckCard key={truck.id} truck={truck} />
                    ))}
                </div>

                {filteredInventory.length === 0 && (
                    <p style={{ textAlign: 'center', marginTop: '2rem', color: '#666' }}>
                        No trucks found in this category. Please contact us for custom orders.
                    </p>
                )}

            </div>
        </section>
    );
};

export default Inventory;
