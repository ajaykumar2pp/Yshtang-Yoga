import React from 'react'
import Navbar from '../components/Navbar'
import OurService from '../components/OurService'
import Footer from '../components/Footer'

const About = () => {
  return (
    <> 
    <Navbar />
    <section className="bg-center bg-no-repeat bg-[url('../../public/Yoga-5.jpg')] bg-cover  bg-gray-600 bg-blend-multiply">
    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            About</h1>
    </div>
    </section> 
    <OurService />
    <Footer />
    </>  
  )
  
}

export default About