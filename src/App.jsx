import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Inventory from './components/Inventory';
import WhyChooseUs from './components/WhyChooseUs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <Inventory />
            <WhyChooseUs />
            <ContactForm />
            <Footer />
            <FloatingWhatsApp />
        </div>
    );
}

export default App;
