import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';

const repos = [
  {
    name: 'driving-school-ai',
    description:
      'AI-powered California DMV practice quiz. OpenAI GPT-4o-mini, multilingual (English / Farsi / Pashto), PWA, anti-repetition logic, real DMV pass standards.',
    language: 'TypeScript',
    langColor: 'bg-blue-400',
    url: 'https://github.com/Mirwes-Hakimi/driving-school-ai',
    live: 'https://driving-school-ai.vercel.app/',
    featured: true,
  },
  {
    name: 'profolio',
    description:
      'Personal portfolio site. React, Tailwind CSS, Framer Motion, AI chat widget powered by Claude API, EmailJS contact form, deployed on Vercel.',
    language: 'JavaScript',
    langColor: 'bg-yellow-400',
    url: 'https://github.com/Mirwes-Hakimi',
    live: null,
    featured: false,
  },
];

const GitHub = () => {
  return (
    <section id="github" className="py-32 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            Open Source
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            On GitHub
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-lg">
            My public work: production projects, experiments, and the occasional deep dive.
          </p>
        </motion.div>

        {/* Repo cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {repos.map((repo, i) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className={`group p-6 rounded-xl border transition-all duration-300 ${
                repo.featured
                  ? 'border-indigo-500/30 bg-indigo-500/5 hover:border-indigo-500/50'
                  : 'border-zinc-800 bg-zinc-900/30 hover:border-zinc-700'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <FiGithub size={15} className="text-zinc-500" />
                  <span className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                    {repo.name}
                  </span>
                  {repo.featured && (
                    <span className="text-xs px-1.5 py-0.5 rounded border border-indigo-500/30 bg-indigo-500/10 text-indigo-400">
                      Featured
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {repo.live && (
                    <a
                      href={repo.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Live demo for ${repo.name}`}
                      className="text-zinc-600 hover:text-zinc-300 transition-colors"
                    >
                      <FiExternalLink size={14} />
                    </a>
                  )}
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub repository for ${repo.name}`}
                    className="text-zinc-600 hover:text-zinc-300 transition-colors"
                  >
                    <FiCode size={14} />
                  </a>
                </div>
              </div>

              <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                {repo.description}
              </p>

              <div className="flex items-center gap-1.5 text-xs text-zinc-600">
                <span className={`w-2 h-2 rounded-full ${repo.langColor}`} />
                <span>{repo.language}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Profile link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/Mirwes-Hakimi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-600 px-5 py-2.5 rounded-lg transition-all duration-200"
          >
            <FiGithub size={15} />
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHub;
