import React from 'react'
import './Home.css'
import profile_pic2 from  '../../assets/profile_pic2.png'

export const Home = () => {
  return (
    <div id='home' className='home'>
        <img src={profile_pic2} alt="Persons-img" className='profile-pic'/>
        <h1><span className="typing-text">I'm Muhammad Faisal Zahoor,</span> Full Stack Developer based in PAKISTAN.</h1>
        <p>Currently im doing internship in Mobilink.</p>
        <div className="home-buttons">
            <div className="home-connect"><a href="https://www.linkedin.com/in/muhammad-faisal-zahoor-194049353/?trk=opento_sprofile_details" target='_blank'>Connect with me</a></div>
            <div className="home-resume">My resume</div>
        </div>
    </div>
  )
}
