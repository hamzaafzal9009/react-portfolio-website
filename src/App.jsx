import React from 'react'
import "./index.css"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Contact from "./components/contact/Contact"
import Nav from "./components/nav/Nav"
import Portfolio from "./components/portfolio/Portfolio"
import Services from "./components/services/Services"
import Testimonials from "./components/testimonials/Testimonials"

const App = () => {
  return (
    <>
     <Header />
     <Nav />
     <About />
     <Experience />
     <Services />
     <Portfolio />
     <Testimonials />
     <Contact />
     <Footer />

    </>
  )
}

export default App