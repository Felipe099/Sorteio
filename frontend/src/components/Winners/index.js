import React from 'react';
import './styles.css';

const Winners = () => {
    return (
        <section className="section" id="winners">
            <div className="text">
                <h2 className="title"> Lista de Ganhadores </h2>
            </div>
            <a href="#abrirModal">Surpresa</a>
            <div id="abrirModal" className="modal">
                <a href="#fechar" title="Fechar" className="fechar">
                    x
                </a>

                <form action="" method="POST" className="form">
                    <div className="nome">
                        <input type="text" name="nome" placeholder="Nome" />
                    </div>
                    <div className="contato">
                        <input
                            type="text"
                            name="contato"
                            placeholder="Contato"
                        />
                    </div>
                    <div className="email">
                        <input type="email" name="email" placeholder="Email" />
                    </div>
                    <div className="button1">
                        <input type="submit" name="enviar" value="Enviar" />
                    </div>
                </form>
            </div>
            {/* <div className="divider-1"></div> */}
        </section>
    );
};

export default Winners;
