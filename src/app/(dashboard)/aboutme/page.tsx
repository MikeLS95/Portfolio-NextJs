import React from "react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-purple-100">
        Michael (Mike) Sheppard
      </h1>
      <div className="border border-gray-800 rounded-lg p-8 backdrop-blur-sm bg-gray-900/20 mb-12 flex flex-col items-center">
        <p className="text-xl leading-relaxed mb-6 text-center text-gray-300">
          Hello! I am a software developer eager to start my career in tech. I'm
          enthusiastic about learning and continually growing my skills through
          hands-on projects and collaboration.
        </p>
        <p className="text-xl leading-relaxed mb-6 text-center text-gray-300">
          Feel free to browse the projects I've completed on my GitHub profile,
          or navigate to my projects page for an overview of my work and
          experience.
        </p>
        <p className="text-xl leading-relaxed text-center text-gray-300">
          This portfolio showcases the technologies I have used in my projects
          and those I am interested in exploring to further enhance my
          development journey.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border border-gray-800 rounded-lg p-8 backdrop-blur-sm bg-gray-900/20 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-purple-100 mb-6 text-center">
            Why Am I a Fit for Your Company?
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-center text-gray-300">
            As a junior developer, I bring passion, a willingness to learn, and
            the determination to improve with every challenge. I consistently
            strive to refine my skills and stay up-to-date with the latest
            technologies.
          </p>
          <p className="text-lg leading-relaxed text-center text-gray-300">
            I have experience working on projects independently, in a team of
            two, and in a five-person team, tackling challenges collaboratively
            and with enthusiasm.
          </p>
        </div>

        <div className="border border-gray-800 rounded-lg p-8 backdrop-blur-sm bg-gray-900/20 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-purple-100 mb-6 text-center">
            My Personal Life
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-center text-gray-300">
            Outside of coding, I spend most of my time with my family, enjoying
            video games, or exploring new technologies. In 2024, I welcomed my
            first child, and watching her grow has been one of the greatest joys
            of my life.
          </p>
          <p className="text-lg leading-relaxed mb-6 text-center text-gray-300">
            In my spare time, I focus on expanding my development skills,
            particularly in game development. I have been working on a game
            project in Unity6 with C# to gain hands-on experience in game
            mechanics, physics, and design.
          </p>
          <p className="text-lg leading-relaxed text-center text-gray-300">
            I have a strong interest in various game genres, including real-time
            strategy, MMORPGs, and RPGs. Both coding and gaming provide me with
            the perfect balance of creativity, strategy, and
            problem-solving—elements that drive my passion for development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
