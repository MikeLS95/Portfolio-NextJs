import React from "react";

const About = () => {
  return (
    <div className="text-gray-900 max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-purple-100">
        Michael (Mike) Sheppard
      </h1>
      <div className="bg-white shadow-lg p-8 border border-gray-200 rounded-lg mb-12">
        <p className="text-xl leading-relaxed mb-6">
          Hello! I am a software developer eager to start my career in tech. I’m
          enthusiastic about learning and continually growing my skills through
          hands-on projects and collaboration.
        </p>
        <p className="text-xl leading-relaxed mb-6">
          Feel free to browse the projects I’ve completed on my GitHub profile,
          or navigate to my projects page for an overview of my work and
          experience.
        </p>
        <p className="text-xl leading-relaxed">
          This portfolio showcases the technologies I have used in my projects
          and those I am interested in exploring to further enhance my
          development journey.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg p-8 border border-gray-200 rounded-lg">
          <h2 className="text-3xl font-bold text-indigo-900 mb-6">
            Why Am I a Fit for Your Company?
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            As a junior developer, I bring passion, a willingness to learn, and
            the determination to improve with every challenge. I consistently
            strive to refine my skills and stay up-to-date with the latest
            technologies.
          </p>
          <p className="text-lg leading-relaxed">
            I have experience working on projects independently, in a team of
            two, and in a five-person team, tackling challenges collaboratively
            and with enthusiasm.
          </p>
        </div>

        <div className="bg-white shadow-lg p-8 border border-gray-200 rounded-lg">
          <h2 className="text-3xl font-bold text-indigo-900 mb-6">
            My Personal Life
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Outside of coding, I spend most of my time with my family, enjoying
            video games, or binge-watching shows on Netflix. I welcomed my first
            child in 2024, and watching her grow has been one of the greatest
            joys of my life.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            When I have some spare time, I often find myself either coding or
            gaming. One of my favorite games of all time is Rare’s
            Banjo-Kazooie, which I revisit every few years.
          </p>
          <p className="text-lg leading-relaxed">
            I enjoy a variety of game genres, including real-time strategy,
            MMORPGs, and RPGs. Gaming and coding provide me with the perfect
            blend of creativity, strategy, and challenge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
