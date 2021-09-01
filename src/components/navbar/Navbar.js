import React from 'react'
import './navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <div className="nav-items">
                <a href="#herosection" className="nav-link"><p className="nav-link-text herosection active">Home</p></a>
                <a href="#portfoliosection" className="nav-link"><p className="nav-link-text portfoliosection">Portfolio</p></a>
                <a href="#aboutsection" className="nav-link"><p className="nav-link-text aboutsection">About</p></a>
            </div>
        </div>
    )
}

const sections = document.getElementsByTagName('section');
const navLinks = document.getElementsByClassName('nav-link-text');

window.addEventListener('scroll', () => {
    let current_section = "";

    [...sections].forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current_section = section.getAttribute('id');
        }
    });
    [...navLinks].forEach(link => {
        link.classList.remove('active');
        if (link.classList.contains(current_section)) {
            link.classList.add('active');
        }
    });
});

export default Navbar
