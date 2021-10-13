import React from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

import './styles.css';

const Header = () => {
    return (
        <header id="header">
            <nav className="container">
                <div className="caixa">
                    {/* <img src=""/> */}
                    <a className="logo" href="#">
                        Mário<span>Premiações</span>
                    </a>
                </div>

                <div className="menu">
                    <ul className="grid">
                        <li>
                            <a className="title" href="#home">
                                Sorteio
                            </a>
                        </li>
                        <li>
                            <a className="title" href="#winners">
                                Ganhadores
                            </a>
                        </li>
                        <li>
                            <a className="title" href="#about">
                                Bancos
                            </a>
                        </li>
                        <li>
                            <a className="title" href="#contact">
                                Contato
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="toggle icon-menu">
                    <BiMenuAltRight />
                </div>

                <div className="toggle icon-close">
                    <AiOutlineClose />
                </div>
            </nav>
        </header>
    );
};

export default Header;
