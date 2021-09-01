import React from 'react'
import './footer.css'
import linkedinminiicon from '../../assets/linkedin-mini-icon.png';
import githubminiicon from '../../assets/github-mini-icon.png';
import resumeminiicon from '../../assets/resume-mini-icon.png';

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-media-icons">
                <a href="https://www.linkedin.com/in/abiram-nair/" target="_blank" rel="noreferrer"><img className="footer-icon" src={linkedinminiicon} alt=""/></a>
                <a href="https://github.com/gearbaneseries" target="_blank" rel="noreferrer"><img className="footer-icon" src={githubminiicon} alt=""/></a>
                <a href="https://drive.google.com/file/d/1F9aE_2w6uWYiuc7m7ThPYRT0J8R-bdhb/view?usp=sharing" target="_blank" rel="noreferrer"><img className="footer-icon" src={resumeminiicon} alt=""/></a>
            </div>
        </div>
    )
}

export default Footer
