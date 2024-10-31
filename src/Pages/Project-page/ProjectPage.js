import React, { useState } from 'react'
import Navbar from '../../Components/NavigationBar/Navbar'
import './ProjectPage.css'
import Hero from '../../Components/Hero-section/Hero';

const ProjectPage = () => {
    const [light, setLight] = useState(true);

  return (
    <div className='container'>
        <Navbar light={light} setLight={setLight}/>
        <Hero light={light} setLight={setLight}/>
    </div>
  )
}

export default ProjectPage