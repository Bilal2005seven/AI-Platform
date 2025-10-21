import React from 'react';
import { AiToolsData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

const AiTools = () => {
    const navigate = useNavigate();
    const { user } = useUser();

    return (
        <div className="px-4 sm:px-20 xl:px-32 my-24">
            {/* Header Section */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
                <h2 className="text-slate-700 text-[42px] font-semibold">
                    Powerful AI Tools
                </h2>
                <p className="text-gray-500 max-w-lg mx-auto">
                    Everything you need to create, enhance, and optimize your content with cutting-edge AI technology.
                </p>
            </div>

            {/* Tools Grid */}
            <div className="flex flex-wrap mt-10 justify-center">
                {AiToolsData.map((tool, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            if (user) navigate(tool.path);
                            else navigate('/sign-in'); // fallback if user is not logged in
                        }}
                        className="p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                user ? navigate(tool.path) : navigate('/sign-in');
                            }
                        }}
                    >
                        {/* Gradient Icon */}
                        <div
                            className="h-14 w-14 p-3 rounded-xl flex items-center justify-center"
                            style={{
                                backgroundImage: `linear-gradient(to bottom right, ${tool.bg.from}, ${tool.bg.to})`,
                            }}
                        >
                            <tool.Icon className="h-8 w-8 text-white" />
                        </div>

                        {/* Tool Info */}
                        <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-800">
                            {tool.title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-4">{tool.description}</p>
                        {tool.name && (
                            <h4 className="text-md font-medium text-gray-700">{tool.name}</h4>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AiTools;