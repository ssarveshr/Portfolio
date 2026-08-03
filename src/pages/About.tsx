import React from 'react';
import { PERSONAL_INFO, EDUCATION_DATA, LEADERSHIP_DATA, GOOGLE_DRIVE_RESUME_URL } from '../data/portfolioData';
import { Download, GraduationCap, Award, Code2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-mono font-bold text-sky-600 uppercase tracking-widest">Background & Profile</span>
        <h1 className="text-4xl font-extrabold text-slate-900">About Me</h1>
        <p className="text-slate-600 text-sm leading-relaxed">
          Computer Science & Engineering student at RNS Institute of Technology, specializing in Node.js backend development, REST APIs, and modern full-stack web platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          {/* Engineering Objective */}
          <div className="glass-panel p-8 rounded-3xl space-y-4">
            <h2 className="text-xl font-extrabold text-slate-900 flex items-center space-x-2">
              <Code2 className="w-5 h-5 text-indigo-600" />
              <span>Engineering Focus</span>
            </h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              {PERSONAL_INFO.objective}
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Currently working as a <strong>Backend Developer Trainee at SOFZENIX IT SOLUTIONS LLP</strong>, designing production-ready RESTful APIs with Node.js, Express.js, MongoDB, JWT authentication, and centralized error handling.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="glass-panel p-8 rounded-3xl space-y-6">
            <h2 className="text-xl font-extrabold text-slate-900 flex items-center space-x-2">
              <GraduationCap className="w-5 h-5 text-indigo-600" />
              <span>Education</span>
            </h2>

            <div className="space-y-6 border-l-2 border-indigo-100 pl-6 ml-2">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="relative space-y-1">
                  <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-indigo-600 border-4 border-white shadow-xs" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h3 className="text-base font-extrabold text-slate-900">{edu.institution}</h3>
                    <span className="text-xs font-mono text-indigo-600 font-semibold">{edu.period}</span>
                  </div>
                  <p className="text-xs font-semibold text-slate-700">{edu.degree}</p>
                  <p className="text-xs text-slate-500">{edu.location} • <strong className="text-indigo-700">{edu.score}</strong></p>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership */}
          <div className="glass-panel p-8 rounded-3xl space-y-6">
            <h2 className="text-xl font-extrabold text-slate-900 flex items-center space-x-2">
              <Award className="w-5 h-5 text-indigo-600" />
              <span>Leadership & Community</span>
            </h2>

            {LEADERSHIP_DATA.map((lead, idx) => (
              <div key={idx} className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900">{lead.role}</h3>
                    <p className="text-xs font-bold text-indigo-600">{lead.organization}</p>
                  </div>
                  <span className="text-xs font-mono text-slate-400 mt-1 sm:mt-0">{lead.period}</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-600 list-disc list-inside">
                  {lead.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="glass-panel p-6 rounded-3xl space-y-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase font-mono tracking-wider">Languages</h3>
            <div className="space-y-2">
              {PERSONAL_INFO.languages.map((lang) => (
                <div key={lang.name} className="flex justify-between items-center text-xs">
                  <span className="text-slate-700 font-medium">{lang.name}</span>
                  <span className="text-indigo-600 font-mono font-semibold">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-6 rounded-3xl space-y-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase font-mono tracking-wider">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {PERSONAL_INFO.interests.map((interest) => (
                <span key={interest} className="px-3 py-1 rounded-xl bg-indigo-50 text-indigo-700 text-xs font-medium border border-indigo-100">
                  {interest}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-panel p-6 rounded-3xl space-y-4 text-center">
            <h3 className="text-sm font-bold text-slate-900 uppercase font-mono tracking-wider">Official Resume</h3>
            <p className="text-xs text-slate-500">Download Sai Sarvesh R's complete resume hosted on Google Drive.</p>
            <a
              href={GOOGLE_DRIVE_RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 w-full justify-center px-4 py-3 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-xs font-bold shadow-md shadow-sky-500/20"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
