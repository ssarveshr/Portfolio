import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Mail, Code2, Sparkles, Award, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, GOOGLE_DRIVE_RESUME_URL } from '../data/portfolioData';

export const Home: React.FC = () => {
  return (
    <div className="space-y-28 pb-16">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        {/* Soft colorful background blur spots */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-sky-200/50 via-indigo-200/40 to-purple-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Seeking Internships & Project Opportunities</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Hi, I'm <span className="gradient-heading">{PERSONAL_INFO.name}</span>
            </h1>

            <p className="text-lg sm:text-xl font-bold text-indigo-600 font-mono">
              {PERSONAL_INFO.subTitle}
            </p>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
              Computer Science student at RNSIT & Backend Developer Trainee with hands-on experience building RESTful APIs, smart contract integrations, and full-stack web platforms.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 pt-2 items-center">
              <Link
                to="/projects"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold text-xs shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.02] transition-all"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={GOOGLE_DRIVE_RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-800 font-bold text-xs shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all"
              >
                <Download className="w-4 h-4 text-indigo-600" />
                <span>Resume PDF (GDrive)</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-2xl text-slate-600 hover:text-slate-900 text-xs font-semibold hover:bg-slate-100/80 transition-all"
              >
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="glass-panel p-6 rounded-3xl text-center space-y-1">
            <h3 className="text-3xl font-black text-indigo-600 font-mono">8.5 / 10</h3>
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">B.E. CSE GPA</p>
          </div>
          <div className="glass-panel p-6 rounded-3xl text-center space-y-1">
            <h3 className="text-3xl font-black text-sky-600 font-mono">3 Major</h3>
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Engineering Systems</p>
          </div>
          <div className="glass-panel p-6 rounded-3xl text-center space-y-1">
            <h3 className="text-3xl font-black text-indigo-600 font-mono">150+</h3>
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Students Mentored</p>
          </div>
          <div className="glass-panel p-6 rounded-3xl text-center space-y-1">
            <h3 className="text-3xl font-black text-purple-600 font-mono">3</h3>
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Certifications</p>
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold text-sky-600 uppercase tracking-widest">Portfolio Showcase</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Featured Projects</h2>
          </div>
          <Link to="/projects" className="inline-flex items-center space-x-1 text-xs font-bold text-indigo-600 hover:underline">
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((proj) => (
            <div key={proj.id} className="glass-panel glass-panel-hover rounded-3xl p-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-100 text-xs font-mono font-semibold">
                    {proj.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{proj.date}</span>
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">{proj.title}</h3>
                  <p className="text-xs text-indigo-600 font-semibold mt-0.5">{proj.subtitle}</p>
                </div>

                <p className="text-slate-600 text-xs line-clamp-3 leading-relaxed">
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.tools.slice(0, 5).map((tool) => (
                    <span key={tool} className="px-2.5 py-1 rounded-lg bg-slate-100 text-[11px] font-semibold text-slate-600">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to={`/projects/${proj.id}`}
                className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-100 text-xs font-bold text-indigo-600 hover:text-indigo-700"
              >
                <span>Read Project Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills Highlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 md:p-12 rounded-3xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-widest">Technical Toolkit</span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Skills & Core Technologies</h2>
            </div>
            <Link to="/skills" className="inline-flex items-center space-x-1 text-xs font-bold text-indigo-600 hover:underline">
              <span>View Full Skill Matrix</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.slice(0, 6).map((cat) => (
              <div key={cat.category} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <h4 className="text-xs font-extrabold text-slate-900 uppercase font-mono tracking-wider">{cat.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill.name} className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/70 text-xs font-medium text-slate-700">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
