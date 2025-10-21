// src/components/Layout.jsx
import React, { use, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import assets from '../assets/assets'
import { Menu, X } from 'lucide-react'
import Sidebar from '../components/Sidebar.jsx'
import { SignIn , useUser } from '@clerk/clerk-react'

const Layout = () => {
  const navigate = useNavigate()
  const [sidebar, setSidebar] = useState(false)
  const {user} = useUser()

  return user ? (
    <div className='flex flex-col items-start justify-start h-screen'>
      <nav className='w-full px-8 min-h-14 flex-items-center justify-between border-b border-pink-400 py-4'>
        {/* Logo */}
        <img
          src={assets.logo}
          alt='Logo'
          className='cursor-pointer w-32'
          onClick={() => navigate('/')}
        />

        {/* Sidebar Toggle Icon */}
        <button
          onClick={() => setSidebar(prev => !prev)}
          className='sm:hidden focus:outline-none'
        >
          {sidebar ? (
            <X onClick={() => setSidebar(false)} className='w-6 h-6 text-gray-700 sm:hidden' />
          ) : (
            <Menu onClick={() => setSidebar(true)} className='w-6 h-6 text-gray-700 sm:hidden' />
          )}
        </button>
      </nav>
      <div className='flex-1 w-full flex h-[calc(100vh-64px)]'>
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <div className='flex-1 bg-[#F4F7FB]'>
          <Outlet />
        </div>
      </div>


    </div>
  ) :
    (
      <div className='flex flex-col items-center justify-center h-screen'>
        <SignIn/>
      </div>
    )
}

export default Layout