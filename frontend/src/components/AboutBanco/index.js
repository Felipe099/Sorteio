import React, { useState } from 'react';
import bb from '../../ASSETS/images/bb.jpg';
import mercado_pago from '../../ASSETS/images/mercado_pago.jpg';
import caixa from '../../ASSETS/images/caixa.jpg';
import pix from '../../ASSETS/images/pix.jpg';
import inter from '../../ASSETS/images/inter.png';
import picpay from '../../ASSETS/images/picpay.jpg';
import c6_banck from '../../ASSETS/images/c6_bank.jpg';
import qr_code from '../../ASSETS/images/qr_code.jpeg';

import './styles.css';
import { active } from 'promise-inflight';

const AboutBanco = () => {
    const [BBisActive, BBsetActive] = useState(false);
    const [MPisActive, MPsetActive] = useState(false);
    const [CAIXAisActive, CAIXAsetActive] = useState(false);
    const [PIXisActive, PIXsetActive] = useState(false);
    const [INTERisActive, INTERsetActive] = useState(false);
    const [PPisActive, PPsetActive] = useState(false);
    const [C6isActive, C6setActive] = useState(false);

    return (
        <>
            <section className="section" id="about">
                <h2 className="title">Bancos</h2>

                <div className="bank">
                    <div className="accordion">
                        <div
                            className={
                                BBisActive ? 'contentBx active' : 'contentBx'
                            }
                            onClick={() => {
                                BBsetActive(!BBisActive);
                            }}
                        >
                            <div className="label">
                                <img src={bb} alt="foto o banco do brasil" />
                            </div>
                            <div className="content">
                                <p>Banco do Brasil</p>
                                <p>Titular: Mario Batista</p>
                                <p>Agência: 1402-8</p>
                                <p>Conta:62.199-4</p>
                                <p>Variação-96</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion">
                        <div
                            className={
                                MPisActive ? 'contentBx active' : 'contentBx'
                            }
                            onClick={() => {
                                MPsetActive(!MPisActive);
                            }}
                        >
                            <div className="label">
                                <img
                                    src={mercado_pago}
                                    alt="foto do mercado_pago"
                                />
                            </div>
                            <div className="content">
                                <p>Mercado Pago</p>
                                <p>Titular: Mario Batista</p>
                                <p>Agência: 0001</p>
                                <p>Conta: 2224583306-0</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion">
                        <div
                            className={
                                CAIXAisActive ? 'contentBx active' : 'contentBx'
                            }
                            onClick={() => {
                                CAIXAsetActive(!CAIXAisActive);
                            }}
                        >
                            <div className="label">
                                <img src={caixa} alt="foto da caixa" />
                            </div>
                            <div className="content">
                                <p>Caixa Econômica </p>
                                <p>Titular: Mario Batista</p>
                                <p>Agência: 1733 </p>
                                <p>Conta: 169959-8</p>
                                <p>Operação: 013</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion">
                        <div
                            className={
                                PIXisActive ? 'contentBx active' : 'contentBx'
                            }
                            onClick={() => {
                                PIXsetActive(!PIXisActive);
                            }}
                        >
                            <div className="label">
                                <img src={pix} alt="foto do nubank" />
                            </div>
                            <div className="content">
                                <p>
                                    1. Abra o leitor Qr Code no app do seu banco
                                </p>
                                <p>
                                    2. Aponte para o Qr Code do site para ler o
                                    código
                                </p>
                                <div>
                                    <img
                                        className="qr_code"
                                        src={qr_code}
                                        alt="qr_code"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion">
                        <div
                            className={
                                INTERisActive ? 'contentBx active' : 'contentBx'
                            }
                            onClick={() => {
                                INTERsetActive(!INTERisActive);
                            }}
                        >
                            <div className="label">
                                <img src={inter} alt="foto do inter" />
                            </div>
                            <div className="content">
                                <p>Banco Inter</p>
                                <p>Titular: Mario Batista</p>
                                <p>Agência:0001</p>
                                <p>Conta: 14018409-0</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion">
                        <div
                            className={
                                PPisActive ? 'contentBx active' : 'contentBx'
                            }
                            onClick={() => {
                                PPsetActive(!PPisActive);
                            }}
                        >
                            <div className="label">
                                <img src={picpay} alt="foto do picpay" />
                            </div>
                            <div className="content">
                                <p>PicPay</p>
                                <p>Titular: Mario Batista</p>
                                <p>Banco: 380</p>
                                <p>Conta: 51285274-0</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion">
                        <div
                            className={
                                C6isActive ? 'contentBx active' : 'contentBx'
                            }
                            onClick={() => {
                                C6setActive(!C6isActive);
                            }}
                        >
                            <div className="label">
                                <img src={c6_banck} alt="foto do c6_bank" />
                            </div>
                            <div className="content">
                                <p> Banco C6</p>
                                <p>Titular: Mario Batista</p>
                                <p>Banco: 336</p>
                                <p>Agência: 0001</p>
                                <p>Conta: 7924944-2</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutBanco;
