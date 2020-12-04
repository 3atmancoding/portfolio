import React from 'react'
import './socialmenu.css'
import mail from '../../assets/icons/mail.svg'
import dribbble from '../../assets/icons/dribbble.svg'
import behance from '../../assets/icons/behance.svg'
import github from '../../assets/icons/github.svg'
const Social = ()=>{
    return(
        <div className="socialMenuContainer">
        <div className="wrapper">
        <a href = "mailto:hello@utkupadhyay.com"><img src ={mail} alt="mailing" className="socialIconSize"/></a>
        <a href = "https://dribbble.com/utkillustrations" target="_blank"><img src ={dribbble} alt="dribbble" className="socialIconSize"/></a>
        <a href = "https://www.behance.net/illustratorutk" target="_blank"><img src ={behance} alt="behance" className="socialIconSize"/></a>
        <a href = "https://github.com/3atmancoding" target="_blank"><img src ={github} alt="github" className="socialIconSize"/></a>
        </div>
        </div>
    )
}
export default Social