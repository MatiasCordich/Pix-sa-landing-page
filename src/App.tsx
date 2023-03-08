

import './App.css'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'

function App() {
  

  return (
    <div className="wrapper">
     <Navbar/>
     <Hero/>
     <About/>
     <Experience/>
     <Footer/>
    </div>
  )
}

export default App
