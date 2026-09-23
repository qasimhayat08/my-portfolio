import React from 'react'
import CustomCursor from "./components/CustomCursor";
import Navbar from './components/navbar'
import Home from './sections/home'
import About from './sections/about'
import Skills from './sections/skills'
import Projects from './sections/projects'
// import Testimonials from './sections/testimonials'
import Experience from './sections/experience'
import Contact from './sections/contact'
import Footer from './sections/footer'
// import IntroAnimations from './components/interoanimations';

const App = () => {
  return (
    <div className='relative gradient text-white w-full overflow-hidden'>


      {/* <introAnimations /> */}
       <CustomCursor />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <experience />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  )
}

export default App
