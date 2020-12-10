import React from 'react'
import constants from '../../utils/strings'
const Description = () =>{
   return (
       <>
       <p className ="hellopara"> 
            {constants.hey}
            {constants.me}<br/>
                a
            {constants.designer}<br/>and an{constants.illustrator}<br/>
            </p> 
            <p className = 'humanize'>{constants.humanize}</p>
            </>
)
}
export default Description