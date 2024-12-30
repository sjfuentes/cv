import React, { useState } from "react";

const App = () => {
  const [, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSectionChange = (section: React.SetStateAction<string>) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="font-sans bg-gray-50 scroll-smooth">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg fixed w-full top-0 left-0 z-10">
        <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">
            <a
              href="#home"
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 py-2 px-4 rounded"
              onClick={() => handleSectionChange("home")}
            >
              Santiago Fuentes
            </a>
          </h1>
          {/* Mobile Hamburger Icon */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggle menu visibility
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <ul className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } md:flex space-x-6 md:space-x-10 md:static absolute left-0 right-0 top-full bg-white shadow-md md:shadow-none md:bg-transparent`}>
            <li className="text-center py-2 ml-6">
              <a
                href="#experience"
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 py-2 px-2 rounded"
                onClick={() => handleSectionChange("experience")}
              >
                Experience
              </a>
            </li>
            <li className="text-center py-2">
              <a
                href="#education"
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 py-2 px-2 rounded"
                onClick={() => handleSectionChange("education")}
              >
                Education
              </a>
            </li>
            <li className="text-center py-2">
              <a
                href="#skills"
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 py-2 px-2 rounded"
                onClick={() => handleSectionChange("skills")}
              >
                Skills
              </a>
            </li>
            <li className="text-center py-2">
              <a
                href="#projects"
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 py-2 px-2 rounded"
                onClick={() => handleSectionChange("projects")}
              >
                Projects
              </a>
            </li>
            <li className="text-center py-2">
              <a
                href="#certifications"
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 py-2 px-2 rounded"
                onClick={() => handleSectionChange("certifications")}
              >
                Certifications
              </a>
            </li>
            <li className="text-center py-2">
              <a
                href="#contact"
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 py-2 px-2 rounded"
                onClick={() => handleSectionChange("contact")}
              >
                Contact
              </a>
            </li>
            <li className="text-center py-2">
              <a
                href="/cv.pdf" // Link to the CV file in the public folder
                download="John_Doe_CV" // Optional: Specify the filename for the download
                className="bg-blue-500 text-white px-2 py-2 rounded-lg hover:bg-blue-700"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Home Section */}
      <section
        id="home"
        className="pt-24 pb-16 flex flex-col items-center justify-center text-center bg-white"
      >
        <div className="w-40 h-40 mb-6 overflow-hidden rounded-full border-4 border-gray-300">
          <img
            src="/foto.png" // Replace with your actual image path
            alt="John Doe"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">John Doe</h2>
        <p className="text-xl text-gray-600 mb-4">Software Engineer</p>
        <p className="text-gray-500 mb-4">New York, USA | (123) 456-7890 | john.doe@example.com</p>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Highly motivated and detail-oriented software engineer with 5+ years of experience in developing scalable and efficient software solutions. Proficient in a range of programming languages, including Java, Python, and C++.
        </p>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Experience</h3>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h4 className="text-xl font-semibold text-gray-800">Software Engineer</h4>
            <p className="text-gray-600">Company Name (2020 - 2022)</p>
            <p className="text-gray-500 mt-2">
              Developed scalable backend systems, optimized application performance, and collaborated with cross-functional teams.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h4 className="text-xl font-semibold text-gray-800">Junior Software Engineer</h4>
            <p className="text-gray-600">Company Name (2018 - 2020)</p>
            <p className="text-gray-500 mt-2">
              Worked on full-stack applications, enhancing the user experience and improving system performance.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Education</h3>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h4 className="text-xl font-semibold text-gray-800">Bachelor of Science in Computer Science</h4>
            <p className="text-gray-600">University Name (2014 - 2018)</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Skills</h3>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h4 className="text-xl font-semibold text-gray-800">Frontend Skills</h4>
            <ul className="text-gray-600 list-disc pl-6">
              <li>HTML, CSS, JavaScript</li>
              <li>React</li>
            </ul>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h4 className="text-xl font-semibold text-gray-800">Backend Skills</h4>
            <ul className="text-gray-600 list-disc pl-6">
              <li>Node.js, Express</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h4 className="text-xl font-semibold text-gray-800">DevOps Skills</h4>
            <ul className="text-gray-600 list-disc pl-6">
              <li>AWS, Azure</li>
              <li>Terraform</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Projects</h3>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h4 className="text-xl font-semibold text-gray-800">Project 1</h4>
            <p className="text-gray-600">A brief description of the project.</p>
            <a href="https://github.com/username/project1" target="_blank" rel="noopener noreferrer" className="text-blue-500">
              View on GitHub
            </a>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h4 className="text-xl font-semibold text-gray-800">Project 2</h4>
            <p className="text-gray-600">A brief description of the project.</p>
            <a href="https://github.com/username/project2" target="_blank" rel="noopener noreferrer" className="text-blue-500">
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Certifications</h3>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h4 className="text-xl font-semibold text-gray-800">Certified Kubernetes Administrator (CKA)</h4>
            <p className="text-gray-600">Cloud Native Computing Foundation (2022)</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h4 className="text-xl font-semibold text-gray-800">AWS Certified Solutions Architect</h4>
            <p className="text-gray-600">Amazon Web Services (2021)</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h4 className="text-xl font-semibold text-gray-800">Google Cloud Professional Cloud Architect</h4>
            <p className="text-gray-600">Google Cloud (2020)</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact</h3>
          <form className="max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            />
            <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default App;
