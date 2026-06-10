import React from 'react';
import { motion } from 'framer-motion';

const groups = [
  {
    category: 'Frontend',
    accent: 'text-blue-400',
    border: 'border-blue-500/20',
    bg: 'bg-blue-500/5',
    skills: [
      'React', 'Next.js', 'TypeScript', 'JavaScript (ES2024)',
      'HTML5 / CSS3', 'Tailwind CSS', 'Framer Motion', 'Responsive Design',
    ],
  },
  {
    category: 'Backend & APIs',
    accent: 'text-emerald-400',
    border: 'border-emerald-500/20',
    bg: 'bg-emerald-500/5',
    skills: [
      'Node.js', 'Next.js API Routes', 'REST APIs',
      'Vercel Serverless Functions', 'Express.js',
    ],
  },
  {
    category: 'AI & Integrations',
    accent: 'text-violet-400',
    border: 'border-violet-500/20',
    bg: 'bg-violet-500/5',
    skills: [
      'OpenAI API', 'GPT-4o / 4o-mini', 'Claude API (Anthropic)',
      'Prompt Engineering', 'AI SDK', 'Multilingual NLP',
    ],
  },
  {
    category: 'Tools & Workflow',
    accent: 'text-amber-400',
    border: 'border-amber-500/20',
    bg: 'bg-amber-500/5',
    skills: [
      'Git & GitHub', 'VS Code', 'Vercel', 'Figma',
      'Chrome DevTools', 'Postman', 'EmailJS', 'PWA',
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 border-t border-zinc-900">
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
            Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-lg">
            The tools and technologies I use to build modern, scalable applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {groups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className={`p-6 rounded-xl border ${group.border} ${group.bg}`}
            >
              <h3
                className={`text-xs font-bold ${group.accent} uppercase tracking-widest mb-5`}
              >
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-lg bg-zinc-900/70 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-600 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently learning strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 p-5 rounded-xl border border-zinc-800 bg-zinc-900/20 flex flex-col sm:flex-row sm:items-center gap-3"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
            Currently learning
          </span>
          <div className="flex flex-wrap gap-2">
            {['React Native', 'tRPC', 'Postgres / Prisma', 'Docker'].map((item) => (
              <span
                key={item}
                className="text-xs px-2.5 py-1 rounded-md border border-dashed border-zinc-800 text-zinc-600"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
