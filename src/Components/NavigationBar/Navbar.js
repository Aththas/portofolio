import React, { useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb as fasLightbulb } from '@fortawesome/free-solid-svg-icons';


const Navbar = ({ light, setLight }) => {
    
    useEffect(() => {
        document.body.style.overflow = light ? 'auto' : 'hidden';
    },[light]);

  return (
    <div className={`navbar-container ${!light && 'hidden'}`}>
        
        <div className={`name ${!light && 'hidden'}`}>
            <h1 className={!light ? 'hidden':'header'}>Aththas Rizwan</h1>
        </div>
        <ul>
            <li className={!light ? 'hidden':''}><Link to="/home">Home</Link></li>
            <li className={!light ? 'hidden':''}><Link to="/project">Projects</Link></li>
            <li className={!light ? 'hidden':''}><Link to="/about">About</Link></li>
            <li className={!light ? 'hidden':''}><Link to="/contact">Contact</Link></li>
            <li className={!light ? 'hidden':''}><Link to="/experience">Experience</Link></li>
            {light && (
                <div className='span' ></div>
            )}
        </ul>
        <div className="light">
                <FontAwesomeIcon icon={fasLightbulb} className={light ? 'bulb-on' : 'bulb-off'} onClick={() => setLight((cur) => !cur)}/>
        </div>
    </div>
  )
}

export default Navbar