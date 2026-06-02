import React from "react"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faCartShopping, faUser, faBoxOpen, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import "../styles/Header.css"


function Header(){
    return (
        <header>
            <nav className="nav">
                <div className="menu-sup">
                    <div>
                        {/* Criar link para home */}
                        <img src="img/logoOK.png" alt="" className="logo"/>
                        <FontAwesomeIcon icon={faBoxOpen} className="caixa-pedido"/>
                    </div>
                    <div className="barra-pesquisa">
                        <input type="text" placeholder="O que você procura?"/>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="lupa"/>
                    </div>
                    <div>
                        <ul className="icones-menu">
                            <li><FontAwesomeIcon icon={faCartShopping}/></li>
                            <li><FontAwesomeIcon icon={faUser} /></li>
                        </ul>
                    </div>
                </div>
            

                <div className="menu-bot">
                    <ul>
                        <li><a href="">Colecionaveis</a></li>
                        <li><a href="">Chaveiros</a></li>
                        <li><a href="">Decorações</a></li>
                        <li><a href="">Organizadores</a></li>
                        <li><a href="">Jogos</a></li>
                        <li><a href="">Brinquedos</a></li>
                    </ul>
                </div>
                teste qualquer
            </nav>
        </header>
    )

}

export default Header