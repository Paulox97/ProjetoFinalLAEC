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
                    <li><a href="#" target="_blank">Sobre nós</a></li>
                    <li><a href="" target="_blank">Perguntas frequentes</a></li>
                    <li><a href="" target="_blank">Contato</a></li>
                    <li><a href="" target="_blank">Politica de Envios e Devoluções</a></li>
                    <li><a href="" target="_blank">Politica de Privacidade</a></li>
                </ul>
                </div>
                <div className="grow1">
                     <h3>Conteúdo</h3>
                <ul>
                    <li><a href="#" target="_blank">Estúdios Parceiros</a></li>
                    <li><a href="" target="_blank">Promoções do mês</a></li>
                    <li><a href="" target="_blank">Cenários 3D</a></li>
                </ul>
                </div>
                <div className="grow1">
                     <h3>Central de Atendimento</h3>
                <ul>
                    <li><FontAwesomeIcon icon={faWhatsapp} className="icons-fotter"/><a href="https://api.whatsapp.com/send/?phone=5542988285088&text&type=phone_number&app_absent=0" target="_blank">42 98828-5088</a></li>
                    <li><FontAwesomeIcon icon={faPhone} className="icons-fotter"/><a href="tel:+5546999417866" target="_blank">46 99941-7866</a></li>
                    <li><FontAwesomeIcon icon={faEnvelope} className="icons-fotter"/><a href="mailto:contato@3dshop.com.br" target="_blank">contato@3dshop.com.br</a></li>
                    <li><FontAwesomeIcon icon={faLocationDot} className="icons-fotter"/><a href="https://www.google.com.br/maps/place/Pato+Branco,+PR/@-26.1976145,-52.7672549,12z/data=!3m1!4b1!4m6!3m5!1s0x94e5533f62e22c55:0x74c614e61d62d7ce!8m2!3d-26.228901!4d-52.6716223!16zL20vMDR4X2gx?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D" target="_blank">Pato Branco - PR</a></li>
                </ul>
                </div>
                <div className="">
                     <h3>Permaneça conectado</h3>
                <ul>
                    <li><FontAwesomeIcon icon={faInstagram} className="icons-fotter"/><a href="https://www.instagram.com/" target="_blank">Instagram</a></li>
                    <li><FontAwesomeIcon icon={faFacebookF} className="icons-fotter"/><a href="https://www.facebook.com/?locale=pt_BR" target="_blank">Facebook</a></li>
                    <li><FontAwesomeIcon icon={faYoutube} className="icons-fotter"/><a href="https://www.youtube.com/" target="_blank">Youtube</a></li>
                    <li><FontAwesomeIcon icon={faTiktok} className="icons-fotter"/><a href="https://www.tiktok.com/pt-BR/" target="_blank">TikTok</a></li>
                    <li><FontAwesomeIcon icon={faXTwitter} className="icons-fotter"/><a href="https://x.com/?lang=pt" target="_blank">X</a></li>
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