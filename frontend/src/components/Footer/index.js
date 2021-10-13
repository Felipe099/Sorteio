import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import './styles.css';

const Footer = () => {
    return (
        <>
            <footer className="section">
                <div className="container grid">
                    <div className="brand">
                        <p>©2021 MárioPremiações.</p>
                        <p>Todos os direitos reservados.</p>
                    </div>

                    <div className="social">
                        <a
                            href="https://www.instagram.com/feliipe_torres07/"
                            target="_blank"
                        >
                            <i className="icon-instagram">
                                {'Desenvolvido e Criado por Felipe Torres '}
                                <FiInstagram />
                            </i>
                        </a>
                        <a
                            href="https://www.instagram.com/pdanniiel/"
                            target="_blank"
                        >
                            <i className="icon-instagram">
                                {'Arte de Paulo Daniel '}
                                <FiInstagram />
                            </i>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
