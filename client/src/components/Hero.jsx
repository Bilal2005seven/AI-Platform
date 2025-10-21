import React from 'react'
import { useNavigate } from 'react-router-dom'
import assets from '../assets/assets'

const Hero = () => {
  const navigate = useNavigate()

  return (
    <div className="relative flex flex-col justify-center items-center text-center px-6 sm:px-20 xl:px-32 min-h-screen overflow-hidden bg-gradient-to-br from-sky-100 via-blue-200 to-indigo-300">

      {/* Animated gradient orbs for background depth */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-pink-400/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-indigo-500/40 rounded-full blur-3xl animate-pulse delay-700"></div>

      {/* Floating light overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>

      {/* Text content */}
      <div className="relative z-10">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight text-gray-900 drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
          Create Amazing Content with <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">AI Tools</span>
        </h1>

        <p className="mt-5 text-gray-700 max-w-lg sm:max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          Transform your workflow with premium AI tools — write articles, generate images, and boost your creative potential.
        </p>
      </div>

      {/* Button group */}
      <div className="relative z-10 flex flex-wrap justify-center gap-6 mt-10">
        {/* 🚀 Start Creating Now button */}
        <button
          onClick={() => navigate('/ai')}
          className="relative z-0 p-[3px] overflow-hidden rounded-full group transition-all duration-300 hover:scale-105 active:scale-100"
        >
          <span className="absolute inset-0 z-[-1] rounded-full 
                   before:content-[''] before:absolute before:-left-1/2 before:-top-1/2 before:w-[200%] before:h-[200%]
                   before:bg-[conic-gradient(from_0deg,#ff0080,#ff8c00,#ffff00,#40e0d0,#00ff80,#00f,#ff0080)]
                   before:animate-[rotate_3s_linear_infinite]
                   before:blur-md before:opacity-90
                   after:content-[''] after:absolute after:inset-[3px] after:bg-gray-900 after:rounded-full"></span>

          <span className="relative inline-flex items-center justify-center px-10 py-3 text-white font-semibold 
                   rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                   shadow-[0_0_25px_rgba(236,72,153,0.7)]
                   hover:shadow-[0_0_40px_rgba(236,72,153,0.9)]
                   transition-all duration-300 ease-out
                   hover:-translate-y-1 hover:scale-[1.05] active:scale-[0.97]">
            🚀 Start Creating Now
          </span>

          <style>{`
            @keyframes rotate {
              100% { transform: rotate(1turn); }
            }
          `}</style>
        </button>

        {/* 📽️ Watch Now button */}
        <button
          onClick={() => navigate('/ai')}
          className="relative group rounded-full p-[2px] transition-all duration-500 hover:scale-105 active:scale-100"
        >
          <span className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#00F5FF,#007,#300,#10F5FF,#005,#005,#005,#00F5FF)] 
                   bg-[length:300%_300%] animate-[shine_6s_ease-out_infinite]"></span>

          <span className="relative inline-flex items-center justify-center px-10 py-3 text-white font-semibold 
                   rounded-full bg-gray-900 shadow-lg
                   hover:shadow-[0_0_25px_rgba(0,245,255,0.6)]
                   transition-all duration-300 ease-out
                   hover:-translate-y-1 hover:scale-[1.05] active:scale-[0.97]">
            📽️ Watch Now
          </span>

          <style>{`
            @keyframes shine {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}</style>
        </button>
      </div>

      {/* Trusted section */}
      <div className="relative z-10 flex items-center gap-4 mt-10 mx-auto text-gray-700">
        <img src={assets.user_group} alt="users" className="h-8 w-auto" />
        <span className="font-medium">Trusted by <span className="text-indigo-600 font-semibold">10,000+</span> creators worldwide</span>
      </div>
    </div>
  )
}

export default Hero
