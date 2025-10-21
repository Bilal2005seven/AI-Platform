import React from 'react';
import { PricingTable } from '@clerk/clerk-react';

const Plan = () => {
  return (
    <div className="relative max-w-5xl mx-auto my-32 px-4 sm:px-20 xl:px-32 z-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 -z-10 rounded-3xl blur-3xl opacity-30"></div>

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className=" text-4xl sm:text-5xl font-bold bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Choose Your Plan
        </h2>
        <p className="mt-4 text-black max-w-lg mx-auto text-sm sm:text-base">
          Start for free and scale up as you grow. Find the perfect plan for your content creation needs.
        </p>
      </div>

      {/* Pricing Table Container */}
      <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:scale-[1.03] transition-transform duration-300 max-sm:mx-4">
        <PricingTable />
      </div>

      {/* Optional Glow Effect */}
      <div className="absolute inset-0 rounded-3xl border border-white/20 pointer-events-none shadow-[0_0_50px_rgba(255,255,255,0.1)]"></div>
    </div>
  );
};

export default Plan;
