

import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import { Menu } from './components/Menu/Menu'
import Navbar from './components/Navbar/Navbar'

function App() {
  

  return (
    <div className="wrapper">
     <Navbar/>
     <Hero/>
     <About/>
     <Experience/>
     <Menu/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App
