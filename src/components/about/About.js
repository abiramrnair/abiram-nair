import React from 'react'
import './about.css'
import profilephoto from '../../assets/profile-pic.jpg';
import laptopicon from '../../assets/laptop-icon.png';
import linkedinicon from '../../assets/linkedin-icon.png';
import githubicon from '../../assets/github-icon.png';
import resumeicon from '../../assets/resume-icon.png';

function About() {
    return (
        <section id="aboutsection">
            <div className="about-container">
                <div className="about-portrait-container"></div>
                <div className="about-information">
                    <div className="about-me-title"><p className="about-me-title-text">About <span className="me-text">Me</span></p></div>
                    <div className="about-me-information-container">
                        <div className="about-me-information-one">
                            <div className="about-me-information-socials">
                                <img className="about-me-photo" src={profilephoto} alt="me"></img>
                                <div className="socials-container">
                                    Reach out any time.
                                    <img className="laptop-icon" src={laptopicon} alt=""></img> 
                                    abiramrnair@gmail.com                                           
                                </div>
                            </div>                            
                            <div className="about-me-information-one-text">                                 
                            <p className="about-me-information">
                                I am a fourth year SWE major at Western
                                University with a passion for data science and machine learning. Whether
                                it's a new tech stack or some obscure skill, I love self learning 
                                and will seize every opportunity to better myself.
                            </p>                                                       
                            <p className="about-me-information">
                                When I am not coding, I enjoy reading epic fantasies, hiking and playing video games.
                            </p>
                            <br></br>                                               
                            </div>                            
                        </div>
                        <div className="about-me-information-three">
                            <p className="about-me-information" id="thank-you-text">
                                Thanks for stopping by!
                            </p>
                            <div className="hero-icons-container about-icons">
                                        <a href="https://www.linkedin.com/in/abiram-nair/" target="_blank" rel="noreferrer"><img className="hero-icon about-icon" src={linkedinicon} alt=""/></a>
                                        <a href="https://github.com/gearbaneseries" target="_blank" rel="noreferrer"><img className="hero-icon about-icon" src={githubicon} alt=""/></a>
                                        <a href="https://drive.google.com/file/d/1F9aE_2w6uWYiuc7m7ThPYRT0J8R-bdhb/view?usp=sharing" target="_blank" rel="noreferrer"><img className="hero-icon about-icon" src={resumeicon} alt=""/></a>
                            </div> 
                        </div>                                               
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
