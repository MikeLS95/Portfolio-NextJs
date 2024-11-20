import React from "react";
import Image from "next/image";

type Technology = {
  name: string;
  iconSrc?: string | null;
};

type TechnologyItemProps = {
  name: string;
  iconSrc?: string | null;
};

const TechnologyItem: React.FC<TechnologyItemProps> = ({ name, iconSrc }) => (
  <li className="flex items-center justify-center space-x-2">
    {iconSrc && (
      <Image
        src={`/techIcons/${iconSrc}`}
        alt={`${name} icon`}
        width={24}
        height={24}
        className="w-6 h-6"
      />
    )}
    <span>{name}</span>
  </li>
);

type TechSectionProps = {
  title: string;
  technologies: Technology[];
};

const TechSection: React.FC<TechSectionProps> = ({ title, technologies }) => (
  <div className="bg-white shadow-lg p-8 border border-gray-200 rounded-lg">
    <h2 className="text-3xl font-bold text-indigo-900 mb-6 text-center">
      {title}
    </h2>
    <ul className="space-y-2 text-lg leading-relaxed">
      {technologies.map((tech, index) => (
        <TechnologyItem key={index} {...tech} />
      ))}
    </ul>
  </div>
);

const TechStack: React.FC = () => {
  const sections: { title: string; technologies: Technology[] }[] = [
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
    <div className="text-gray-900 max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-purple-100">
        Technology Stack
      </h1>
      <div className="bg-white shadow-lg p-8 border border-gray-200 rounded-lg mb-8">
        <p className="text-lg leading-relaxed text-center">
          Explore the different technologies used in our projects, including
          frontend and backend frameworks, databases, authentication methods,
          and various tools for development, deployment, and communication.
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
