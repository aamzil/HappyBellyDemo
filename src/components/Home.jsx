import React from 'react'
import About from './About'
import Downloads from './Downloads'
import FAQ from './FAQ'
import Footer from './Footer'
import Hero from './Hero'
import Services from './Services'
import Trusted from './Trusted'

function Home() {
  return (
    <div className='bg-neutral-100 '>
        <Hero/>
        <Trusted/>
        <Services/>
        <About/>
        <Downloads/>
        <FAQ/>
        <Footer/>
    </div>
  )
}

export default Home