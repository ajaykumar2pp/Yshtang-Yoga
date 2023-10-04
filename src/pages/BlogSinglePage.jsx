import React from 'react'
import { Link } from 'react-router-dom'


import Yoga_five from "../assets/Yoga-5.jpg"

const BlogSinglePage = () => {
  return (
    <div>
     
    <section>
   <div className="heading mt-24">
     <h1 className="text-purple-800 text-center text-4xl font-bold underline ">
       Yshtang Yoga
     </h1>
   </div>
 </section>
   <section className="blog-card  p-10 mt-8">
   <div className=" bg-white border rounded-lg shadow dark:bg-gray-800 ">
       <Link to="/single-blog"  className="md:flex md:justify-center lg:flex lg:justify-center">
           <img className="h-auto max-w-full rounded-lg" src={Yoga_five} alt="" />
       </Link>
       <div className="p-5">
           <Link to="/single-blog" >
               <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy
                   technology acquisitions 2021</h5>
           </Link>
           <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.  <br />

               Excepteur sint ocacat cupidatat non proi dent sunt in culpa qui officia deserunt.mollit anim id est laborum. sed ut pers piciatis unde omnis iste natus error.sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora. </p>
           <Link to="/single-blog"
               className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " >
               Read more
               <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                   xmlns="http://www.w3.org/2000/svg">
                   <path fill-rule="evenodd"
                       d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                       clip-rule="evenodd"></path>
               </svg>
           </Link>
       </div>
   </div>

</section>

</div>
  )
}

export default BlogSinglePage