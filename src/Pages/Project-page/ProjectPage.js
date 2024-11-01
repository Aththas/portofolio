import React, { useState } from 'react';
import Navbar from '../../Components/NavigationBar/Navbar';
import './ProjectPage.css';
import Project from '../../Components/Project-section/Project';

const ProjectPage = () => {
    const [light, setLight] = useState(false);

  return (
    <div className='container'>
        <Navbar light={light} setLight={setLight}/>
        <Project light={light} setLight={setLight}/>
    </div>
  )
}

export default ProjectPage