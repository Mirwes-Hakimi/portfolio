import React from 'react';
import { motion } from 'framer-motion';
import HTML from '../Assets/HTML.png';
import CSS from '../Assets/CSS.png';
import Tailwind from '../Assets/Tailwind.png';
import JS from '../Assets/JS.jpg';
import ReactJS from '../Assets/ReactJs.png';
import Redux from '../Assets/Redux.jpg';
import Node from '../Assets/Node.png';
import GitHub from '../Assets/GitHub.png';
import Git from '../Assets/Git.png';

const techs = [
  { id: 1, src: HTML,     title: 'HTML',     shadow: 'hover:shadow-orange-500' },
  { id: 2, src: CSS,      title: 'CSS',      shadow: 'hover:shadow-blue-500'   },
  { id: 3, src: Tailwind, title: 'Tailwind', shadow: 'hover:shadow-cyan-400'   },
  { id: 4, src: JS,       title: 'JavaScript', shadow: 'hover:shadow-yellow-400' },
  { id: 5, src: ReactJS,  title: 'React',    shadow: 'hover:shadow-blue-300'   },
  { id: 6, src: Redux,    title: 'Redux',    shadow: 'hover:shadow-purple-500' },
  { id: 7, src: Node,     title: 'Node.js',  shadow: 'hover:shadow-green-500'  },
  { id: 8, src: GitHub,   title: 'GitHub',   shadow: 'hover:shadow-gray-400'   },
  { id: 9, src: Git,      title: 'Git',      shadow: 'hover:shadow-orange-400' },
];

const Experience = () => {
  return (
    <div name="experience" className="w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-24">
      <div className="max-w-screen-lg mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-4xl font-bold inline border-b-4 border-yellow-400">Experience</p>
          <p className="mt-5 text-gray-400 text-lg">Technologies I work with to build modern web experiences.</p>
        </motion.div>

        {/* Tech grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
          {techs.map(({ id, src, title, shadow }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              viewport={{ once: true }}
              className={`bg-gray-800 border border-gray-700 rounded-xl p-5 flex flex-col items-center gap-3 shadow-md transition-all duration-300 hover:scale-105 hover:border-yellow-400/40 hover:shadow-lg ${shadow}`}
            >
              <img src={src} alt={title} className="w-14 h-14 object-contain" />
              <p className="text-sm text-gray-300 font-medium">{title}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Experience;
