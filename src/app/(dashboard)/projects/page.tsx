import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Maximize2 } from "lucide-react";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string | null;
  demoLink?: string;
  ytLink?: string;
  image: string;
  imageAlt: string;
};

type ProjectDialogProps = {
  project: Project;
};

const ProjectDialog: React.FC<ProjectDialogProps> = ({ project }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer flex flex-col items-center w-full group relative">
          <h3 className="text-xl font-semibold text-purple-100 mb-3 group-hover:text-purple-300">
            {project.title}
          </h3>
          <div className="w-full aspect-video relative rounded-lg overflow-hidden">
            <div className="absolute top-2 right-2 z-10 bg-black/20 p-2 rounded-full backdrop-blur-sm">
              <Maximize2 className="w-4 h-4 text-purple-100" />
            </div>
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[95vw] md:max-w-2xl h-[90vh] md:h-auto overflow-y-auto bg-gray-900/95 border-gray-700 [&>button]:text-purple-100 [&>button]:hover:text-purple-200 [&>button]:transition-colors [&>button]:bg-gray-800/50 [&>button]:p-1.5 [&>button]:rounded-full mx-4">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl font-bold text-purple-100 mb-4">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 md:space-y-6">
          <p className="text-sm md:text-base text-gray-300">
            {project.description}
          </p>

          <div>
            <h4 className="text-sm font-medium text-purple-200 uppercase tracking-wider mb-2">
              Tech Stack:
            </h4>
            <ul className="list-disc list-inside text-sm md:text-base text-gray-300 space-y-1 pl-4">
              {project.techStack.map((tech, index) => (
                <li key={index} className="break-words">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-4 pt-2">
            {project.githubLink ? (
              <Link
                href={project.githubLink}
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors text-center text-sm md:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </Link>
            ) : (
              <span className="bg-gray-600 text-white px-4 py-2 rounded text-center text-sm md:text-base">
                Repository not available
              </span>
            )}
            {project.demoLink && (
              <Link
                href={project.demoLink}
                className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors text-center text-sm md:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </Link>
            )}
            {project.ytLink && (
              <Link
                href={project.ytLink}
                className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-900 transition-colors text-center text-sm md:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                Youtube Demo
              </Link>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
const Projects: React.FC = () => {
  const workProjects: Project[] = [
    {
      title: "Pump.Task",
      description:
        "Pump.Task is a modern project management application designed to streamline workflows, enhance collaboration, and simplify task tracking. With advanced features like NFT interaction and Web3 integration, it offers an innovative way to gamify task management and reward achievements. The platform is built for scalability and a seamless user experience, utilizing cutting-edge technologies to deliver high performance.",
      techStack: [
        "Next.js: Framework for React with server-side rendering and static site generation.",
        "React: JavaScript library for building user interfaces.",
        "Tailwind CSS: Utility-first CSS framework for responsive design.",
        "TypeScript: Superset of JavaScript that adds static typing.",
        "MongoDB: NoSQL database for storing application data.",
        "ThirdWeb: Enables NFT interaction and integration, allowing users to mint and manage rewards through blockchain technology.",
        "tRPC: Simplifies building type-safe APIs for the application.",
        "SendGrid: Handles email notifications and user communication.",
        "Turborepo: High-performance build system for JavaScript and TypeScript codebases.",
        "Vercel: Hosting platform for deploying the application.",
      ],
      githubLink: "https://github.com/MikeLS95/pump.task",
      demoLink: "https://pump-task-dev.vercel.app/",
      image: "/projects/PumpDotTask.JPG",
      imageAlt: "Pump.Task Project Interface",
    },
    {
      title: "Tech Assessment",
      description:
        "This project is a technical assessment developed for Labrys, showcasing proficiency in building web applications using modern technologies. The application demonstrates the ability to create efficient, scalable, and user-friendly interfaces, adhering to best practices in web development.",
      techStack: [
        "Next.js: Framework for React with server-side rendering and static site generation.",
        "React: JavaScript library for building user interfaces.",
        "Tailwind CSS: Utility-first CSS framework for responsive design.",
        "TypeScript: Superset of JavaScript that adds static typing.",
        "Vercel: Hosting platform for deploying the application.",
      ],
      githubLink: "https://github.com/MikeLS95/Tech-assessment",
      demoLink: "https://coin-display.vercel.app/",
      image: "/projects/CoinDisplay.JPG",
      imageAlt: "Tech Assessment Project Interface",
    },
  ];

  const personalProjects: {
    webDevelopment: Project[];
    gameDevelopment: Project[];
  } = {
    webDevelopment: [
      {
        title: "Next.js Portfolio",
        description:
          "This portfolio website showcases my skills, projects, and professional experiences. Built with Next.js, it is designed for high performance, responsiveness, and an engaging user experience.",
        techStack: [
          "Next.js: Framework for React with server-side rendering and static site generation.",
          "React: JavaScript library for building user interfaces.",
          "Tailwind CSS: Utility-first CSS framework for responsive design.",
          "JavaScript/TypeScript: Core programming languages used in the app.",
          "Vercel: Hosting platform for deploying the website.",
        ],
        githubLink: "https://github.com/MikeLS95/Portfolio-NextJs",
        image: "/projects/NextPortfolio.JPG",
        imageAlt: "Next.js Portfolio Project Interface",
      },
    ],
    gameDevelopment: [
      {
        title: "Settlers Untamed",
        description:
          "Settlers Untamed is an idle civilization builder where players oversee the growth and development of their settlement. Built with Unity6 and C#, it focuses on creating an engaging idle gameplay loop with dynamic resource management and automation mechanics.",
        techStack: [
          "Unity6: Game engine for developing 2D and 3D games.",
          "Unity Editor: Development environment for designing and testing the game.",
          "C#: Programming language for game logic and mechanics.",
          "Unity Cloud: Cloud-based version control and collaboration platform.",
        ],
        githubLink: null,
        ytLink: "https://youtu.be/h6AmqrT5Jfs",
        image: "/projects/SettlersUntamed.JPG",
        imageAlt: "Settlers Untamed Game Interface",
      },
    ],
  };

  const coderAcademyProjects: Project[] = [
    {
      title: "My First Portfolio",
      description:
        'The "Portfolio Assignment" is a personal website developed to showcase professional history and projects. Created as part of a term assignment at Coder Academy, the site features a minimalist design with a retro color scheme to highlight content without distractions. It includes a navigation bar for easy access to different sections, a downloadable resume link, images for personal branding, and a contact form powered by Formspree for direct communication.',
      techStack: [
        "HTML: Structures the content and layout of the website.",
        "CSS: Styles the website, implementing the retro color scheme and responsive design.",
        "Formspree: Manages the contact form, enabling users to send messages directly.",
        "Ionic.io: Provides icons for GitHub and LinkedIn, linking to social profiles.",
        "Netlify: Hosts and deploys the website, ensuring accessibility and performance.",
      ],
      githubLink: "https://github.com/MikeLS95/Portfolio",
      demoLink: "https://mikels-portfolio.netlify.app/home",
      image: "/projects/FirstPortfolio.JPG",
      imageAlt: "First Portfolio Project Interface",
    },
    {
      title: "Grid Based Escape Room",
      description:
        'The "Escape Room Game Terminal Application" is a grid-based escape room game developed as a terminal application. Players navigate through a hidden 4x4 grid, discovering clues, locating a key, and finding the exit to escape the room. The game is designed to be played via the command line interface.',
      techStack: [
        "Python: The primary programming language used to develop the game's logic and functionality.",
        "PEP 8: The Python Enhancement Proposal used as the style guide to ensure code readability and consistency.",
        "Figlet Module: A Python library utilized to generate the banner displayed in the game's menu.",
      ],
      githubLink: "https://github.com/MikeLS95/Escape-Room",
      image: "/projects/EscapeRoom.JPG",
      imageAlt: "Escape Room Project Interface",
    },
    {
      title: "Customer Travel Profile API",
      description:
        "The Customer Profile API is a basic project designed to manage and maintain customer information. It includes essential features for creating, retrieving, updating, and deleting customer profiles, ensuring data integrity and accessibility. This project serves as an exercise in developing a simple API to manage customer data efficiently.",
      techStack: [
        "Flask: Lightweight web framework for building Python-based APIs and applications.",
        "PostgreSQL: Powerful open-source relational database management system for data storage.",
        "SQLAlchemy: Python ORM library for interacting with databases using objects.",
        "Marshmallow: Serialization and validation library for converting data to and from Python objects.",
        "Psycopg2: PostgreSQL adapter for Python, facilitating database communication.",
        "JWT Manager: Tool for managing JSON Web Tokens (JWT) for authentication.",
        "Bcrypt: Library for hashing passwords to enhance security.",
      ],
      githubLink: "https://github.com/MikeLS95/Customer-Profile-API",
      image: "/projects/CustomerProfileAPI.JPG",
      imageAlt: "Customer Profile API Interface",
    },
    {
      title: "Pawfect Care - Full Stack App",
      description:
        "Pawfect Care is a comprehensive web application designed to connect pet owners with a variety of pet care services. The platform enables users to book veterinary appointments, schedule daycare sessions, and request emergency ambulance services for their pets, all through an intuitive and user-friendly interface. The application ensures a seamless experience by integrating essential features tailored to pet owners' needs.",
      techStack: [
        "MongoDB: NoSQL database for storing pet care data.",
        "Express.js: Framework for building RESTful APIs.",
        "React: JavaScript library for building dynamic user interfaces.",
        "Node.js: Backend runtime for handling application logic.",
        "CSS: Styling language for adding visual styles to the website.",
        "Netlify: Deployment platform used to host the frontend application, providing easy scalability and accessibility.",
        "Render: Deployment platform used to host the backend services, ensuring efficient server operations.",
      ],
      githubLink: "https://github.com/MikeLS95/Pawfect-Care",
      demoLink: "https://pawfect-care.netlify.app/",
      image: "/projects/PawfectCare.JPG",
      imageAlt: "Pawfect Care Project Interface",
    },
  ];
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-purple-100">
        My Projects
      </h1>

      <div className="flex flex-col gap-8">
        <div className="mb-8">
          <p className="text-lg leading-relaxed mb-4 text-center text-gray-300">
            Below are all of the projects I have worked on over the course of my
            career.
          </p>
          <p className="text-lg leading-relaxed text-center text-gray-300">
            Click on project titles to view more details about each project.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {/* Work Projects Section */}
        <div className="border border-gray-800 rounded-lg p-8 backdrop-blur-sm bg-gray-900/20">
          <h2 className="text-3xl font-bold text-purple-100 mb-6 text-center">
            Work Projects
          </h2>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-purple-200 mb-6 text-center">
              Labrys
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {workProjects.map((project, index) => (
                <div
                  key={index}
                  className="rounded-lg p-6 hover:bg-gray-800/30 transition-colors flex flex-col items-center"
                >
                  <ProjectDialog project={project} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Personal Projects Section */}
        <div className="border border-gray-800 rounded-lg p-8 backdrop-blur-sm bg-gray-900/20">
          <h2 className="text-3xl font-bold text-purple-100 mb-6 text-center">
            Personal Projects
          </h2>

          {/* Web Development Projects */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-purple-200 mb-6 text-center">
              Web Development
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
              {personalProjects.webDevelopment.map((project, index) => (
                <div
                  key={index}
                  className="rounded-lg p-6 hover:bg-gray-800/30 transition-colors flex flex-col items-center"
                >
                  <ProjectDialog project={project} />
                </div>
              ))}
            </div>
          </div>

          {/* Game Development Projects */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-purple-200 mb-6 text-center">
              Game Development
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
              {personalProjects.gameDevelopment.map((project, index) => (
                <div
                  key={index}
                  className="rounded-lg p-6 hover:bg-gray-800/30 transition-colors flex flex-col items-center"
                >
                  <ProjectDialog project={project} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Coder Academy Projects Section */}
        <div className="border border-gray-800 rounded-lg p-8 backdrop-blur-sm bg-gray-900/20">
          <h2 className="text-3xl font-bold text-purple-100 mb-6 text-center">
            Coder Academy Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coderAcademyProjects.map((project, index) => (
              <div
                key={index}
                className="rounded-lg p-6 hover:bg-gray-800/30 transition-colors flex flex-col items-center"
              >
                <ProjectDialog project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
