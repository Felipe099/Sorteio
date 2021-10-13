import React from 'react';
import './styles.css';

const AboutCards = () => {
    return (
        <>
            <section className="section" id="cards">
                <div className="number">
                    <div className="format">
                        <div className="test">
                            <div className="numero">1</div>
                            <div className="title">🔍 Escolha o sorteio</div>
                            <div className="text">
                                Verifique a descrição, regulamento do sorteio e
                                fotos em caso de dúvidas entre em contato com o
                                administrador
                            </div>
                        </div>
                    </div>

                    <div className="format">
                        <div className="test">
                            <div className="numero">2</div>
                            <div className="title">🔢 Selecione os números</div>
                            <div className="text">
                                Você pode escolher quantos números desejar! Mais
                                números, mais chances de ganhar
                            </div>
                        </div>
                    </div>

                    <div className="format">
                        <div className="test">
                            <div className="numero">3</div>
                            <div className="title">🏦 Faça o pagamento</div>
                            <div className="text">
                                Faça o pagamento via transferência bancária.
                                Envie o comprovante da transferência ao
                                administrador via whatsapp.
                            </div>
                        </div>
                    </div>

                    <div className="format">
                        <div className="test">
                            <div className="numero">4</div>
                            <div className="title">🤞 Aguarde o sorteio</div>
                            <div className="text">
                                Cruze os dedos. Você pode ser o próximo sorteado
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="divider-1"></div>
        </>
    );
};
export default AboutCards;
