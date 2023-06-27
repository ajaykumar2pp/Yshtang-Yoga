import React from 'react'

const TeamCard = () => {
  return (
    <div>
         <section>
        <div className="heading mt-20">
            <h1 className="text-purple-800 text-center text-4xl font-bold underline ">Our Team</h1>
        </div>
    </section>
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10 mt-10 
   ">

        <div className="cursor-pointer">
            <a href="">
                <img className="h-auto max-w-full rounded-lg" src="../../public/team-1.png" alt="" />
            </a>
            <div className="p-5">
                <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Anjali</h5>
                <h5 className="mb-2 text-xl text-center  tracking-tight text-gray-900 dark:text-white">Yoga Teacher</h5>
            </div>

        </div>

        <div className="">
            <a href="">
                <img className="h-auto max-w-full rounded-lg" src="../../public/team-2.png" alt="" />
            </a>
            <div className="p-5">
                <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Tanu</h5>
                <h5 className="mb-2 text-xl text-center  tracking-tight text-gray-900 dark:text-white">Yoga Teacher</h5>
            </div>
        </div>
        <div className="">
            <a href="">
                <img className="h-auto max-w-full rounded-lg" src="../../public/team-3.png" alt="" />
            </a>
            <div className="p-5">
                <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Vishal</h5>
                <h5 className="mb-2 text-xl text-center  tracking-tight text-gray-900 dark:text-white">Yoga Teacher</h5>
            </div>
        </div>
    </section>

    </div>
  )
}

export default TeamCard