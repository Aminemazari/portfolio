import React, { useState } from 'react'
import { Menu, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import "./style.css"
import whitemodePics from "../assets/whitemode.svg"
import darkmodePics from "../assets/darkmode.svg"
import menuIcon from "../assets/ic_outline-menu.svg"
const navbar = ({onclick,goAbout,goProject,goContact}) => {
    const [darkMode,setDarkMode]=useState(false);
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
      setVisible(true);
    };
  
    const onClose = () => {
      setVisible(false);
    };
  
  return (
    <>
    <nav className="navbar">
      <h1 className='MyName'>{"{Amine Mazari}"}</h1>
      <div className='navBarButtton'>
        <button className='aboutButton'
        onClick={goAbout}
        >
            About
        </button>
        <button className='aboutButton'
           onClick={goProject}
        >
        Projects
        </button>
        <button className='contactButton'
          onClick={goContact}
        >
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
    <div className='menu'>

      <img src={menuIcon}  
      style={{
          width:"50px",
          height:"50px",
          position:"absolute",
          right:"10px",
          top:"10px",
      }}
      onClick={showDrawer}/>
      <Drawer
        title="Navigation"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Menu mode="vertical"className='menuControle' style={{
          display:"flex",
          flexDirection:"column",
          gap:"20px"
        }}>
        <button className='aboutButton'
        onClick={()=>{
          setVisible(false)
          goAbout()
        }}
        >
            About
        </button>
        <button className='aboutButton'
           onClick={()=>{
            goProject()
            setVisible(false)
          }}
        >
        Projects
        </button>
        <button className='contactButton'
                  onClick={()=>{
                    goContact()
                    setVisible(false)
                  }}
        >
            Contact
        </button>
        </Menu>
      </Drawer>
    </div>
    </>
  )
}

export default navbar
