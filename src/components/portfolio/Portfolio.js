import React from 'react'
import './portfolio.css'
import geotablogo from '../../assets/geotablogo.png'
import appfabslogoletters from '../../assets/appfabslogoletters.png'

function Portfolio() {
    return (
        <section id="portfoliosection">
            <div className="portfolio-container">
                <div className="portfolio-title-container-parent">
                <div className="portfolio-title-container">
                    <h1 className="portfolio-container-title">Work <span className="portfolio-container-subtitle">Experience</span></h1>               
                </div>                
                <div className="job-container one">
                    <div>
                        <img className="geotab-logo" src={geotablogo} alt=""></img>
                        <p className="job-container-title one">
                                Software Developer Intern
                        </p>
                        <p className="job-container-date">
                            May 2021 - April 2022
                        </p>
                    </div>                    
                    <div className="job-container-information one">                        
                        <p className="job-container-blurb one">
                            Developing Intelligent Transportation Systems software with Big Data as part of the Data Visualization Team.                        </p>
                    </div>                    
                </div>
                </div>
                <div className="job-container two">
                    <div>
                        <div className="appfabs-description"><img src={appfabslogoletters} alt="" className="appfabs-logo"></img></div>
                        <p className="job-container-title two">
                            Frontend Developer Intern
                        </p>
                        <p className="job-container-date">
                            June 2020 - August 2020
                        </p>
                    </div>                    
                    <div className="job-container-information two">                    
                    <p className="job-container-blurb two">
                        Developed and modified features for small-scale static client websites.
                        Implemented and revised designs of existing company web components.
                    </p>
                    </div>
                </div>                
            </div>
        </section>
    )
}

export default Portfolio
