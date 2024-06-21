import React, { useState } from 'react'
import "./style.css"
import whitemodePics from "../assets/whitemode.svg"
import darkmodePics from "../assets/darkmode.svg"
const navbar = ({onclick}) => {
    const [darkMode,setDarkMode]=useState(false);

  return (
    <nav className="navbar">
      <h1 className='MyName'>{"{Amine Mazari}"}</h1>
      <div className='navBarButtton'>
        <button className='aboutButton'>
            About
        </button>
        <button className='aboutButton'>
        Projects
        </button>
        <button className='contactButton'>
            Contact
        </button>
      </div>
      <button onClick={()=>{
          setDarkMode(!darkMode) 
          onclick(!darkMode);
          }} className='modesButton'>
      {!darkMode ? <img src={whitemodePics} alt="" /> : <img src={darkmodePics} alt="" />}
      </button>
    </nav>
  )
}

export default navbar
