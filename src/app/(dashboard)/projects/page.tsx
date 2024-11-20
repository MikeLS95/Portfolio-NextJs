import React from "react";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="text-gray-900 max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-purple-200">
        My Projects
      </h1>

      <div className="flex flex-col gap-8">
        <div className="bg-white shadow-lg p-8 border border-gray-200 rounded-lg mb-8">
          <p className="text-lg leading-relaxed mb-4 text-center">
            Below are all of the projects I have worked on over the course of my
            career.
          </p>
          <p className="text-lg leading-relaxed text-center">
            The section titles (like "Coder Academy Projects") link to detailed
            pages about those project categories, while individual project
            titles link directly to their GitHub repositories where you can
            explore the code and documentation.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="bg-white shadow-lg p-8 border border-gray-200 rounded-lg">
          <h2 className="text-3xl font-bold text-indigo-900 mb-6 text-center">
            <Link
              href="/projects/labrys"
              className="text-indigo-600 hover:underline"
            >
              Work Projects
            </Link>
          </h2>
          <h3 className="text-2xl font-semibold text-indigo-700 mb-4 text-center">
            Labrys
          </h3>
          <p className="text-lg leading-relaxed mb-8 text-center">
            Projects I contributed to during my time at Labrys, focusing on
            real-world applications and professional development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow flex flex-col items-center">
              <Link
                href="https://github.com/MikeLS95/pump.task"
                className="text-xl font-semibold text-indigo-800 mb-3 text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pump.Task
              </Link>
              <p className="text-gray-700 mb-4 text-center">
                Pump.Task is a modern project management application designed to
                streamline workflows, enhance collaboration, and simplify task
                tracking. With advanced features like NFT interaction and Web3
                integration, it offers an innovative way to gamify task
                management and reward achievements. The platform is built for
                scalability and a seamless user experience, utilizing
                cutting-edge technologies to deliver high performance.
              </p>
              <h4 className="text-sm font-medium text-indigo-600 uppercase tracking-wider text-center">
                Tech Stack:
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 pl-4">
                <li>
                  Next.js: Framework for React with server-side rendering and
                  static site generation.
                </li>
                <li>React: JavaScript library for building user interfaces.</li>
                <li>
                  Tailwind CSS: Utility-first CSS framework for responsive
                  design.
                </li>
                <li>
                  TypeScript: Superset of JavaScript that adds static typing.
                </li>
                <li>MongoDB: NoSQL database for storing application data.</li>
                <li>
                  ThirdWeb: Enables NFT interaction and integration, allowing
                  users to mint and manage rewards through blockchain
                  technology.
                </li>
                <li>
                  tRPC: Simplifies building type-safe APIs for the application.
                </li>
                <li>
                  SendGrid: Handles email notifications and user communication.
                </li>
                <li>
                  Turborepo: High-performance build system for JavaScript and
                  TypeScript codebases.
                </li>
                <li>Vercel: Hosting platform for deploying the application.</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow flex flex-col items-center">
              <Link
                href="https://github.com/MikeLS95/Tech-assessment"
                className="text-xl font-semibold text-indigo-800 mb-3 text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tech Assessment
              </Link>
              <p className="text-gray-700 mb-4 text-center">
                This project is a technical assessment developed for Labrys,
                showcasing proficiency in building web applications using modern
                technologies. The application demonstrates the ability to create
                efficient, scalable, and user-friendly interfaces, adhering to
                best practices in web development.
              </p>
              <h4 className="text-sm font-medium text-indigo-600 uppercase tracking-wider text-center">
                Tech Stack:
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 pl-4">
                <li>
                  Next.js: Framework for React with server-side rendering and
                  static site generation.
                </li>
                <li>React: JavaScript library for building user interfaces.</li>
                <li>
                  Tailwind CSS: Utility-first CSS framework for responsive
                  design.
                </li>
                <li>
                  TypeScript: Superset of JavaScript that adds static typing.
                </li>
                <li>Vercel: Hosting platform for deploying the application.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg p-8 border border-gray-200 rounded-lg">
          <h2 className="text-3xl font-bold text-indigo-900 mb-6 text-center">
            <Link
              href="/projects/personal"
              className="text-indigo-600 hover:underline"
            >
              Personal Projects
            </Link>
          </h2>
          <p className="text-lg leading-relaxed mb-8 text-center">
            Projects I have worked on independently, reflecting my passion for
            coding and exploring new technologies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow flex flex-col items-center">
              <Link
                href="https://github.com/MikeLS95/Portfolio-NextJs"
                className="text-xl font-semibold text-indigo-800 mb-3 text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next.js Portfolio
              </Link>
              <p className="text-gray-700 mb-4 text-center">
                Welcome to my portfolio! I built this website using Next.js to
                showcase my skills, projects, and professional experiences. This
                platform reflects who I am as a developer, highlighting my work
                and the technologies I’m passionate about. With the power of
                Next.js, I’ve ensured the site is fast, responsive, and provides
                a great user experience. Feel free to explore and learn more
                about what I’ve been working on!
              </p>
              <h4 className="text-sm font-medium text-indigo-600 uppercase tracking-wider text-center">
                Tech Stack:
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 pl-4">
                <li>
                  Next.js: Framework for React with server-side rendering and
                  static site generation.
                </li>
                <li>React: JavaScript library for building user interfaces.</li>
                <li>
                  Tailwind CSS: Utility-first CSS framework for responsive
                  design.
                </li>
                <li>
                  JavaScript/TypeScript: Core programming languages used in the
                  app.
                </li>
                <li>Vercel: Hosting platform for deploying the website.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg p-8 border border-gray-200 rounded-lg">
          <h2 className="text-3xl font-bold text-indigo-900 mb-6 text-center">
            <Link
              href="/projects/ca"
              className="text-indigo-600 hover:underline"
            >
              Coder Academy Projects
            </Link>
          </h2>
          <p className="text-lg leading-relaxed mb-8 text-center">
            A collection of projects completed during my time at Coder Academy,
            showcasing my learning journey and technical growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow flex flex-col items-center">
              <Link
                href="https://github.com/MikeLS95/Portfolio"
                className="text-xl font-semibold text-indigo-800 mb-3 text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                My First Portfolio
              </Link>
              <p className="text-gray-700 mb-4 text-center">
                The "Portfolio Assignment" is a personal website developed to
                showcase professional history and projects. Created as part of a
                term assignment at Coder Academy, the site features a minimalist
                design with a retro color scheme to highlight content without
                distractions. It includes a navigation bar for easy access to
                different sections, a downloadable resume link, images for
                personal branding, and a contact form powered by Formspree for
                direct communication.
              </p>
              <h4 className="text-sm font-medium text-indigo-600 uppercase tracking-wider text-center">
                Tech Stack:
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 pl-4">
                <li>HTML: Structures the content and layout of the website.</li>
                <li>
                  CSS: Styles the website, implementing the retro color scheme
                  and responsive design.
                </li>
                <li>
                  Formspree: Manages the contact form, enabling users to send
                  messages directly.
                </li>
                <li>
                  Ionic.io: Provides icons for GitHub and LinkedIn, linking to
                  social profiles.
                </li>
                <li>
                  Netlify: Hosts and deploys the website, ensuring accessibility
                  and performance.
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow flex flex-col items-center">
              <Link
                href="https://github.com/MikeLS95/Escape-Room"
                className="text-xl font-semibold text-indigo-800 mb-3 text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Grid Based Escape Room
              </Link>
              <p className="text-gray-700 mb-4 text-center">
                The "Escape Room Game Terminal Application" is a grid-based
                escape room game developed as a terminal application. Players
                navigate through a hidden 4x4 grid, discovering clues, locating
                a key, and finding the exit to escape the room. The game is
                designed to be played via the command line interface.
              </p>
              <h4 className="text-sm font-medium text-indigo-600 uppercase tracking-wider text-center">
                Tech Stack:
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 pl-4">
                <li>
                  Python: The primary programming language used to develop the
                  game's logic and functionality.
                </li>
                <li>
                  PEP 8: The Python Enhancement Proposal used as the style guide
                  to ensure code readability and consistency.
                </li>
                <li>
                  Figlet Module: A Python library utilized to generate the
                  banner displayed in the game's menu.
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow flex flex-col items-center">
              <Link
                href="https://github.com/MikeLS95/Customer-Profile-API"
                className="text-xl font-semibold text-indigo-800 mb-3 text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Customer Travel Profile API
              </Link>
              <p className="text-gray-700 mb-4 text-center">
                The Customer Profile API is a basic project designed to manage
                and maintain customer information. It includes essential
                features for creating, retrieving, updating, and deleting
                customer profiles, ensuring data integrity and accessibility.
                This project serves as an exercise in developing a simple API to
                manage customer data efficiently.
              </p>
              <h4 className="text-sm font-medium text-indigo-600 uppercase tracking-wider text-center">
                Tech Stack:
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 pl-4">
                <li>
                  Flask: Lightweight web framework for building Python-based
                  APIs and applications.
                </li>
                <li>
                  PostgreSQL: Powerful open-source relational database
                  management system for data storage.
                </li>
                <li>
                  SQLAlchemy: Python ORM library for interacting with databases
                  using objects.
                </li>
                <li>
                  Marshmallow: Serialization and validation library for
                  converting data to and from Python objects.
                </li>
                <li>
                  Psycopg2: PostgreSQL adapter for Python, facilitating database
                  communication.
                </li>
                <li>
                  JWT Manager: Tool for managing JSON Web Tokens (JWT) for
                  authentication.
                </li>
                <li>
                  Bcrypt: Library for hashing passwords to enhance security.
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow flex flex-col items-center">
              <Link
                href="https://github.com/MikeLS95/Pawfect-Care"
                className="text-xl font-semibold text-indigo-800 mb-3 text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pawfect Care - Full Stack App
              </Link>
              <p className="text-gray-700 mb-4 text-center">
                Pawfect Care is a comprehensive web application designed to
                connect pet owners with a variety of pet care services. The
                platform enables users to book veterinary appointments, schedule
                daycare sessions, and request emergency ambulance services for
                their pets, all through an intuitive and user-friendly
                interface. The application ensures a seamless experience by
                integrating essential features tailored to pet owners' needs.
              </p>
              <h4 className="text-sm font-medium text-indigo-600 uppercase tracking-wider text-center">
                Tech Stack:
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 pl-4">
                <li>MongoDB: NoSQL database for storing pet care data.</li>
                <li>Express.js: Framework for building RESTful APIs.</li>
                <li>
                  React: JavaScript library for building dynamic user
                  interfaces.
                </li>
                <li>
                  Node.js: Backend runtime for handling application logic.
                </li>
                <li>
                  CSS: Styling language for adding visual styles to the website.
                </li>

                <li>
                  Netlify: Deployment platform used to host the frontend
                  application, providing easy scalability and accessibility.
                </li>

                <li>
                  Render: Deployment platform used to host the backend services,
                  ensuring efficient server operations.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
