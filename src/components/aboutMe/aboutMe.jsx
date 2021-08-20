import React from 'react';
import './aboutMe.scss'
import meImage from '../../images/me.png'
import {FaInstagram}  from "react-icons/fa";
import {FaWhatsapp}  from "react-icons/fa";
import {FaLinkedin}  from "react-icons/fa";
import {FaGithub}  from "react-icons/fa";

const AboutMe = () => {

    return (
    <div className='aboutMe' id='aboutme'>

        <div className='descricao'>

        <h1>Ana Júlia Oliveira Lins</h1>
        Olá, meu nome é Ana Júlia, estou cursando Sistemas para Internet na Instituição Federal da Paraíba (IFPB), ainda não tenho experiências do mercado de software, porém uso do meu tempo para desenvolver projetos próprios e, assim, treinar e melhorar as ideias adquiridas em sala de aula, minicursos e cursos online, especialmente no desenvolvimento  Front end.
        <br/> <br/>
        O que mais me atrai na área são as várias formas de resolver um problema e as infinidades de produtos úteis e agradáveis que podem ser gerados apenas com o uso de um computador e do cérebro.
        <br/> <br/>
        <FaWhatsapp />  ( 83 ) 98640 - 4550 
        <br/> <br/>

        <div className='social'>
            <a href='https://www.instagram.com/ana_frontdev/' target='_blank'  rel="noreferrer" >
                <FaInstagram  className='icon'/> 
            </a>
            
            <a href='https://www.linkedin.com/in/ana-j%C3%BAlia-lins-devbrasil/' target='_blank' rel="noreferrer"  >
            <FaLinkedin className='icon'/>
            </a>
            <a href='https://github.com/AnaLinsDev' target='_blank'  rel="noreferrer" >
            <FaGithub className='icon'/>
            </a>
        </div>
        </div>

        <img src={meImage} alt='minha foto'/>
    </div>
    )
    }

export default AboutMe 