import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
   <>
   <div className="slider flex flex-col-reverse md:flex-row bg-[#eae7de]  items-center">
        <div className="left flex flex-col justify-center items-center md:items-baseline py-12 md:ml-32">
          <h1 className="text-2xl md:text-4xl lg:text-5xl mx-3 font-extrabold text-blue-600 dark:text-blue-500">
            Welcome To Yoga Studio
          </h1>
          <p className="text-center w-3/4 md:text-left mt-3 font-sans text-xl">
            Pranayama is a clean, flat and modern Yoga Studio & Meditation
            website Template. It's the perfect theme for anyone who wants to
            create a professional website for Yoga, Pilates, Meditation, Spa,
            Wellness, Sports & Health Websites.
          </p>
          <Link to="/price">
            <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-bold px-4 py-2 mt-4 rounded-2">
              Join Now
            </button>
          </Link>
        </div>
        <di className="right  flex flex-col justify-center items-center">
          <img
            className="w-[60rem] md:w-[64rem]"
            src="../../public/Yoga-home.png"
            alt="yoga-2"
          />
        </di>
      </div>
   </>
  )
}

export default LandingPage