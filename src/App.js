import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Skill from './components/skill/skill'
import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
import Testimonial from './components/testimonial/testimonial'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skill />
      <Portfolio />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App
