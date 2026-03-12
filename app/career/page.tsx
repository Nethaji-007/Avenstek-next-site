"use client";

import React, { useState } from 'react';

interface Job {
  id: number;
  title: string;
  description: string;
  location: string;
  type: string;
  category: string;
}

const CareersPage = () => {
  const [activeCategory, setActiveCategory] = useState("View all");

  const categories = ["View all", "Development", "Design", "Marketing", "Customer Service", "Operations", "Finance", "Management"];

  const jobOpenings: Job[] = [
    { id: 1, title: "Product Designer", description: "We're looking for a mid-level product designer to join our team.", location: "Remote", type: "Full-time", category: "Design" },
    { id: 2, title: "Frontend Developer", description: "We're looking for an experienced frontend developer to join our team.", location: "Remote", type: "Full-time", category: "Development" },
    { id: 3, title: "Full Stack Developer", description: "We're looking for a mid-level full stack developer to join our team.", location: "Remote", type: "Full-time", category: "Development" }
  ];

  const filteredJobs = activeCategory === "View all" 
    ? jobOpenings 
    : jobOpenings.filter(job => job.category === activeCategory);

  return (
    <div className="min-h-screen bg-white font-sans text-[#213e6c]">
      <header className="py-16 text-center border-b border-gray-100">
        <h1 className="text-4xl font-bold text-[#213e6c]">Careers</h1>
        <div className="mt-4 flex justify-center">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-12">
          <span className="px-4 py-1 rounded-full border border-orange-200 text-orange-500 text-sm font-medium">
            We're Hiring
          </span>
          <h2 className="text-6xl font-extrabold text-[#213e6c] mt-6 mb-4 leading-tight">
            Be part of our mission
          </h2>
          <p className="text-gray-500 text-lg max-w-3xl leading-relaxed">
            We're looking for passionate people to join us on our mission. We value flat hierarchies, clear communication, and full ownership and responsibility.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full border transition-all font-medium ${
                activeCategory === cat 
                ? "bg-[#213e6c] text-white border-[#213e6c]" 
                : "border-[#213e6c] text-[#213e6c] hover:bg-slate-50" 
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <hr className="border-gray-300 mb-0" />

        
        <section>
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div key={job.id} className="py-12 border-b border-[#213e6c]">
                <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                  <div className="flex-1">
                    
                    <h3 className="text-4xl font-bold text-[#213e6c] mb-3 tracking-tight">
                      {job.title}
                    </h3>
                    <p className="text-gray-500 text-xl mb-6">
                      {job.description}
                    </p>
                    
                    
                    <div className="flex gap-3">
                      <span className="flex items-center gap-2 px-4 py-2 border border-[#213e6c] rounded-full text-[#213e6c] font-medium text-sm">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
                        </svg>
                        {job.location}
                      </span>
                      <span className="flex items-center gap-2 px-4 py-2 border border-[#213e6c] rounded-full text-[#213e6c] font-medium text-sm">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                        </svg>
                        {job.type}
                      </span>
                    </div>
                  </div>

                      
                  <a 
                    href={`/apply/${job.id}`} 
                    className="flex items-center gap-2 font-bold text-2xl text-[#213e6c] hover:opacity-70 transition-opacity shrink-0"
                  >
                    Apply 
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="py-20 text-center text-gray-400 text-xl">
              No positions open in this category.
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default CareersPage;