import React from 'react';
import './Project.css';

const Project = ({ light, setLight }) => {
    console.log(window.innerHeight);

    const cards = [
        {
            id: "c1",
            number: "1",
            header: "Tourism Management",
            desription: "Tourism Website to Handle Booking for tourism related actvities\n\n\nHTML | CSS | JS | PHP | MySQL | PHP Mailer",
            gitLink: "https://github.com/Aththas/tour.git"
        }
        ,
        {
            id: "c2",
            number: "2",
            header: "Saloon Management",
            desription: "Saloon Managemet System to handle online saloon booking through an application\n\n\nJava | JavaFx | MySQL | Hibernate",
            gitLink: "https://github.com/Aththas/saloon-management-system-admin-JAVAFX.git"
        }
        ,
        {
            id: "c3",
            number: "3",
            header: "Alimenta Coffe Shop",
            desription: "Website for online coffee, cake and sweets selling shop to manage online orders\n\n\nHTML | CSS | JS | PHP | MySQL | PHP Mailer",
            gitLink: "https://github.com/Aththas/Alimenta-coffee-shop.git"
        }
        ,
        {
            id: "c4",
            number: "4",
            header: "E-Library System",
            desription: "E-Library Management System with both the web application and mobile application for Mercy Education Institute, Puttalam\n\nHTML | CSS | JS | PHP | Firebase | Flutter and Dart",
            gitLink: "https://github.com/Aththas/new_oop.git"
        }
        ,
        {
            id: "c5",
            number: "5",
            header: "Accommodation Management",
            desription: "Accommodation Management System to Manage Hostels and Students/Staffs. \n\n\nReactJS | Springboot | MySQL | JWT | REST API",
            gitLink: "https://github.com/Aththas/accommodation-management-backend.git"
        }
        ,
        {
            id: "c6",
            number: "6",
            header: "Mobitel Data Management",
            desription: "Data Management System with Version Controlling, Activity Monitoring and Access Management for Mobitel (Pvt) Ltd.\n\nReactJS | Springboot | MySQL | JWT | REST API",
            gitLink: "https://github.com/Aththas/dataManagementSystemBackend.git"
        }
    ];
  return (
    <div className='project-container'>
      <div className="wrapper">
            {cards.map((card,index) => (
                <>
                <input key={index} type='radio' name='slide' id={card.id} defaultChecked={false}/>
                <label key={index} htmlFor={card.id} className={`card ${!light && 'light-off'}`}>
                    <div className="row">
                        <div className="icon">{card.number}</div>
                        <div className="description">
                            <h4>{card.header}</h4>
                            <a href={card.gitLink} target="_blank" rel="noopener noreferrer"><p>{card.desription}</p></a>
                        </div>
                    </div>
                </label>
                </>
            ))}
        </div>
    </div>
  )
}

export default Project