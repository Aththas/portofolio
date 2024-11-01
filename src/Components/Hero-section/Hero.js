import React, { useState, useEffect } from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
import myImg from '../img/iam.png';

const Hero = ({ light, setLight, initial }) => {
  const [displayTexts, setDisplayTexts] = useState(['', '', '']);

  useEffect(()=>{
    setLight(initial ? false:true);
  },[])
  
  useEffect(() => {
    const texts = [
      "Hi I'm Aththas Rizwan",
      "Software Engineer",
      "Aspiring Software Engineer with a solid foundation in Java, PHP, and JavaScript. Passionate about Web and Mobile Application Development, eager to contribute innovative solutions to a software team, and committed to continuous learning. Experienced in the full software development lifecycle, with the ability to ensure efficient, collaborative processes and adhere to best programming practices."
    ];

    const baseSpeed = 100; // Speed for <h1> and <h3>
    const intervals = texts.map((text, i) => {
      const typingSpeed = i === 2 ? baseSpeed * 0.1 : baseSpeed * 1.5; // 15x faster for <p> tag

      return setInterval(() => {
        setDisplayTexts((prev) => {
          const newDisplayTexts = [...prev];
          if (light) {
            newDisplayTexts[i] = text.slice(0, newDisplayTexts[i].length + 1);
          } else {
            newDisplayTexts[i] = newDisplayTexts[i].slice(0, -1);
          }
          return newDisplayTexts;
        });
      }, typingSpeed);
    });

    return () => intervals.forEach((id) => clearInterval(id));
  }, [light]);

  return (
    <div className='hero-container'>
      <div className="hero-content">
        <h1>{displayTexts[0]}</h1>
        <h3>{displayTexts[1]}</h3>
        <p>{displayTexts[2]}</p>
        <div className="btn-box">
            <Link to="#" className={light ? 'appear-second' : ''}>My Resume</Link>
            <Link to="#" className={light ? 'appear-first' : ''}>Let's Talk</Link>
        </div>

        <div className={`social-icons ${!light ? 'light-off' : ''}`}>
          <Link to="#"><i className='bx bxl-github'></i></Link>
          <Link to="#"><i className='bx bxl-linkedin-square'></i></Link>
          <Link to="#"><i className='bx bxl-chrome'></i></Link>
        </div>

        <div className={`img-container ${!light ? 'light-off' : ''}`}>
          <img src={myImg} alt='my-image'></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
