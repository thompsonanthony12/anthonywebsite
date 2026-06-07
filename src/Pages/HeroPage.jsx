import React from "react";
import { motion } from "framer-motion";

const stats = [
  { number: "20+", label: "Projects" },
  { number: "3+", label: "Years Experience" },
  { number: "15+", label: "Clients" },
];

const HeroPage = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 py-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-indigo-500/20 text-indigo-400 rounded-full text-sm font-medium mb-6"
            >
              👋 Welcome to My Portfolio
            </motion.span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm <span className="text-indigo-500">Your Name</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-slate-300 text-lg mt-6 max-w-xl mx-auto lg:mx-0"
            >
              I build modern, scalable and beautiful web applications that
              create exceptional user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start"
            >
              <button className="px-8 py-4 bg-indigo-600 rounded-xl font-semibold hover:bg-indigo-700 transition-all duration-300 hover:scale-105">
                View Projects
              </button>

              <button className="px-8 py-4 border border-slate-700 rounded-xl font-semibold hover:border-indigo-500 hover:text-indigo-400 transition-all duration-300">
                Contact Me
              </button>
            </motion.div>

            {/* Animated Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.8 + index * 0.2,
                    duration: 0.6,
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.05,
                  }}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-center cursor-pointer"
                >
                  <motion.h3
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 1 + index * 0.2,
                      type: "spring",
                      stiffness: 150,
                    }}
                    className="text-3xl font-bold text-indigo-500"
                  >
                    {stat.number}
                  </motion.h3>

                  <p className="text-slate-400 text-sm mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                className="absolute inset-0 bg-indigo-600 blur-[120px] opacity-30 rounded-full"
              />

              {/* Image */}
              <motion.img
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                }}
                transition={{ duration: 0.3 }}
                src="/profile.jpg"
                alt="Profile"
                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] object-cover rounded-3xl border border-slate-800 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
