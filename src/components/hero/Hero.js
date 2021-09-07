import {React} from 'react'
import './hero.css'
import linkedinicon from '../../assets/linkedin-icon.png';
import githubicon from '../../assets/github-icon.png';
import resumeicon from '../../assets/resume-icon.png';
import rocketicon from '../../assets/shuttle.png';
import planeticon from '../../assets/planet.png';
import saturnicon from '../../assets/saturn.png';
import ufoicon from '../../assets/ufo.png';
import astronauticon from '../../assets/astronaut.png';
import codeicon from '../../assets/coding.png';
import gamecontrollericon from '../../assets/game-controller.png';
import pizzaicon from '../../assets/pizza-slice.png';
import ToggleSwitch from '../toggle-switch/ToggleSwitch';

function Hero(props) {   
    return (
        <section id="herosection">
            <ToggleSwitch toggle={props.toggle} nightmode={props.nightmode}/>      
            <div className="hero-container">
                <div className={`hero-title${props.nightmode ? " nightmode" : ""}`}><h1><span className={`hero-hi${props.nightmode ? " nightmode" : ""}`}>Hi. </span><span className="hero-intro">I'm Abiram.</span></h1>
                <hr className="break-one"></hr>
                </div>                
                <div className="hero-subsection">
                <div className={`hero-motto${props.nightmode ? " nightmode" : ""}`}><h4>Software Engineer</h4></div>
                <hr className={`break-two${props.nightmode ? " nightmode" : ""}`}></hr>
                <div className="hero-icons-container">
                    <a href="https://www.linkedin.com/in/abiram-nair/" target="_blank" rel="noreferrer"><img className="hero-icon" src={linkedinicon} alt=""/></a>
                    <a href="https://github.com/gearbaneseries" target="_blank" rel="noreferrer"><img className="hero-icon" src={githubicon} alt=""/></a>
                    <a href="https://drive.google.com/file/d/1F9aE_2w6uWYiuc7m7ThPYRT0J8R-bdhb/view?usp=sharing" target="_blank" rel="noreferrer"><img className="hero-icon" src={resumeicon} alt=""/></a>
                </div>
                </div>
            </div>
            <img className={`rocket-icon${props.nightmode ? " nightmode" : ""}`} src={!props.nightmode ? rocketicon : saturnicon} alt=""></img>
            <img className={`code-icon${props.nightmode ? " nightmode" : ""}`} src={!props.nightmode ? codeicon : planeticon} alt=""></img>
            <img className={`gamecontroller-icon${props.nightmode ? " nightmode" : ""}`} src={!props.nightmode ? gamecontrollericon : ufoicon} alt=""></img>
            <img className={`pizza-icon${props.nightmode ? " nightmode" : ""}`} src={!props.nightmode ? pizzaicon : astronauticon} alt=""></img>
        </section>  
    )
}

export default Hero 