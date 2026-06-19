import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import { Link } from 'react-scroll';

const tiers = [
  {
    name: 'Starter',
    tagline: 'Get online professionally',
    priceNote: 'Custom quote · Free estimate',
    description:
      'A clean, fast website for local businesses ready to establish a professional online presence and start capturing leads.',
    features: [
      'Up to 5 pages',
      'Mobile-first responsive design',
      'Contact form + Google Maps',
      'Basic SEO setup',
      'Fast Next.js delivery',
    ],
    highlight: false,
    cta: 'Get a Free Quote',
  },
  {
    name: 'Pro',
    tagline: 'Website + AI that captures leads 24/7',
    priceNote: 'Custom quote · Free estimate',
    description:
      'A high-converting website paired with an AI chatbot or voice agent to capture and qualify leads even when you\'re not available.',
    features: [
      'Everything in Starter',
      'AI chatbot or voice receptionist',
      'Appointment booking integration',
      'Google Analytics setup',
      'Lead summary notifications',
    ],
    highlight: true,
    cta: 'Get a Free Quote',
  },
  {
    name: 'Complete',
    tagline: 'Full AI stack, done for you',
    priceNote: 'Custom quote · Free estimate',
    description:
      'The complete KBL package: website, AI voice agent, chatbot, and Google Ads. All built and managed so you can focus on running your business.',
    features: [
      'Everything in Pro',
      'Full AI voice agent (24/7 calls)',
      'Google Ads campaign setup',
      'Conversion tracking & reporting',
      'Ongoing support & optimization',
    ],
    highlight: false,
    cta: 'Book a Free Call',
  },
];

const Pricing = () => (
  <section id="pricing" className="py-32 border-t border-zinc-900">
    <div className="max-w-6xl mx-auto px-6">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-4">
          Pricing
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Simple Tiers.
        </h2>
        <p className="mt-4 text-zinc-400 text-lg max-w-lg">
          Every project is unique. These tiers give you a sense of scope, and your
          exact quote is always free and comes with zero obligation.
        </p>
      </motion.div>

      {/* Tier cards */}
      <div className="grid md:grid-cols-3 gap-5">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className={`relative flex flex-col rounded-2xl border p-7 ${
              tier.highlight
                ? 'border-indigo-500/50 bg-indigo-500/5'
                : 'border-zinc-800 bg-zinc-900/30'
            }`}
          >
            {tier.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-indigo-500 text-white whitespace-nowrap">
                Most Popular
              </span>
            )}
            <div className="mb-5">
              <h3 className="text-lg font-bold text-white mb-1">{tier.name}</h3>
              <p className="text-xs text-zinc-500 mb-3">{tier.tagline}</p>
              <p className="text-sm text-indigo-400 font-semibold">{tier.priceNote}</p>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed mb-6">{tier.description}</p>
            <ul className="space-y-2.5 flex-1 mb-8">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-zinc-400">
                  <FiCheck size={13} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              to="contact"
              smooth
              duration={600}
              offset={-80}
              className={`cursor-pointer block text-center py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                tier.highlight
                  ? 'bg-white text-zinc-900 hover:bg-zinc-100'
                  : 'border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white'
              }`}
            >
              {tier.cta}
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center text-xs text-zinc-600 mt-8"
      >
        All quotes are free and come with no obligation. Most projects are scoped within 48 hours.
      </motion.p>

    </div>
  </section>
);

export default Pricing;
