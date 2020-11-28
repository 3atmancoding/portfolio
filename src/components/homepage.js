import React, { useEffect } from 'react'
import Hello from '../components/summary/hello'
import Footer from '../components/footer/footer'
import Nav from '../components/menu/nav'
import Social from '../components/socialmenu/socialmenu'
import constants from '../utils/strings'
import './homepage.css'
// import Highlight from '../components/highlighter/highlighter'
const Home = () => {
    useEffect(() => { 
            document.body.style.backgroundColor = '#faf6f0' 
            // document.body.style.backgroundColor = '#000000' 
        }, [])
    return (
        <>
        <div className="row">
            
        <div className="column">
<Nav/>
        </div>
        <div className="column">
            <Social/>
        </div>
        </div>
        
        <div className="row">
        <div className='hello column'>
           <p className ="hellopara">
               
            {constants.hey}
            {constants.me}<br/>
            a
            {constants.designer}<br/>and an{constants.illustrator}<br/>
            
            </p> 
            <span className = 'humanize'>{constants.humanize}</span>
        </div>
       <Hello className= 'column'/>
      </div>
      <Footer/>
      </>
    )
}
export default Home