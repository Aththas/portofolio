import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
import myImg from '../img/iam.png';

const Hero = ({ light, setLight, initial }) => {
  const [displayTexts, setDisplayTexts] = useState(['', '', '']);
  const [isDelete, setIsDelete] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const inputRef = useRef(null);

    const handleClick = (e) => {
        e.preventDefault();
        if (!isDelete) {
            setIsDelete(true);
            setTimeout(() => {
                setIsDelete(false);
            }, 3200);
        }
    };

    const handleFormSubmit = (e) => {
      e.preventDefault();
      setIsSubmitted(true);
    };
  
    const handleDocumentClick = (e) => {
      if (inputRef.current && (inputRef.current.contains(e.target) || e.target === inputRef.current)) {
        return;
      }
      if (e.target.closest('.donate')) {
        if (!isSubmitted) {
          if (isOpen) {
            setIsSubmitted(true);
          } else {
            setIsOpen(true);
            setTimeout(() => {
              inputRef.current.focus();
              inputRef.current.selectionStart = inputRef.current.selectionEnd = 10000; // Focus input
            }, 0);
          }
        }
        return;
      }
      if (!isSubmitted) {
        setIsOpen(false);
      }
    };
  
    React.useEffect(() => {
      document.addEventListener('click', handleDocumentClick);
      return () => {
        document.removeEventListener('click', handleDocumentClick);
      };
    }, [isSubmitted, isOpen]);


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
        {/* <div className="btn-box">
            <Link to="#" className={light ? 'appear-second' : ''}>My Resume</Link>
            <Link to="#" className={light ? 'appear-first' : ''}>Let's Talk</Link>
        </div> */}
      <div className="btn-box">
        <button className={`${light ? 'appear-btn' : 'disappear-btn'} button ${isDelete ? 'delete' : ''}`} 
            onClick={handleClick}>
            <div className="trash">
                <div className="top">
                    <div className="paper"></div>
                </div>
                <div className="box"></div>
                <div className="check">
                    <svg viewBox="0 0 8 6">
                        <polyline points="1 3.4 2.71428571 5 7 1"></polyline>
                    </svg>
                </div>
            </div>
            <span>Download CV</span>
        </button>
        <div className={`${light ? 'appear-btn' : 'disappear-btn'} donate ${isOpen ? 'open' : ''} ${isSubmitted ? 'submit' : ''}`}>
          <div className="thanks">Thank you!</div>
          <button>
            <div className="top"></div>
            <div className="inside">
              <form onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  ref={inputRef}
                />
              </form>
            </div>
            <span>
              <svg viewBox="0 0 24 24">
                <path d="M20 2H4a2 2 0 0 0-2 2v16l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM4 16V4h16v10H6l-2 2z" />
              </svg>
              Quick Chat
            </span>
          </button>
        </div>
      </div>

        <div className={`social-icons ${!light ? 'light-off' : ''}`}>
          <Link to="#" className='github'><i class="fa-brands fa-github icon1 icon"></i></Link>
          <Link to="#" className='linkedin'><i class="fa-brands fa-linkedin icon2 icon"></i></Link>
          <Link to="#" className='insta'><i class="fa-brands fa-instagram icon3 icon"></i></Link>
        </div>

        <div className={`img-container ${!light ? 'light-off' : ''}`}>
          <img src={myImg} alt='my-image'></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
