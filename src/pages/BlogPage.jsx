import React from 'react'
import Blog from '../components/Blog'

const BlogPage = () => {
  return (
    <>

      <section className="bg-center bg-no-repeat bg-[url('https://i.ibb.co/YXJ25wL/Yoga-5.jpg')] bg-cover  bg-gray-600 bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Our Latest Articles</h1>
      </div>
      </section> 
      <Blog />
    
      </> 
  )
}

export default BlogPage