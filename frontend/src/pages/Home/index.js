import React from 'react';
import Header from '../../components/Header';
import Number from '../../components/Number';
import Winners from '../../components/Winners';
import AboutBanco from '../../components/AboutBanco';
import AboutContact from '../../components/AboutContact';
import AboutCards from '../../components/AboutCards';
import Footer from '../../components/Footer';
import './styles.css';

const Home = () => {
    
    return (
        <>
            <Header />
            <Number />
            <Winners />
            <AboutBanco />
            <AboutContact />
            <AboutCards />
            <Footer />
        </>
    );
};

export default Home;
