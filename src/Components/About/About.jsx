import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_pic2 from '../../assets/profile_pic2.png'

export const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" style={{width:"50%"}}/>
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_pic2} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I’m a Full Stack Developer skilled in MERN stack and experienced in .NET technologies. I’ve built and delivered multiple projects for clients and am currently interning at Mobilink to gain deeper industry experience. I enjoy solving real-world problems through clean, scalable code.</p>
                    <p>My passion for full stack development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>

                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML AND CSS</p><hr style={{width:"90%"}}/></div>
                    <div className="about-skill"><p>JAVASCRIPT</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>REACT JS</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>JAVA</p><hr style={{width:"30%"}}/></div>
                    <div className="about-skill"><p>PYTHON</p><hr style={{width:"40%"}}/></div>
                    <div className="about-skill"><p>C++</p><hr style={{width:"45%"}}/></div>
                    <div className="about-skill"><p>EXPRESS JS</p><hr style={{width:"40%"}}/></div>
                    <div className="about-skill"><p>C#</p><hr style={{width:"20%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1><span>1+</span></h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1><span>5+</span></h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1><span>3+</span></h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}
