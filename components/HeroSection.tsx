"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai"
const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/profile1.jpeg"
            alt=""
            width={400}
            height={400}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5 prose-invert text-white">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl text-white">hi, i&#39;m</h1>
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 bg-clip-text text-7xl text-transparent background-animate hover:invert">shubham!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl text-white`">
            i&#39;m a{" "}
            <span className="font-semibold">
              software engineer{" "} 
            </span>
            based in Salt Lake City, UT. working towards building software that empowers and inspires users.
          </p>
          <div className="space-x-2">
            <Link
              to="projects"
              className="font-bold prose-invert px-8 py-2.5 rounded shadow bg-gradient-to-tr from-red-900 via-blue-800 to-teal-900 transition ease-in-out delay-0 bg-white-500 hover:from-pink-500 hover:to-yellow-500"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Projects
            </Link>
            <button className="font-bold prose-invert px-8 py-2 rounded shadow bg-gradient-to-tr from-red-900 via-blue-800 to-teal-900 transition ease-in-out delay-0 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 hover:from-pink-500 hover:to-yellow-500">
              <a className="" href="https://github.com/sansquoi" rel="noreferrer" target="_blank">
               Github
              </a>
            </button>
            <button className="font-bold prose-invert px-8 py-2 rounded shadow bg-gradient-to-tr from-red-900 via-blue-800 to-teal-900 transition ease-in-out delay-0 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 hover:from-pink-500 hover:to-yellow-500">
              <a className="" href="https://www.linkedin.com/in/mazumders/" rel="noreferrer" target="_blank">
                LinkedIn
              </a>
            </button>
           
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center fill-white">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce fill-white" />
        </Link>
        
      </div>
    </section>
  )
}

export default HeroSection
