import React, {useState, useRef}from 'react'
import Nav from '../../components/menu/nav'
import './menu.css'
import menuIcon from '../../assets/icons/menu2.svg'
import closeIcon from '../../assets/icons/close.svg'
const MobMenu = ()  =>{
    const[isOpen, setOpen] = useState(false)
    const Sidebar = ()=>{
       return (
       <>
       <div className="sidebar">
           <Nav/>
       </div>
       </>
       )
    }
return(
    <>
    {
        isOpen
        ?
        <Sidebar/>
        :
        ''
    }
    <img className = {isOpen ? "close-icon" : "mobile-icon"} src ={isOpen ? closeIcon: menuIcon} onClick = {()=>setOpen(!isOpen)}alt ="Menu icon"/>
</>
)
}
export default MobMenu;