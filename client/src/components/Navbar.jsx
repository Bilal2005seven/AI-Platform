import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { Menu } from 'lucide-react';


const Navbar = ({ setSidebar }) => {
    const navigate = useNavigate();
    const { user } = useUser();
    const { openSignIn } = useClerk();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Me', path: '/about' },
    ];

    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full flex items-center justify-between px-2 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled
                ? 'bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-2 md:py-2.5'
                : 'py-2.5 md:py-3 text-white bg-gradient-to-r from-sky-100 via-blue-200 to-indigo-300'
                }`}
        >
            {/* Left Section - Menu + Logo */}
            <div className="flex items-center gap-4">
                {/* Sidebar Toggle Button (only shows when user is logged in) */}
                {user && (
                    <button
                        onClick={() => setSidebar(prev => !prev)}
                        className="text-gray-700 hover:text-gray-900 transition-colors lg:hidden"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                )}

                {/* Logo SVG */}
                <div
                    className="cursor-pointer"
                    onClick={() => navigate('/')}
                    style={{ height: '50px', transform: 'scaleX(1.02)' }}
                >
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 240 240"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient id="bilal7Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#6366F1" />
                                <stop offset="100%" stopColor="#06B6D4" />
                            </linearGradient>
                        </defs>
                        <rect width="240" height="240" rx="32" fill="url(#bilal7Gradient)" />
                        <text
                            x="50%"
                            y="50%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            fontFamily="Segoe UI, sans-serif"
                            fontSize="64"
                            fill="white"
                            fontWeight="bold"
                        >
                            Bilal7
                        </text>
                    </svg>
                </div>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8 font-medium">
                {navLinks.map((link, i) => (
                    <button
                        key={i}
                        onClick={() => navigate(link.path)}
                        className="group flex flex-col gap-0.5 text-black"
                    >
                        {link.name}
                        <span className="h-0.5 w-0 group-hover:w-full bg-white transition-all duration-300" />
                    </button>
                ))}
            </div>

            {/* Right Section */}
            <div className="hidden md:flex items-center gap-4">
                {user ? (
                    <UserButton afterSignOutUrl="/" />
                ) : (
                    <div
                        className="relative rainbow z-0 overflow-hidden p-[2px] rounded-full hover:scale-105 active:scale-100 transition duration-300 cursor-pointer"
                        onClick={openSignIn}
                    >
                        <button className="px-6 py-2 text-sm text-white rounded-full font-medium bg-gray-900">
                            Get Started
                        </button>
                    </div>
                )}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
                {!user && (
                    <svg
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`h-6 w-6 cursor-pointer`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                )}
                {user && <UserButton afterSignOutUrl="/" />}
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                {navLinks.map((link, i) => (
                    <button
                        key={i}
                        onClick={() => {
                            navigate(link.path);
                            setIsMenuOpen(false);
                        }}
                    >
                        {link.name}
                    </button>
                ))}

                <div
                    className="relative rainbow z-0 overflow-hidden p-[2px] rounded-full hover:scale-105 active:scale-100 transition duration-300 cursor-pointer"
                    onClick={openSignIn}
                >
                    <button className="px-8 py-2.5 text-sm text-white rounded-full font-medium bg-gray-900">
                        Get Started
                    </button>
                </div>
            </div>

            {/* Rainbow animation style */}
            <style>{`
                @keyframes rotate {
                    100% { transform: rotate(1turn); }
                }
                .rainbow::before {
                    content: '';
                    position: absolute;
                    z-index: -2;
                    left: -50%;
                    top: -50%;
                    width: 200%;
                    height: 200%;
                    background-position: 100% 50%;
                    background-repeat: no-repeat;
                    background-size: 50% 30%;
                    filter: blur(6px);
                    background-image: linear-gradient(#FF0A7F,#780EFF);
                    animation: rotate 4s linear infinite;
                }
            `}</style>
        </nav>
    );
};

export default Navbar;