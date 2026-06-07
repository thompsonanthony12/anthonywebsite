import React from "react";

const AboutPage = () => {
  return;
  <section
    id="about"
    className="min-h-screen bg-slate-900 text-white py-16 md:py-20 px-4 sm:px-6"
  >
    <div className="max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          About <span className="text-indigo-500">Me</span>
        </h2>

        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          Get to know more about who I am, what I do, and what drives my passion
          for creating digital experiences.
        </p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-3xl object-cover shadow-xl border border-slate-700"
          />
        </div>

        {/* Text */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Frontend Developer & Problem Solver
          </h3>

          <p className="text-slate-300 leading-relaxed mb-6">
            I'm a passionate web developer focused on building responsive,
            user-friendly, and modern web applications. I enjoy transforming
            ideas into real-world digital products that deliver value and great
            user experiences.
          </p>

          <p className="text-slate-300 leading-relaxed mb-8">
            My journey in software development has allowed me to work with
            technologies like React, JavaScript, Tailwind CSS, and modern web
            development tools. I continuously learn and improve my skills to
            stay current with industry best practices.
          </p>

          {/* Quick Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-indigo-500">Name</h4>
              <p className="text-slate-300">Your Name</p>
            </div>

            <div>
              <h4 className="font-semibold text-indigo-500">Location</h4>
              <p className="text-slate-300">Nigeria</p>
            </div>

            <div>
              <h4 className="font-semibold text-indigo-500">Experience</h4>
              <p className="text-slate-300">2+ Years</p>
            </div>

            <div>
              <h4 className="font-semibold text-indigo-500">Email</h4>
              <p className="text-slate-300">your@email.com</p>
            </div>
          </div>

          {/* CTA */}
          <button className="mt-10 w-full sm:w-auto px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition">
            Download Resume
          </button>
        </div>
      </div>
    </div>
  </section>;
};

export default AboutPage;
