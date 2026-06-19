import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMonitor, FiMessageSquare, FiTrendingUp, FiZap, FiCheck } from 'react-icons/fi';
import { Link } from 'react-scroll';

const mainServices = [
  {
    icon: FiPhone,
    label: 'AI Voice Agents',
    title: 'Never Miss a Call Again.',
    description:
      '24/7 intelligent AI receptionist that answers every call, books appointments, and qualifies leads. Even at 2am on a Sunday.',
    features: [
      'Answers calls 24/7: nights, weekends, holidays',
      'Books appointments directly into your Google Calendar',
      'Qualifies leads and texts you a summary after each call',
      'Custom voice, name, and script trained on your business',
    ],
    badge: 'Most Popular',
    /* card styles */
    cardBg: 'linear-gradient(135deg, rgba(23,37,90,0.6) 0%, rgba(2,8,23,0.95) 100%)',
    cardBorder: 'rgba(59,130,246,0.35)',
    cardGlow: 'rgba(37,99,235,0.15)',
    iconBg: 'rgba(37,99,235,0.2)',
    iconBorder: 'rgba(59,130,246,0.35)',
    iconColor: '#60a5fa',
    badgeBg: 'rgba(37,99,235,0.15)',
    badgeBorder: 'rgba(59,130,246,0.35)',
    badgeColor: '#93c5fd',
    checkColor: '#60a5fa',
    dotColor: '#3b82f6',
  },
  {
    icon: FiMonitor,
    label: 'Web Development',
    title: 'Websites That Convert.',
    description:
      'Fast, modern, mobile-first websites built to rank on Google and turn visitors into paying customers. Not just pretty pages that sit there.',
    features: [
      'Mobile-first design built for local search traffic',
      'Built with Next.js for speed and SEO performance',
      'Clear CTAs that drive calls, bookings, and leads',
      'Ongoing support and content updates available',
    ],
    badge: null,
    cardBg: 'linear-gradient(135deg, rgba(46,16,101,0.5) 0%, rgba(2,8,23,0.95) 100%)',
    cardBorder: 'rgba(139,92,246,0.35)',
    cardGlow: 'rgba(109,40,217,0.12)',
    iconBg: 'rgba(109,40,217,0.2)',
    iconBorder: 'rgba(139,92,246,0.35)',
    iconColor: '#c4b5fd',
    badgeBg: null,
    badgeBorder: null,
    badgeColor: null,
    checkColor: '#a78bfa',
    dotColor: '#8b5cf6',
  },
];

const alsoOffered = [
  {
    icon: FiMessageSquare,
    title: 'AI Chatbots',
    description: 'Website chat agents that answer questions and capture leads 24/7.',
    color: '#22d3ee',
  },
  {
    icon: FiTrendingUp,
    title: 'Google Ads & Tracking',
    description: 'Conversion-focused ad setup and analytics tailored for local businesses.',
    color: '#34d399',
  },
  {
    icon: FiZap,
    title: 'Business Automation',
    description: 'Automate follow-ups, appointment reminders, and internal workflows.',
    color: '#fb923c',
  },
];

const Services = () => (
  <section id="services" className="py-32 border-t border-zinc-900">
    <div className="max-w-6xl mx-auto px-6">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#60a5fa' }}>
          Services
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          What We Build
        </h2>
        <p className="mt-4 text-lg max-w-lg" style={{ color: '#94a3b8' }}>
          AI tools and websites that save time, capture leads, and grow your local business.
        </p>
      </motion.div>

      {/* Main service cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {mainServices.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative rounded-2xl p-8 overflow-hidden"
            style={{
              background: service.cardBg,
              border: `1px solid ${service.cardBorder}`,
              boxShadow: `0 0 60px ${service.cardGlow}, inset 0 1px 0 rgba(255,255,255,0.04)`,
            }}
          >
            {/* Inner glow top */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: `linear-gradient(90deg, transparent, ${service.cardBorder}, transparent)` }}
            />

            {service.badge && (
              <span
                className="absolute top-6 right-6 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                style={{ background: service.badgeBg, border: `1px solid ${service.badgeBorder}`, color: service.badgeColor }}
              >
                {service.badge}
              </span>
            )}

            {/* Icon + label */}
            <div className="flex items-center gap-3 mb-7">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: service.iconBg, border: `1px solid ${service.iconBorder}` }}
              >
                <service.icon size={20} style={{ color: service.iconColor }} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#64748b' }}>
                {service.label}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-sm leading-relaxed mb-7" style={{ color: '#94a3b8' }}>{service.description}</p>

            <ul className="space-y-3 mb-8">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: '#cbd5e1' }}>
                  <FiCheck size={14} style={{ color: service.checkColor, flexShrink: 0, marginTop: '2px' }} />
                  {f}
                </li>
              ))}
            </ul>

            <Link
              to="contact"
              smooth
              duration={600}
              offset={-80}
              className="cursor-pointer inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
              style={{ color: service.checkColor }}
            >
              Get a free quote →
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Also offered */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        viewport={{ once: true }}
      >
        <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#475569' }}>
          Also Offered
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {alsoOffered.map((item) => (
            <div
              key={item.title}
              className="rounded-xl p-5 flex gap-4 transition-all duration-200 hover:border-zinc-700"
              style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(30,41,59,0.8)' }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: `${item.color}18`, border: `1px solid ${item.color}30` }}
              >
                <item.icon size={15} style={{ color: item.color }} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  </section>
);

export default Services;
