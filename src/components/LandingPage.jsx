import React from 'react'
import { Link } from 'react-router-dom'
import YogaHome from "../assets/Yoga-home.png"
const LandingPage = () => {
  return (
    <>
    <div className="slider flex flex-col-reverse md:flex-row bg-[#eae7de]  items-center">
      <div className="left flex flex-col justify-center items-center md:items-baseline py-12 md:ml-32">
        <h2 className="text-2xl md:text-4xl lg:text-5xl mx-3 font-extrabold text-blue-600 dark:text-blue-500">
          Ashtang Yogalaya
        </h2>
        <h2 className="text-2xl md:text-4xl lg:text-5xl mx-3 mt-2 font-extrabold text-blue-600 dark:text-blue-500">
          School Of Yoga
        </h2>
        <p className="text-center w-3/4 md:text-left mt-3 font-sans text-xl">
          Ashtang Yogalaya School of Yoga is a Yoga College run by Ashtang
          Yogalaya Foundation Haridwar where Yoga & related courses
          (Alternative therapies) are taught by professionals. At the same
          time long term and short terms courses (Certificates, Diploma, UG,
          PG) with studies of yoga are also done. <br />
          Courses : Yoga | Acupressure | YTTC | Certificate | Diploma |
          Graduations | Post- Graduations
        </p>
         
          <a className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-bold px-4 py-2 mt-4 rounded-2" href="https://chat.whatsapp.com/FfaBdJxBHJgCkOYKpzJriF" target="_blank">
            Join Now
          </a>
        
        {/* <Link  target="_black" href="/https://chat.whatsapp.com/FfaBdJxBHJgCkOYKpzJriF">
          <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-bold px-4 py-2 mt-4 rounded-2">
            Join Now
          </button>
        </Link> */}
      </div>
      <div className="right  flex flex-col justify-center items-center">
        <img className="w-[60rem] md:w-[64rem]" src={YogaHome} alt="yoga-2" />
      </div>
    </div>
  </>
  )
}

export default LandingPage