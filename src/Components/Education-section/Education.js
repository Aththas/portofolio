import React from 'react'
import './Education.css'

const Education = ({ light, setLight }) => {
    console.log(window.innerWidth);

    // const education = [
    //     {
    //         id: "1",
    //         name: "Zahira College",
    //         year: "2018",
    //         education:"0L & AL",
    //         desription: "Tourism Website to Handle Booking for tourism related actvities  HTML | CSS | JS | PHP | MySQL | PHP Mailer",
    //     }
    //     ,
    //     {
    //         id: "2",
    //         name: "Atari",
    //         year: "2015",
    //         education:"Certification",
    //         desription: "Tourism Website to Handle Booking for tourism related actvities   HTML | CSS | JS | PHP | MySQL | PHP Mailer",
    //     }
    //     ,
    //     {
    //         id: "3",
    //         name: "NIBM",
    //         year: "2019",
    //         education:"Diploma",
    //         desription: "Tourism Website to Handle Booking for tourism related actvities    HTML | CSS | JS | PHP | MySQL | PHP Mailer",
    //     }
    //     ,
    //     {
    //         id: "4",
    //         name: "UWU",
    //         year: "2024",
    //         education:"Degree",
    //         desription: "Tourism Website to Handle Booking for tourism related actvities    HTML | CSS | JS | PHP | MySQL | PHP Mailer",
    //     }
    // ];
    

  return (
    <div className='education-container'>
        <div className="timeline">
                <div className="timeline-box">
                    <div className="text-box">
                        <h2>UWU</h2>
                        <p>OL & AL</p>
                    </div>
                    <small>2020 - 2024</small>
                    <div className="traffic">
                        <i class='bx bxs-traffic'></i>
                    </div>
                </div>

                <div className="timeline-box">
                    <div className="text-box">
                        <h2>NIBM</h2>
                        <p>OL & AL</p>
                    </div>
                    <small>2018 - 2019</small>
                    <div className="traffic">
                        <i class='bx bxs-traffic'></i>
                    </div>
                </div>

                <div className="timeline-box">
                    <div className="text-box">
                        <h2>Atari Institute</h2>
                        <p>OL & AL</p>
                    </div>
                    <small>2016 - 2017</small>
                    <div className="traffic">
                        <i class='bx bxs-traffic'></i>
                    </div>
                </div>

                <div className="timeline-box">
                    <div className="text-box">
                        <h2>Zahira College</h2>
                        <p>GCE O/L and A/L</p>
                    </div>
                    <small>2004 - 2018</small>
                    <div className="traffic">
                        <i class='bx bxs-traffic'></i>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Education