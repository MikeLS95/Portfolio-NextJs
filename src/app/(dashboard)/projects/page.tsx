import React from "react";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="text-gray-900 max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-purple-200">
        My Projects
      </h1>
      <div className="flex flex-col gap-8">
        <div className="bg-white shadow-lg p-8 border border-gray-200 rounded-lg">
          <h2 className="text-3xl font-bold text-indigo-900 mb-6">
            <Link
              href="/projects/ca"
              className="text-indigo-600 hover:underline"
            >
              Coder Academy Projects
            </Link>
          </h2>
          <p className="text-lg leading-relaxed">
            A collection of projects completed during my time at Coder Academy,
            showcasing my learning journey and technical growth.
          </p>
        </div>

        <div className="bg-white shadow-lg p-8 border border-gray-200 rounded-lg">
          <h2 className="text-3xl font-bold text-indigo-900 mb-6">
            <Link
              href="/projects/labrys"
              className="text-indigo-600 hover:underline"
            >
              Work Projects
            </Link>
          </h2>
          <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
            Labrys
          </h3>
          <p className="text-lg leading-relaxed">
            Projects I contributed to during my time at Labrys, focusing on
            real-world applications and professional development.
          </p>
        </div>

        <div className="bg-white shadow-lg p-8 border border-gray-200 rounded-lg">
          <h2 className="text-3xl font-bold text-indigo-900 mb-6">
            <Link
              href="/projects/personal"
              className="text-indigo-600 hover:underline"
            >
              Personal Projects
            </Link>
          </h2>
          <p className="text-lg leading-relaxed">
            Projects I have worked on independently, reflecting my passion for
            coding and exploring new technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
