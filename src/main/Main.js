import React from 'react'
import './main.css'
import Aboutme from './aboutme/Aboutme'
import Education from './Education/Education'
import Skills from './Skills/Skills'
// import Experience from './Experience/Experience'
import Project from './Projects/Project'
import Achievement from './Achievement/Achievement'
function Main() {
    return (
        <main>
          <Aboutme/>
          <Education/>
          <Skills/>
          {/* <Experience/> */}
          <Project/>
          <Achievement/>
        </main>
    )
}

export default Main
