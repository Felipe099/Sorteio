import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { BsTelephone } from 'react-icons/bs';

import './styles.css';

const AboutContact = () => {
    return (
        <>
            <section className="section" id="contact">
                <div className="container grid">
                    <div className="text">
                        <h2 className="title">
                            {' '}
                            Entre em contato com a gente!{' '}
                        </h2>
                        <p>
                            Após ter feito a escolha sua cota, entre em contato
                            com a MárioPremiações para enviar o comprovante de
                            pagamento, pois só será validada a cota por meio do
                            comprovante enviado.
                        </p>
                        <a
                            href="https://api.whatsapp.com/send?phone=+557998037467&text=Oi! Já quero garantir meu bilhete!"
                            className="button"
                            target="_blank"
                        >
                            <i className="icon-whatsapp">
                                <FaWhatsapp />
                            </i>
                            {'Entrar em contato'}
                        </a>
                    </div>
                    <div className="links">
                        <ul className="grid">
                            <li>
                                <i className="icon-phone">
                                    <BsTelephone />
                                </i>
                                {'79 998037467'}
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className="divider-2"></div>
        </>
    );
};
export default AboutContact;
