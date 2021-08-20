import React, { useState } from 'react';
import './myProjects.scss';
import {data} from '../../data'

const MyProjects = () => {

    const [projects, setProjects] = useState(data)

    return (
    <div className='projects' id='myprojects'>
        <hr className='line'></hr>
        <p className='title'>Projetos: </p>
        <div className='conteiner'>
            
            {  
            projects.map( 
                p => (

                <div 
                className='projetoPreview'
                key={p.id}
                style=
                {{ 
                    backgroundImage: `url( ${p.image} )` ,
                    backgroundSize:'cover',
                    backgroundRepeat:'no-repeat'
                }}
                >

                <div 
                className='projetoInfo'>
                    <p>{p.name}</p>
                    <hr/>
                    <div className='categoriaGrid'>
                    {p.categories.map(cat => <p className='categoria'>{cat}</p>)}
                    </div>
                    <hr className='bottom'/>
                    <a href={p.link} target='_blank'  rel="noreferrer"  >Git Code</a>

                </div>

                </div>

                )
                )
            }

            
        </div>
    </div>
    )
    }

export default MyProjects 