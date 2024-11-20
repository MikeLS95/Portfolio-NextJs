import React from "react";

const TechStack = () => {
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
        <div className="bg-white shadow-lg p-8 border border-gray-200 rounded-lg">
          <h2 className="text-3xl font-bold text-indigo-900 mb-6 text-center">
            Frontend Technologies
          </h2>
          <ul className="space-y-2 text-lg leading-relaxed text-center">
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
          </ul>
        </div>

        <div className="bg-white shadow-lg p-8 border border-gray-200 rounded-lg">
          <h2 className="text-3xl font-bold text-indigo-900 mb-6 text-center">
            Backend Technologies
          </h2>
          <ul className="space-y-2 text-lg leading-relaxed text-center">
            <li>Python</li>
            <li>Flask</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>tRPC</li>
          </ul>
        </div>

        <div className="bg-white shadow-lg p-8 border border-gray-200 rounded-lg">
          <h2 className="text-3xl font-bold text-indigo-900 mb-6 text-center">
            Databases
          </h2>
          <ul className="space-y-2 text-lg leading-relaxed text-center">
            <li>PostgreSQL</li>
            <li>MongoDB</li>
          </ul>
        </div>

        <div className="bg-white shadow-lg p-8 border border-gray-200 rounded-lg">
          <h2 className="text-3xl font-bold text-indigo-900 mb-6 text-center">
            Authentication & Security
          </h2>
          <ul className="space-y-2 text-lg leading-relaxed text-center">
            <li>JWT Manager</li>
            <li>Bcrypt</li>
          </ul>
        </div>

        <div className="bg-white shadow-lg p-8 border border-gray-200 rounded-lg">
          <h2 className="text-3xl font-bold text-indigo-900 mb-6 text-center">
            ORMs & Data Processing
          </h2>
          <ul className="space-y-2 text-lg leading-relaxed text-center">
            <li>SQLAlchemy</li>
            <li>Marshmallow</li>
            <li>Psycopg2</li>
          </ul>
        </div>

        <div className="bg-white shadow-lg p-8 border border-gray-200 rounded-lg">
          <h2 className="text-3xl font-bold text-indigo-900 mb-6 text-center">
            Web3 & Blockchain
          </h2>
          <ul className="space-y-2 text-lg leading-relaxed text-center">
            <li>ThirdWeb</li>
          </ul>
        </div>

        <div className="bg-white shadow-lg p-8 border border-gray-200 rounded-lg">
          <h2 className="text-3xl font-bold text-indigo-900 mb-6 text-center">
            Development Tools & Libraries
          </h2>
          <ul className="space-y-2 text-lg leading-relaxed text-center">
            <li>Figlet Module</li>
            <li>Turborepo</li>
            <li>PEP 8 (Python Style Guide)</li>
          </ul>
        </div>

        <div className="bg-white shadow-lg p-8 border border-gray-200 rounded-lg">
          <h2 className="text-3xl font-bold text-indigo-900 mb-6 text-center">
            Email & Communications
          </h2>
          <ul className="space-y-2 text-lg leading-relaxed text-center">
            <li>SendGrid</li>
            <li>Formspree</li>
          </ul>
        </div>

        <div className="bg-white shadow-lg p-8 border border-gray-200 rounded-lg">
          <h2 className="text-3xl font-bold text-indigo-900 mb-6 text-center">
            Deployment & Hosting
          </h2>
          <ul className="space-y-2 text-lg leading-relaxed text-center">
            <li>Vercel</li>
            <li>Netlify</li>
            <li>Render</li>
          </ul>
        </div>

        <div className="bg-white shadow-lg p-8 border border-gray-200 rounded-lg">
          <h2 className="text-3xl font-bold text-indigo-900 mb-6 text-center">
            UI Components & Resources
          </h2>
          <ul className="space-y-2 text-lg leading-relaxed text-center">
            <li>Ionic.io (for icons)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
