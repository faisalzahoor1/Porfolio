import React from "react"
import { Navbar } from "./Components/Navbar/Navbar"
import { Home } from "./Components/Home/Home"
import { About } from "./Components/About/About"
import { Services } from "./Components/Services/Services"
import { MyWork } from "./Components/MyWork/MyWork"
import { Contact } from "./Components/Contact/Contact"
function App() {
  

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
    </>
  )
}

export default App
