import React from "react"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp, faInstagram, faFacebookF, faYoutube, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import "../styles/Footer.css"

function Footer() {
    return (
        <footer>
            <div className="footer-rodape">
                <div className="grow1">
                     <h3>Institucional</h3>
                <ul>
                    <li><a href="#">Sobre nós</a></li>
                    <li><a href="">Perguntas frequentes</a></li>
                    <li><a href="">Contato</a></li>
                    <li><a href="">Politica de Envios e Devoluções</a></li>
                </ul>
                </div>
                <div className="grow1">
                     <h3>Conteúdo</h3>
                <ul>
                    <li><a href="#">Estúdios Parceiros</a></li>
                    <li><a href="">Promoções do mês</a></li>
                    <li><a href="">Cenários 3D</a></li>
                </ul>
                </div>
                <div className="grow1">
                     <h3>Central de Atendimento</h3>
                <ul>
                    <li><FontAwesomeIcon icon={faWhatsapp}/><a href="https://api.whatsapp.com/send/?phone=5542988285088&text&type=phone_number&app_absent=0">42 98828-5088</a></li>
                    <li><FontAwesomeIcon icon={faPhone} /><a href="">46 99941-7866</a></li>
                    <li><FontAwesomeIcon icon={faEnvelope} /><a href="">contato@3dshop.com.br</a></li>
                    <li><FontAwesomeIcon icon={faLocationDot} /><a href="">Pato Branco - PR</a></li>
                </ul>
                </div>
                <div className="">
                     <h3>Permaneça conectado</h3>
                <ul>
                    <li><FontAwesomeIcon icon={faInstagram}/><a href="#">Instagram</a></li>
                    <li><FontAwesomeIcon icon={faFacebookF} /><a href="">Facebook</a></li>
                    <li><FontAwesomeIcon icon={faYoutube} /><a href="">Youtube</a></li>
                    <li><FontAwesomeIcon icon={faTiktok} /><a href="">TikTok</a></li>
                    <li><FontAwesomeIcon icon={faXTwitter} /><a href="">X</a></li>
                </ul>
                </div>
            </div>
            <div className="footer-autorais">
                <p>© Copyright - Linguagens de Estruturação e Apresentação de Conteúdo</p>
                <p>Curso de Tecnologia em Análise e Desenvolvimento de Sistemas - UTFPR-PB</p>
            </div>
        </footer>
    )
}

export default Footer