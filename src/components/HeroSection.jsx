import React from "react";
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
  return (
    <section className="bg-[#FDF0D5] py-16 md:py-24" id="home">
      <div className="container mx-auto px-4 md:px-8">
        {/* Center Everything */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-[#C1121F] text-4xl font-bold mb-4 mt-6">
            Mujahid Ali Rattar
          </h1>

          <div className="text-xl font-semibold text-[#C1121F] mb-4 h-8">
            <Typewriter
              options={{
                strings: ['Web Developer', 'UI Designer', 'SQL Developer', 'DBA'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <p className="text-[#2B2D42] mb-6 max-w-2x5 text-center px-4">
            I believe great things can be achieved through the use of technology and research.
            But those are merely the tools. Behind the tools are the people.
            Teamwork and passion, those are what matter the most.
          </p>

          {/* Call to Action */}
          <a
            href="/MAR CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-[#2B2D42] hover:text-[#C1121F] hover:border-[#FDF0D5] border transition-all"
            title="Download Resume"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};


export default HeroSection;
