import React from 'react'
import ProgramCard from '../components/ProgramCard'
import hero from '../assets/hero.png'
import CLASS from '../assets/CLASS.png'
import JEE from '../assets/JEE.png'
import NEET from '../assets/NEET.png'



const Home = () => {

  const programs = [
    {
      title: "JEE",
      image: JEE,
      link: "/programs/jee"
    },
    {
      title: "NEET",
      image: NEET,
      link: "/programs/neet"
    },
    {
      title: "Grade 6-10",
      image: CLASS,
      link: "/programs/school"
    }
  ]

  return (
    <div className="min-h-screen bg-[#080f19] text-white">

      {/* Hero Section */}
      <section className="px-8 md:px-16 lg:px-24 pt-10 pb-20">

        {/* Breadcrumb */}
        <div className="text-gray-400 text-sm mb-12">
          <span>Home</span>
          <span className="mx-3">›</span>
          <span>Online Programs</span>
        </div>

        {/* Hero Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-8">
              Online Programs
            </h1>

            <p className="text-gray-400 text-lg leading-8">
              Together the full ALLEN Learning Experience explore
              the Ultimate Series of Programs for JEE, NEET and
              Olympiads. The Ultimate Programs are Allen Recommended.
              They provide a fully structured curriculum with a
              week-by-week plan and foster meaningful teacher-student
              interaction.
            </p>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <img
              src={hero}
              alt="Online learning"
              className="w-full max-w-md"
            />
          </div>

        </div>

      </section>


      {/* Programs Section */}
      <section className="px-8 md:px-16 lg:px-24 pb-20">

        <h2 className="text-3xl md:text-4xl font-semibold mb-10">
          Discover the perfect online program
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {programs.map((program) => (
            <ProgramCard
              key={program.title}
              title={program.title}
              image={program.image}
              link={program.link}
            />
          ))}

        </div>

      </section>

    </div>
  )
}

export default Home