import React from 'react'
import project1 from '../../assets/project1.png';
import './project.css'
const Projects = ()=> {
  return (
    <div className='ap__projects section__padding'>
      <div className='ap__projects-header'>Our Clients</div>
        <div className='ap__projects-card'>
          <div className='ap__projects-card-content shake-vertical'>
            <img src={project1} alt='project1' />
          </div>
          <div className='ap__projects-card-content shake-vertical'>
            <img src={project1} alt='project1' />
          </div>
          <div className='ap__projects-card-content shake-vertical'>
            <img src={project1} alt='project1' />
          </div>
        </div>
        <div className='ap__projects-card'>
          <div className='ap__projects-card-content shake-vertical'>
            <img src={project1} alt='project1' />
          </div>
          <div className='ap__projects-card-content shake-vertical'>
            <img src={project1} alt='project1' />
          </div>
          <div className='ap__projects-card-content shake-vertical'>
            <img src={project1} alt='project1' />
          </div>
        </div>
    </div>
  );
}

export default Projects;