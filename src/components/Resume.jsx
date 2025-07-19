import React from "react";
import AboutImage from "../assets/images/bg.png";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";


const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-[#FDF0D5]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-6 text-center">
          My Resume
        </h2>
        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center">
          {/* Left Column */}
          <div className="w-full md:w-1/2 md:mr-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-primary mb-4 text-center">
                Skills
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>ReactJS</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Firebase</li>
                <li>DBA</li>
                <li>HTML, CSS, JavaScript</li>
                <li>Git</li>
              </ul>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4 text-center">
                Education
              </h3>
              <p className="font-medium">Bachelors in Information Technology</p>
              <p>Undergraduate from Sindh Madressatul Islam University Karachi Sindh (2027)</p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4 text-center">
                Certification
              </h3>
              <p className="font-medium">
                MySQL DBA Administrator (SQL Developer)
              </p>
              <p> Certified from Baitulislam Tech Park Karachi (July 2025)</p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4 text-center">
                Projects
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <a
                    className="text-primary font-semibold"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer">
                    Railway Management System (RMS)
                  </a>{" "}
                  - A Railway management app built with MongoDB, Apache Server, SQL,
                  and responsive website to collect data in background
                </li>
                <li>
                  <a
                    className="text-primary font-semibold"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer">
                    Inventory Management System
                  </a>{" "}
                  - A responsive single-page website for an Backery
                  built with HTML, CSS, and MongoDB
                </li>
                <li>
                  <a
                    className="text-primary font-semibold"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer">
                    To-doList
                  </a>{" "} 
                  - A to-do list application built with ReactJS and Tailwind CSS
                </li>
                <li>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold">
                    Death Calculator
                  </a>{" "}
                  - A Death calculator which can calculate your expected date of death from your DOB & health status with ReactJS and Firebase
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center sm:mb-0 mb-4">
            <img
              src={AboutImage}
              alt="Mujahid Ali Rattar"
              className="rounded-full object-cover w-48 h-48 mx-auto mb-6 border-4 border-primary"
            />
            <p className="text-xl font-medium">Mujahid Ali Rattar</p>
            <p className="text-lg text-primary font-semibold">
              Web Developer | SQL Developer
            </p>
            <a
              href="mailto:saam.sheron@example.com"
              className="text-lg text-primary mt-4 block">
              mujahidalirattar15@gmail.com
            </a>
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mt-6">
              <a
                href="https://www.linkedin.com/in/mujahidalirattar"
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedin className="text-2xl text-[#0077B5] hover:text-gray-400" />
              </a>
              <a
                href="https://github.com/mujahidalirattar3"
                target="_blank"
                rel="noopener noreferrer">
                <FaGithub className="text-2xl text-[#333] hover:text-gray-400" />
              </a>
              <a
                href="https://www.instagram.com/mujahidlirattar"
                target="_blank"
                rel="noopener noreferrer">
                <FaInstagram className="text-2xl text-[#E4405F] hover:text-gray-400" />
              </a>
              <a
                href="https://www.facebook.com/mujahidalirattar3"
                target="_blank"
                rel="noopener noreferrer">
                <FaFacebook className="text-2xl  hover:text-gray-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
