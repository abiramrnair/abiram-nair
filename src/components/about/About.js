import React from 'react'
import Footer from '../footer/Footer'
import './about.css'
import profilephoto from '../../assets/profile-pic.png';
import signature from '../../assets/signature.png';

function About() {
    return (
        <section id="aboutsection">
            <div className="about-container">
                <div className="about-portrait-container"></div>
                <div className="about-information">
                    <div className="about-me-title"><p className="about-me-title-text">About <span className="me-text">Me</span></p></div>
                    <div className="about-me-information-container">
                        <div className="about-me-information-one">
                            <img className="about-me-photo" src={profilephoto} alt="me"></img>
                            <div className="about-me-information-one-text">                                 
                            <p className="about-me-information">
                                I am a fourth year SWE major at Western
                                University and currently on a one year work term at GEOTAB.
                            </p>
                            <p className="about-me-information">                                
                            </p>                            
                            <p className="about-me-information">
                                When I am not coding, I enjoy reading, hiking and playing video games. 
                            </p>
                            <br></br>                                               
                            </div>                            
                        </div>
                        <div className="about-me-information-three">
                            <p className="about-me-information" id="thank-you-text">
                                Thanks for stopping by,
                            </p> 
                            <img className="about-me-signature" src={signature} alt="sign"></img> 
                        </div>                                               
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default About
