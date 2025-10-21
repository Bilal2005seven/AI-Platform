import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { useClerk } from '@clerk/clerk-react'
import { House, Hash, Image, Eraser, Scissors, FileText, Users, SquarePen, X, LogOut } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'

const navItems = [
    { to: '/ai', label: 'Dashboard', icon: House },
    { to: '/ai/Write-article', label: 'Write Article', icon: SquarePen },
    { to: '/ai/Blog-titles', label: 'Blog Titles', icon: Hash },
    { to: '/ai/generative-images', label: 'Generative Images', icon: Image },
    { to: '/ai/remove-background', label: 'Remove Background', icon: Eraser },
    { to: '/ai/remove-object', label: 'Remove Object', icon: Scissors },
    { to: '/ai/review-resume', label: 'Review Resume', icon: FileText },
    { to: '/ai/community', label: 'Community', icon: Users },
]

const Sidebar = ({ sidebar, setSidebar }) => {
    const { user } = useUser()
    const { signOut, openUserProfile } = useClerk()

    return (

        <>
        <Navbar />
            {/* Overlay for mobile */}
            {sidebar && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setSidebar(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`
                fixed lg:static
                top-14 lg:top-auto
                left-0
                bottom-0
                h-auto lg:h-full
                w-64 sm:w-72 lg:w-64
                bg-gradient-to-b from-[#121416] to-[#1a1c24]
                border-r border-[#2b2d31] flex-col 
                transition-all duration-300 ease-in-out
                z-50 lg:z-auto
                shadow-[0_0_15px_rgba(83,25,142,0.3)]
                ${sidebar ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                flex flex-col
            `}>
                {/* Circuit pattern overlay */}
                <div className="absolute inset-0 bg-[url('path/to/circuit-pattern.png')] opacity-5 pointer-events-none"></div>
                
                {/* Close button for mobile */}
                <button
                    onClick={() => setSidebar(false)}
                    className="absolute top-4 right-4 lg:hidden text-gray-400 hover:text-white transition-colors duration-200 z-50"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* User Section */}
                <div className="py-8 w-full text-center px-4 relative">
                    <div className="relative inline-block">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#53198e] to-[#FF6EC7] rounded-full opacity-30 blur-md"></div>
                        <img
                            src={user.imageUrl}
                            alt="User Avatar"
                            className="w-16 h-16 rounded-full mx-auto border-2 border-[#2b2d31] shadow-lg relative z-10 object-cover"
                        />
                    </div>
                    <h1 className="text-lg font-semibold mt-3 text-white tracking-wide">{user.fullName}</h1>
                    <div className="text-xs text-[#a0a0a0] mt-1 font-medium">AI Explorer</div>
                </div>

                {/* Nav Section */}
                <div className="px-4 text-sm font-medium w-full space-y-2 flex-1 overflow-y-auto custom-scrollbar">
                    {navItems.map(({ to, label, icon: IconComponent }) => (
                        <NavLink
                            key={to}
                            to={to}
                            end={to === '/ai'}
                            onClick={() => setSidebar(false)}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ease-out relative group ${
                                    isActive
                                        ? 'text-white shadow-lg scale-[1.02]'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5 hover:scale-[1.01]'
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    {/* Active background with glow */}
                                    {isActive && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#53198e]/20 via-[#E100FF]/20 to-[#FF6EC7]/20 rounded-lg z-0"></div>
                                    )}
                                    
                                    {/* Active border with glow */}
                                    {isActive && (
                                        <div className="absolute inset-0 rounded-lg border border-[#E100FF] shadow-[0_0_10px_rgba(225,0,255,0.5)] z-0"></div>
                                    )}
                                    
                                    <IconComponent
                                        className={`w-5 h-5 flex-shrink-0 transition-colors duration-200 relative z-10 ${
                                            isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'
                                        }`}
                                    />
                                    <span
                                        className={`transition-colors duration-200 text-sm relative z-10 ${
                                            isActive ? 'text-white font-semibold' : 'text-gray-300 group-hover:text-white'
                                        }`}
                                    >
                                        {label}
                                    </span>
                                </>
                            )}
                        </NavLink>
                    ))}
                </div>

                {/* Bottom User Section */}
                <div className="w-full border-t border-[#2b2d31] p-4 px-5 flex items-center justify-between bg-black/20 backdrop-blur-sm">
                    <div
                        onClick={() => openUserProfile()}
                        className="flex gap-3 items-center cursor-pointer hover:opacity-80 transition flex-1 min-w-0 group"
                    >
                        <div className="relative">
                            <img 
                                src={user.imageUrl} 
                                alt="User Avatar" 
                                className="w-8 h-8 rounded-full flex-shrink-0 border border-[#2b2d31]" 
                            />
                        </div>
                        <span className="text-gray-300 text-sm truncate group-hover:text-white transition-colors">
                            {user.fullName}
                        </span>
                    </div>

                    <button
                        onClick={() => signOut()}
                        className="text-gray-400 hover:text-[#FF6EC7] transition-colors cursor-pointer ml-2 flex-shrink-0 p-1 rounded-full hover:bg-white/5"
                        title="Log Out"
                    >
                        <LogOut className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar