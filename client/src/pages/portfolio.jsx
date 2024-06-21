import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import "./style.css"
import Rectangle from "../assets/Rectangle 12.svg"
import Navbar from '../component/navbar'
import picture from "../assets/photo_2024-06-21_20-31-48.jpg"
import pictureTwo from "../assets/photo_2024-06-21_19-09-25.jpg"
import tailwind from "../assets/tailwind.svg"
import html from "../assets/html.svg"
import reactpics from "../assets/react.svg"
import css from "../assets/css.svg"
import javascript from "../assets/javascript.svg"
import ProjectCard from '../component/ProjectCard'
import teamuup from "../assets/Frame 11991.png"
import reactIcon from "../assets/reacticon.svg"
import jsIcon from "../assets/Unofficial_JavaScript_logo_2 2.svg"
import cssIcon from "../assets/css_logo_2 2.svg"
import htmlIcon from "../assets/html_logo_2 2.svg"
import xpera from "../assets/Screenshot 2024-06-21 234301.png"
const Portfolio = () => {
    const handleDarkMode=(value)=>{
        console.log(value)
       document.documentElement.setAttribute('data-theme', value ? 'dark' : 'light');
    }
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });
      const [ref2, inView2] = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });
  return (
    <div className="hero">
      <Navbar onclick={handleDarkMode}/>
      <section className='Introduction'>
        <div className='sammary'>
            <p className='MyNameInSammary'>Amine Mazari</p>
            <h1 className='MyJobName'>Frontend Developer.</h1>
            <p className='sammaryParagraph'>My expertise lies in creating captivating user experiences by leveraging cutting-edge frontend technologies and frameworks, transforming your vision into reality. In addition to this, I possess advanced skills in geoinformatics, adept at harnessing spatial data to reveal valuable insights</p>
            <div className='AvailableCountainer'>
                <button className='getInTouchButton'>
                    Get in Touch
                </button>
                <button className='availableNowButton'>
                    <div className='circleGreenPoint'></div>
                    <p className='availableNow'>Available now</p>
                </button>
            </div>
        </div>
        <div  className={`photoOftheEvent2 ${inView2 ? 'in-view' : ''}`}ref={ref2}>
        <img src={picture} className='pictureTeleHack'/>
        <div className='cadre2'></div>
        </div>
       
      </section>

      <section className='AboutMe' >
        <div  className={`photoOftheEvent ${inView ? 'in-view' : ''}`} ref={ref}>
        <img src={pictureTwo} className='microhackPhoto' />
        <div className='cadre'></div>
        </div>
        <div className='aboutMeDescription'>
            <div className='aboutmetextDiv'>
            <h1 className="aboutMeText">About Me</h1>
            <p className='whoAmI'><div className='aLine'></div> Who Am I?</p>
        </div>
        <p className='educationAndInterest'>I am currently pursuing a master’s degree at Higher School of Computer Science 08 May 1945 in Sidi Bel Abbes, Algeria, with a keen interest in frontend development . My goal is to leverage my expertise in crafting compelling and functional user interfaces. Additionally, I aim to utilize my skills in geospatial analysis, modeling, and process automation to engineer innovative, customizable, and sustainable software solutions. The following are the tech stacks I frequently work with:</p>
        <div className='skillsList'>
            <img src={reactpics} className='skill'></img>
            <img src={javascript} className='skill'></img>
            <img src={css} className='skill'></img>
            <img src={html} className='skill'></img> 
            <img src={tailwind} className='skill'></img>
        </div>
        </div>

      </section>
      <section className='projects'>
        <p className='projects-word'>Projects</p>
        <div className='projectsCountainer'>
         <ProjectCard projectImg={teamuup} projectName={"TeamUp"} projectOverview={"TeamUp is a collaborative platform that connects people with similar interests to work on projects together. It also fosters mentorship by allowing experienced members to guide newcomers."} githubRepo={"https://github.com/Aminemazari/TeamUp"} siteLink={"https://teamupte.netlify.app/"} tags={[reactIcon,jsIcon,cssIcon,htmlIcon]}/>
         <ProjectCard projectImg={xpera} projectName={"Xpera"} projectOverview={"Xpera is an comunity platforme where you share your experiences to help others make better choices"} tags={[reactIcon,jsIcon,cssIcon,htmlIcon]} githubRepo={"https://github.com/Aminemazari/Xpera"} siteLink={"https://xperra.netlify.app/"}/>
        
        </div>
      </section>
      <section className="GetInTouch">
        <div className='getInTouchPhoto'>   
       <h1 className='textDisscuss'>Let’s discuss on something <span className='cool'>cool</span> together</h1>
       </div>

      </section>
    </div>
  )
}

export default Portfolio
