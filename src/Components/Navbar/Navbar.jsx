import React, { useState, useEffect, useRef } from 'react'
// import logo from '../../assets/logo.jpg'
import underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import './Navbar.css'
import faisals from '../../assets/faisals.png'
export const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();
  const openMenu = ()=>{
    menuRef.current.style.right = "0"
  }
   const closeMenu = ()=>{
    menuRef.current.style.right = "-350px"
  }
  useEffect(() => {
    console.log("hello");
  const handleScroll = () => {
    const sections = [
      { id: "home", name: "home" },
      { id: "about", name: "About me" },
      { id: "service", name: "Services" },
      { id: "mywork", name: "Portfolio" },
      { id: "contact", name: "Contact" },
    ];

    for (let section of sections) {
      const element = document.getElementById(section.id);
      if (!element) continue;
    

      const rect = element.getBoundingClientRect();

      if (rect.top <= 150 && rect.bottom >= 150) {
        setMenu(section.name);
        break; // only one section active at a time
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <div className='navbar'>
        <span className='logo'>FaIsAl <img src={faisals} alt=""/></span> 
        <img src={menu_open} alt="" onClick={openMenu} className='nav-mob-open'/>
        <ul ref={menuRef} className="nav-menu">
          <img src={menu_close} alt="" onClick={closeMenu} className='nav-mob-close'/>
            <li><a className='nav-links'  href='#home'><p onClick={()=>setMenu("home")}>Home</p></a>{menu === "home"?<img src={underline}/>:''}</li>
            <li><a className='nav-links' offset={50} href='#about'><p onClick={()=>setMenu("About me")}>About me</p></a>{menu === "About me"?<img src={underline}/>:''}</li>
            <li><a className='nav-links' offset={50} href='#service'><p onClick={()=>setMenu("Services")}>Services</p></a>{menu === "Services"?<img src={underline}/>:''}</li>
            <li><a className='nav-links' offset={50} href='#mywork'><p onClick={()=>setMenu("Portfolio")}>Portfolio</p></a>{menu === "Portfolio"?<img src={underline}/>:''}</li>
            <li><a className='nav-links' offset={50} href='#contact'><p onClick={()=>setMenu("Contact")}>Contact</p></a>{menu === "Contact"?<img src={underline}/>:''}</li>
        </ul>
        <div className="nav-connect"><a href="https://www.linkedin.com/in/muhammad-faisal-zahoor-194049353/?trk=opento_sprofile_details" target='_blank'>Connect with me</a></div>
    </div>
  )
}
