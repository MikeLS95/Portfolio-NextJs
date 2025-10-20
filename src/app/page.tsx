import Link from "next/link";
import React from "react";
import {
  Github,
  Linkedin,
  User,
  Briefcase,
  Code,
  FileText,
  Mail,
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-4x1">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">Hello, I'm </span>
            <span className="text-cyan-400">Mike Sheppard</span>
          </h1>
          <p className="text-gray-200 text-xl md:text-2xl">
            Full Stack Developer | Problem Solver | Tech Enthusiast
          </p>
        </div>
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <Link
            href="https://github.com/MikeLS95"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2 rounded-md bg-slate-700/50 text-white hover:bg-slate-600/50 transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/mike-sheppard-770790165/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2 rounded-md bg-slate-700/50 text-white hover:bg-slate-600/50 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </Link>
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2 rounded-md bg-slate-700/50 text-white hover:bg-slate-600/50 transition-colors"
          >
            <FileText className="w-5 h-5" />
            <span>Resume</span>
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-8">
          <Link
            href="/aboutme"
            className="p-6 rounded-lg bg-slate-700/30 backdrop-blur-sm hover:bg-slate-600/40 transition-colors flex flex-col items-center gap-2 text-white"
          >
            <User className="w-6 h-6" />
            <span>About Me</span>
          </Link>
          <Link
            href="/projects"
            className="p-6 rounded-lg bg-slate-700/30 backdrop-blur-sm hover:bg-slate-600/40 transition-colors flex flex-col items-center gap-2 text-white"
          >
            <Briefcase className="w-6 h-6" />
            <span>Projects</span>
          </Link>
          <Link
            href="/tech"
            className="p-6 rounded-lg bg-slate-700/30 backdrop-blur-sm hover:bg-slate-600/40 transition-colors flex flex-col items-center gap-2 text-white"
          >
            <Code className="w-6 h-6" />
            <span>Tech Stack</span>
          </Link>
        </div>
        <div className="text-center">
          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>Michaellaishleys@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
