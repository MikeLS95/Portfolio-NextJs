import React from "react";
import Image from "next/image";
import Link from "next/link";

type Technology = {
  name: string;
  iconSrc?: string | null;
};

type TechnologyItemProps = {
  name: string;
  iconSrc?: string | null;
};

const TechnologyItem: React.FC<TechnologyItemProps> = ({ name, iconSrc }) => (
  <li className="flex items-center justify-center space-x-3 p-2">
    {iconSrc && (
      <Image
        src={`/techIcons/${iconSrc}`}
        alt={`${name} icon`}
        width={24}
        height={24}
        className="w-6 h-6"
      />
    )}
    <span className="text-gray-300">{name}</span>
  </li>
);

type TechSectionProps = {
  title: string;
  technologies: Technology[];
};

const TechSection: React.FC<TechSectionProps> = ({ title, technologies }) => (
  <div className="border border-gray-800 rounded-lg p-8 backdrop-blur-sm bg-gray-900/20">
    <h2 className="text-2xl font-bold text-cyan-300 mb-6 text-center">
      {title}
    </h2>
    <ul className="space-y-3 text-lg leading-relaxed">
      {technologies.map((tech, index) => (
        <TechnologyItem key={index} {...tech} />
      ))}
    </ul>
  </div>
);

const TechStack: React.FC = () => {
  const sections = [
    {
      title: "Frontend Technologies",
      technologies: [
        { name: "HTML", iconSrc: "html.png" },
        { name: "CSS", iconSrc: "css.png" },
        { name: "React", iconSrc: "react.png" },
        { name: "Next.js", iconSrc: "nextjs.png" },
        { name: "Tailwind CSS", iconSrc: "tailwindcss.png" },
        { name: "TypeScript", iconSrc: "typescript.png" },
        { name: "JavaScript", iconSrc: "javascript.png" },
      ],
    },
    {
      title: "Backend Technologies",
      technologies: [
        { name: "Python", iconSrc: "python.png" },
        { name: "Flask", iconSrc: "flask.png" },
        { name: "Node.js", iconSrc: "nodejs.png" },
        { name: "Express.js", iconSrc: "express.png" },
        { name: "tRPC", iconSrc: "trpc.png" },
      ],
    },
    {
      title: "Databases",
      technologies: [
        { name: "PostgreSQL", iconSrc: "postgresql.png" },
        { name: "MongoDB", iconSrc: "mongodb.png" },
      ],
    },
    {
      title: "Authentication & Security",
      technologies: [
        { name: "JWT Manager", iconSrc: "jwt.png" },
        { name: "Bcrypt", iconSrc: null },
      ],
    },
    {
      title: "ORMs & Data Processing",
      technologies: [
        { name: "SQLAlchemy", iconSrc: null },
        { name: "Marshmallow", iconSrc: null },
        { name: "Psycopg2", iconSrc: null },
      ],
    },
    {
      title: "Web3 & Blockchain",
      technologies: [{ name: "ThirdWeb", iconSrc: "thirdweb.png" }],
    },
    {
      title: "Development Tools & Libraries",
      technologies: [
        { name: "Figlet Module", iconSrc: null },
        { name: "Turborepo", iconSrc: null },
        { name: "PEP 8 (Python Style Guide)", iconSrc: null },
      ],
    },
    {
      title: "Email & Communications",
      technologies: [
        { name: "SendGrid", iconSrc: "sendgrid.png" },
        { name: "Formspree", iconSrc: "formspree.png" },
      ],
    },
    {
      title: "Deployment & Hosting",
      technologies: [
        { name: "Vercel", iconSrc: "vercel.png" },
        { name: "Netlify", iconSrc: "netlify.png" },
        { name: "Render", iconSrc: "render.png" },
      ],
    },
    {
      title: "UI Components & Resources",
      technologies: [
        { name: "Ionic.io", iconSrc: null },
        { name: "Icons8", iconSrc: null },
        { name: "flavicon", iconSrc: null },
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-cyan-300">
        Technology Stack
      </h1>
      <div className="border border-gray-800 rounded-lg p-8 backdrop-blur-sm bg-gray-900/20 mb-8">
        <p className="text-lg leading-relaxed text-center mb-6 text-gray-300">
          Explore the different technologies used in our projects, including
          frontend and backend frameworks, databases, authentication methods,
          and various tools for development, deployment, and communication.
        </p>
        <p className="text-center text-gray-400 flex items-center justify-center gap-2">
          Icons by{" "}
          <Link
            href="https://icons8.com/"
            className="text-cyan-400 hover:text-cyan-200 transition-colors inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Icons8
          </Link>
          {" and "}
          <Link
            href="https://www.flaticon.com/free-icons/favicon"
            className="text-cyan-400 hover:text-cyan-200 transition-colors inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Favicon
          </Link>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <TechSection key={index} {...section} />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
