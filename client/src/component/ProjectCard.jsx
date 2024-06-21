import React from 'react'
import "./style.css"
import reacticon from "../assets/reacticon.svg"
import js from "../assets/Unofficial_JavaScript_logo_2 2.svg"
import css from "../assets/css_logo_2 2.svg"
import html from "../assets/html_logo_2 2.svg"
const ProjectCard = ({projectImg,githubRepo,siteLink,projectName,projectOverview,tags}) => {
  const GoGithub=()=>{
    window.location.href = githubRepo;
  }
  const GoSite=()=>{
    window.location.href = siteLink;
  }
  
  return (
    <div className='project'>
 
     <img src={projectImg} className='projectsImg'/>
    <p className='projectsName'>{projectName}</p>
    <p className='projectOverview'>{projectOverview}</p>
    <p className='Technologies-Used'>Technologies Used</p>
    <div className='Technologies-List'>
        {
          tags.map((tag)=><img src={tag} className='theTechnologies'/>)
        }
     </div>
    <div className='buttonViewProject'>
    <button className='GitHub-repository' onClick={GoGithub} >GitHub repository</button>
    <button className='Visit-Site' onClick={GoSite} >Visit Site</button>
    </div>
    </div>
  )
}

export default ProjectCard
