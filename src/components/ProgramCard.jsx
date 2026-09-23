import React from 'react'
import { Link } from 'react-router-dom'

const ProgramCard = ({ title, image, link }) => {
  return (
    <div className="bg-[#101725] rounded-xl p-6 overflow-hidden hover:scale-[1.02] transition">

      <h3 className="text-2xl font-medium mb-5">
        {title}
      </h3>

      <img
        src={image}
        alt={title}
        className="w-full h-48 object-contain"
      />

      <Link
        to={link}
        className="inline-block mt-5 text-gray-300 hover:text-white"
      >
        View →
      </Link>

    </div>
  )
}

export default ProgramCard