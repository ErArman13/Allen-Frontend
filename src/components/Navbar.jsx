import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-8 py-4 bg-[#080f19] text-white'>
        <Link to='/' className='text-3xl font-bold'>Allen </Link>
        <div className='hidden md:flex gap-8 items-center'>
          <Link to='/exams'>Exams</Link>
          <Link to='/programs'>Programs</Link>
          <Link to='/scholarship'>Scholarsip</Link>
          <Link to='/test-series'>Test Series</Link>
          <Link to='/study-materials'>Study Materials</Link>
        </div>
        <div className='flex items-center gap-4'>
          <button className='bg-white rounded-full bg-white text-black px-3 py-3'>Talk to Us</button>
          <Link to='/login' className="border border-gray-500 px-6 py-3 rounded-full">Login</Link>

        </div>
    </nav>
  )
}

export default Navbar
