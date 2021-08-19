import React from 'react';
import './portfolio.scss';

import AboutMe from '../../components/aboutMe/aboutMe';
import MySkills from '../../components/mySkills/mySkills';
import MyProjects from '../../components/myProjects/myProjects';


const PortfolioPage = () => {
    return (
    <div className='portfolio'>

        < AboutMe    />
        < MySkills   />
        < MyProjects />

    </div>
    )
    }

export default PortfolioPage