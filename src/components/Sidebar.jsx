import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { useClerk } from '@clerk/clerk-react'
import { House, Icon, Hash, Image, Eraser, Scissors, FileText, Users, SquarePen } from 'lucide-react'
import { NavLink } from 'react-router-dom'


const navItems = [
    { to: '/ai', label: 'Dashboard', icon: House },
    { to: '/ai/Write-article', label: 'Write Article', icon: SquarePen },
    { to: '/ai/Blog-titles', label: 'Blog Titles', icon: Hash },
    { to: '/ai/generative-images', label: 'Generative Images', icon: Image },
    { to: '/ai/remove-background', label: 'Remove Background', icon: Eraser },
    { to: '/ai/remove-object', label: 'Remove Object', icon: Scissors },
    { to: '/ai/review-resume', label: 'Review Resume', icon: FileText },
    { to: '/ai/Community', label: 'Community', icon: Users },
]

const Sidebar = ({ sidebar, setSidebar }) => {

    const { user } = useUser()
    const { signOut, openSignIn } = useClerk()


    return (
        <div className="w-60 bg-white border-r border-gray-200 flex flex-col justify-start items-center max-sm:absolute top-14 bottom-0 transition-all duration-300 ease-in-out
    ${sidebar ? 'translate-x-0' : 'max-sm:translate-x-full'}">

            {/* User Section */}
            <div className="py-6 w-full text-center">
                <img
                    src={user.imageUrl}
                    alt="User Avatar"
                    className="w-14 h-14 rounded-full mx-auto border border-gray-300 shadow-sm"
                />
                <h1 className="text-lg font-semibold mt-2">{user.fullName}</h1>
            </div>

            {/* Nav Section */}
            <div className="px-4 text-sm font-medium w-full space-y-2">
                {navItems.map(({ to, label, icon: Icon }) => (
                    <NavLink
                        key={to}
                        to={to}
                        end={to === '/ai'}
                        onClick={() => setSidebar(false)}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 ease-in-out 
         ${isActive
                                ? 'bg-gradient-to-r from-[#53198e] via-[#E100FF] to-[#FF6EC7] text-white shadow-lg scale-105'
                                : 'hover:bg-gradient-to-r hover:from-[#2555d8] hover:to-[#E0E7FF] hover:scale-105'}`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                <Icon
                                    className={`w-5 h-5 transition-colors duration-200 ${isActive ? 'text-white' : 'text-gray-600 group-hover:text-gray-700'
                                        }`}
                                />
                                <span
                                    className={`transition-colors duration-200 ${isActive ? 'text-white font-semibold' : 'text-gray-700'
                                        }`}
                                >
                                    {label}
                                </span>
                            </>
                        )}
                    </NavLink>
                ))}
            </div>

            <div className="w-full border-t border-gray-200 p-4 px-7 flex items-center justify-between">
                <div
                    onClick={openUserProfile}
                    className="flex gap-2 items-center cursor-pointer"
                >
                    <img src={user.imageUrl} alt="User Avatar" className="w-8 h-8 rounded-full" />
                    <span className="text-gray-700">{user.fullName}</span>
                </div>

                <div
                    onClick={signOut}
                    className="w-4.5 text-gray-400 hover:text-gray-700 transition cursor-pointer"
                >
                    Log Out
                </div>
            </div>

        </div>

    )
}
export default Sidebar