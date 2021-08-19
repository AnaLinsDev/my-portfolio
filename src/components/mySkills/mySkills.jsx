import React from 'react';
import './mySkills.scss'
import {FaReact}  from "react-icons/fa";
import {SiRedux}  from "react-icons/si";
import {AiOutlineHtml5}  from "react-icons/ai";
import {SiCss3}  from "react-icons/si";
import {SiJavascript}  from "react-icons/si";
import {DiJava}  from "react-icons/di";
import {SiPython}  from "react-icons/si";
import {DiNodejs}  from "react-icons/di";
import {DiSass}  from "react-icons/di";
import {FiGithub}  from "react-icons/fi";
import {VscJson}  from "react-icons/vsc";
import {FiFigma}  from "react-icons/fi";
import {BsCheckAll}  from "react-icons/bs";


const MySkills = () => {

    return (
    <div className='skills' id='myskills'>
        <hr className='line'></hr>

        <p className='title'>Skills :</p>

        <div className='icons'>
            
        <FaReact className='icon' />
        <SiRedux className='icon' />
        <SiJavascript className='icon' />
        <DiSass className='icon'/>
        <SiCss3 className='icon' />
        <AiOutlineHtml5 className='icon' />
        <VscJson className='icon' />
        <FiFigma className='icon' />

        <DiJava className='icon' />
        <SiPython className='icon' />
        <DiNodejs className='icon' />
        <FiGithub className='icon'/>
        
        </div>
    <ul>
        <li>As skills acima estão no nível básico e intermediário</li>
        <li>Inglês Intermediário  <BsCheckAll className='icon'/></li>
    </ul>
    </div>
    )
    }

export default MySkills 