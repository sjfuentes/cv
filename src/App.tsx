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
                href="#certifications"
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 py-2 px-2 rounded"
                onClick={() => handleSectionChange("certifications")}
              >
                Certifications
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
            alt="Santiago Fuentes"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Santiago Fuentes</h2>
        <p className="text-xl text-gray-600 mb-4">DevOps Engineer</p>
        <p className="text-gray-500 mb-4">Ambato, Ecuador | +593 983299756 | sjfuentes@outlook.com</p>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Highly motivated and detail-oriented Infrastructure and DevOps Engineer eager to deploy and managed
          infrastructure in cloud environments such as AWS and Azure, especially with Infrastructure as Code tools 
          while developing CI/CD pipelines to automate the deployment of infrastrure and applicacion code.
        </p>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Experience</h3>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h4 className="text-xl font-semibold text-gray-800 text-center">Infrastructure Consultant</h4>
            <p className="text-gray-600 text-center">Thoughtworks ( Dic 2022 - present)</p>
              <p className="text-gray-500 mt-4 font-semibold">Cloud Modernization Project</p>
                <p className="text-gray-600">I have been working on the following points:</p>
                  <ul className="text-gray-600 list-disc pl-6 mt-2">
                    <li>
                      Lead DevOps Engineer for a migration process from Kubernetes to
                      AWS ECS, maintaining the same architecture but with AWS
                      manages resources, creating and building docker images that will
                      host the code with an automated process for building and
                      deploying using Jenkins as CI/CD tool.
                    </li>
                    <li>
                      Implementation of IaC configuration for a blue/green deployment strategy
                      for Serverless Sonarqube service.
                    </li>
                    <li>
                      Managing AWS and Azure infrastructure in
                      different environment from Sandbox to Production using tools like
                      Terraform to keep all the infrastructure in code and enable
                      automation for deployment process with Jenkins pipelines.
                    </li>
                    <li>
                      Support the private communication between Azure and AWS with 
                      the use of privete DNS resolution configuration in both sides 
                      of the communication.
                    </li>
                    <li>
                      Configuration and support of the infrastructure that the Data
                      Science Team required in Azure with the use of Data Bricks.
                    </li>
                    <li>
                      Artifacts store with Nexus and scanning of application code using
                      Sonarqube
                    </li>
                    <li>
                      High level of engagement with the client.
                    </li>
                    <li>
                      Other technologies used in this project are Docker, Prisma,
                      Sonatype IQ Server, Azure Devops Board.
                    </li>
                  </ul>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h4 className="text-xl font-semibold text-gray-800 text-center">Developer Consultant -  Graduated</h4>
            <p className="text-gray-600 text-center">Thoughtworks ( March 2022 - Dec 2022)</p>
              <p className="text-gray-500 mt-4 font-semibold"> Thoughtworks Internal Project, Benefits Portal </p>
                <p className="text-gray-600">During this project, I worked on:</p>
                  <ul className="text-gray-600 list-disc pl-6 mt-2">
                    <li>
                      Security Champion for the project, developing the incident
                      response plan for it.
                    </li>
                    <li>
                      Provision and mantainance of the Dev and QA environments for the 
                      application in Google Cloud.
                    </li>
                    <li>
                      Create Docker images for development of the frontend and backend.
                    </li>
                    <li>
                      Tech Stack: Docker, Google Cloud, CircleCI, Angular, Tailwind. Typescript,
                      Java, Spring Boot.
                    </li>
                  </ul>
              <br/>
              <p className="text-gray-500 mt-4 font-semibold"> Thoughtworks Internal Project, Staffing System </p>
                <p className="text-gray-600">For this project, I was in charge of the following:</p>
                  <ul className="text-gray-600 list-disc pl-6 mt-2">
                    <li>
                      Development of the frontend using React and Typescript with conitnuos 
                      communication with the backend.
                    </li>
                    <li>
                      Unit test implementation of the frontend and backend to ensure a 
                      good testing coverage.
                    </li>
                    <li>
                      Implement backend functinonality with NodeJS and data store on PostgreSQL DB.
                    </li>
                    <li>
                      Tech Stack: React, Typescript, Tailwind, NodeJS, Express, Sequalize,
                      PostgreSQL, Google Cloud, CircleCI, Docker, Docker compose.
                    </li>
                  </ul>
              <br/>
              <p className="text-gray-500 mt-4 font-semibold">Thoughtworks University Program</p>
                <p className="text-gray-600">During this program I had:</p>
                  <ul className="text-gray-600 list-disc pl-6 mt-2">
                    <li>
                      A fully remote, 3 weeks long, global development program that
                      included 1:1 coaching, daily skills sessions, andon-going
                      mentoring.
                    </li>
                    <li>
                      Tech Stack: React, Java, Spring Boot, JavaScript, Gitlab, Bootstrap.
                    </li>
                  </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Education</h3>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h4 className="text-xl font-semibold text-gray-800">Master in Software Engineering</h4>
            <p className="text-gray-600">Universidad de los Andes Colombia ( Jan 2025 - present )</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h4 className="text-xl font-semibold text-gray-800">Bachelor in Mechatronic Engineering</h4>
            <p className="text-gray-600">Armed Forces University ESPE ( Oct 2015 - Feb 2022 )</p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      
      <section id="certifications" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Certifications</h3>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h4 className="text-xl font-semibold text-gray-800">GitHub Foundations</h4>
            <p className="text-gray-600">GitHub (2024)</p>
            <a href="https://www.credly.com/badges/bfa67734-fe44-4788-8b92-2fa8328ffb45/public_url" className="text-blue-500" target="_blank">View on Credly</a>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h4 className="text-xl font-semibold text-gray-800">AWS Certified Solutions Architect - Associate</h4>
            <p className="text-gray-600">Amazon Web Services (2023)</p>
            <a href="https://www.credly.com/badges/87e8dfc5-46d3-4a21-8293-8f8a4fc697b7/public_url" className="text-blue-500" target="_blank">View on Credly</a>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h4 className="text-xl font-semibold text-gray-800">HashiCorp Certified Terraform Associate (003)</h4>
            <p className="text-gray-600">HashiCorp (2023)</p>
            <a href="https://www.credly.com/badges/465c8b93-b518-4930-adec-0324ac6e3427/public_url" className="text-blue-500" target="_blank">View on Credly</a>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h4 className="text-xl font-semibold text-gray-800">Microsoft Certified: Azure Fundamentals (AZ-900)</h4>
            <p className="text-gray-600">Microsoft (2023)</p>
            <a href="https://www.credly.com/badges/46dbc48e-fec3-472b-b06e-25c2fa035d42/public_url" className="text-blue-500" target="_blank">View on Credly</a>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h4 className="text-xl font-semibold text-gray-800">AWS Partner: Technical Accredited</h4>
            <p className="text-gray-600">Amazon Web Services (2022)</p>
            <a href="https://www.credly.com/badges/123bab1c-4874-4cd7-9bfb-5f2836fff359/public_url" className="text-blue-500" target="_blank">View on Credly</a>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h4 className="text-xl font-semibold text-gray-800">AWS Partner: Cloud Economics Essentials</h4>
            <p className="text-gray-600">Amazon Web Services (2022)</p>
            <a href="https://www.credly.com/badges/bc1a3b61-b57e-410c-94a6-946ef8855419/public_url" className="text-blue-500" target="_blank">View on Credly</a>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h4 className="text-xl font-semibold text-gray-800">Training in leadership, public speaking, mental reengineering,
            memory, and speed reading</h4>
            <p className="text-gray-600">ILVEM (2011)</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h4 className="text-xl font-semibold text-gray-800">Toefl ITP</h4>
            <p className="text-gray-600"> B2 Level (2016)</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Skills</h3>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">DevOps Skills</h4>
            <ul className="text-gray-600">
              <li>AWS, Azure</li>
              <li>Terraform </li>
              <li>Jenkins, GitHub Actions</li>
              <li>Docker, Kaniko</li>
              <li>Kubernetes, Docker Compose</li>
              <li>SonarQube, Nexus Sonatype</li>
            </ul>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Frontend Skills</h4>
            <ul className="text-gray-600">
              <li>HTML, CSS</li>
              <li>TypeScript, JavaScript</li>
              <li>React, Angular</li>
              <li>Bootstrap, Tailwind CSS</li>
            </ul>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Backend Skills</h4>
            <ul className="text-gray-600">
              <li>NodeJS, Express</li>
              <li>MongoDB, PostgreSQL</li>
              <li>Postman, DBeaver</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Projects</h3>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h4 className="text-xl font-semibold text-gray-800">Curriculum Vitae Project</h4>
            <p className="text-gray-600 text-left mt-2 mb-2">This project contians the react code that implements a simple website
              to showcase a curriculum vitae through a web page. It will also contains the infrastructure
              code that support the website implementation on AWS S3.
            </p>
            <a href="https://github.com/sjfuentes/cv" className="text-blue-500" target="_blank">
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact</h3>
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <p className="mb-4 text-center">Feel free to reach out to me through the following platforms:</p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          {/* GitHub Link */}
          <a
            href="https://github.com/sjfuentes" target="_blank"
          >
            <div className="flex items-center mb-5">
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub"
                width="30"
                height="30"
                className="me-2"
              />
              <span>GitHub</span>
            </div>
          </a>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          {/* LinkeIn Link */}
          <a
            href="https://linkedin.com/in/sjfuentes" target="_blank"
          >
            <div className="flex items-center mb-5">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg"
                alt="GitHub"
                width="30"
                height="30"
                className="me-2"
              />
              <span>GitHub</span>
            </div>
          </a>
        </div>
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">Or Email me at:</p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          {/* Email Link */}
          <a
            href="mailto:sjfuentes@outlook.com" target="_blank"
          >
            <div className="flex items-center mb-5">
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                alt="GitHub"
                width="30"
                height="30"
                className="me-2"
              />
              <span>sjfuentes@outlook.com</span>
            </div>
          </a>
        </div>
        </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default App;
