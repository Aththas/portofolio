import React from 'react';
import './Hero.css'
import { Link } from 'react-router-dom';
import myImg from '../img/iam.png'

const Hero = ({ light, setLight }) => {
  return (
    <div className='hero-container'>
        <div className="hero-content">
            <h1>Hi I'm Aththas Rizwan</h1>
            <h3>Software Engineer</h3>
            <p>Aspiring Software Engineer with a solid foundation in Java, PHP, and JavaScript. Passionate about Web and Mobile
            Application Development, eager to contribute innovative solutions to a software team, and committed to
            continuous learning. Experienced in the full software development lifecycle, with the ability to ensure efficient,
            collaborative processes and adhere to best programming practices.</p>
            <div className="btn-box">
                <Link to="#">My Resume</Link>
                <Link to="#">Let's Talk</Link>
            </div>

            <div className="social-icons">
                <Link to="#"><i class='bx bxl-github' ></i></Link>
                <Link to="#"><i class='bx bxl-linkedin-square'></i></Link>
                <Link to="#"><i class='bx bxl-chrome'></i></Link>
            </div>

            <div className={`img-container ${!light ? 'light-off' : ''}`}>
                <img src={myImg} alt='my-image'></img>
            </div>
        </div>
        
    </div>
  )
}

export default Hero