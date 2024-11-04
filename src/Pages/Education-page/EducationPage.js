import React, { useState } from 'react'
import './EducationPage.css'
import Navbar from '../../Components/NavigationBar/Navbar';
import Education from '../../Components/Education-section/Education';

const EducationPage = () => {
    const [light, setLight] = useState(false);

    return (
      <div className='container'>
          <Navbar light={light} setLight={setLight}/>
          <Education light={light} setLight={setLight}/>
      </div>
    )
}

export default EducationPage