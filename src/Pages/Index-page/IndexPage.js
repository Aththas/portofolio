import React, { useState } from 'react'
import Navbar from '../../Components/NavigationBar/Navbar'
import './IndexPage.css'
import Hero from '../../Components/Hero-section/Hero';

const IndexPage = () => {
    const [light, setLight] = useState(false);

  return (
    <div className='container'>
        <Navbar light={light} setLight={setLight}/>
        <Hero light={light} setLight={setLight}/>
    </div>
  )
}

export default IndexPage