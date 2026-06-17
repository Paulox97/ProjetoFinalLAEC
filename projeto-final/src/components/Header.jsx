import React from "react"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faCartShopping, faUser, faBoxOpen, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import "../styles/Header.css"


function Header() {
    return (
        <header>
            <nav className="nav">
                <div className="menus">
                    <div className="menu-sup">
                        <div className="logo-pedido">
                            <Link to="/"><img src="../img/logo.png" alt="" className="logo"/></Link>
                        </div>
                        <div className="barra-pesquisa">
                            <input type="text" placeholder="O que você procura?" />
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="lupa" />
                        </div>
                        <div>
                            <ul className="icones-menu">
                                <li><Link to="/carrinho"><FontAwesomeIcon icon={faCartShopping}/></Link></li>
                                <li><Link to="/login"><FontAwesomeIcon icon={faUser} /></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="menu-bot">
                        <ul>
                            <li><a href="">Colecionaveis</a></li>
                            <li><a href="">Chaveiros</a></li>
                            <li><a href="">Decorações</a></li>
                            <li><a href="">Organizadores</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )

}

export default Header