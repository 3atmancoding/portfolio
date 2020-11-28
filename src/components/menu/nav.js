import React from 'react'
import './nav.css'
import cvFile from '../../assets/files/CV-2020.pdf'
const Nav = () => {
    return(
    <>
    <div className="navMenu">
    <a href = {cvFile} download>Download CV</a>
    
    <a href = '#'>About</a>
    <a href ='mailto:someone@some.com'>Hire me</a>
    </div>
    </>
    )
}
export default Nav