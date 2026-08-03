import React from 'react';
import { PERSONAL_INFO, EDUCATION_DATA, EXPERIENCE_DATA, PROJECTS, CERTIFICATIONS_DATA, GOOGLE_DRIVE_RESUME_URL } from '../data/portfolioData';
import { Download } from 'lucide-react';

export const Resume: React.FC = () => {
  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 glass-panel p-6 rounded-3xl">
        <div>
          <span className="text-xs font-mono font-bold text-sky-600 uppercase tracking-widest">Official Document</span>
          <h1 className="text-3xl font-extrabold text-slate-900">Interactive Resume View</h1>
          <p className="text-xs text-slate-500 mt-0.5">Hosted PDF link stored on Google Drive</p>
        </div>

        <a
          href={GOOGLE_DRIVE_RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-xs font-bold shadow-md shadow-sky-500/20 hover:scale-105 transition-all"
        >
          <Download className="w-4 h-4" />
          <span>Download Resume PDF</span>
        </a>
      </div>

      {/* Clean White Styled Resume Sheet */}
      <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl space-y-8 text-slate-800">
        {/* Name & Contact */}
        <div className="border-b border-slate-200 pb-6 flex flex-col md:flex-row justify-between items-start">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">{PERSONAL_INFO.name}</h2>
            <p className="text-sky-600 text-xs font-mono font-bold mt-1">{PERSONAL_INFO.location}</p>
          </div>
          <div className="text-xs text-slate-600 space-y-1 mt-4 md:mt-0 font-mono">
            <p>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sky-600 font-bold hover:underline">{PERSONAL_INFO.email}</a></p>
            <p>Phone: {PERSONAL_INFO.phone}</p>
            <p>LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-sky-600 font-bold hover:underline">Sai Sarvesh R</a></p>
            <p>GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-sky-600 font-bold hover:underline">ssarveshr</a></p>
          </div>
        </div>

        {/* Objective */}
        <div className="space-y-2">
          <h3 className="text-xs uppercase font-mono font-bold text-sky-600 tracking-wider">OBJECTIVE</h3>
          <p className="text-xs text-slate-700 leading-relaxed">{PERSONAL_INFO.objective}</p>
        </div>

        {/* Education */}
        <div className="space-y-4">
          <h3 className="text-xs uppercase font-mono font-bold text-sky-600 tracking-wider">EDUCATION</h3>
          <div className="space-y-3">
            {EDUCATION_DATA.map((edu, idx) => (
              <div key={idx} className="flex justify-between items-start text-xs">
                <div>
                  <h4 className="font-bold text-slate-900">{edu.institution}</h4>
                  <p className="text-slate-600">{edu.degree} — <span className="text-sky-600 font-bold">{edu.score}</span></p>
                </div>
                <div className="text-right text-slate-500 font-mono">
                  <p>{edu.period}</p>
                  <p>{edu.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience */}
        <div className="space-y-4">
          <h3 className="text-xs uppercase font-mono font-bold text-sky-600 tracking-wider">EXPERIENCE</h3>
          {EXPERIENCE_DATA.map((exp) => (
            <div key={exp.id} className="space-y-2 text-xs">
              <div className="flex justify-between items-start">
                <h4 className="font-bold text-slate-900">{exp.company} — <span className="text-sky-600">{exp.role}</span></h4>
                <span className="text-slate-500 font-mono">{exp.period}</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                {exp.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="space-y-4">
          <h3 className="text-xs uppercase font-mono font-bold text-sky-600 tracking-wider">PROJECTS</h3>
          <div className="space-y-4 text-xs">
            {PROJECTS.map((proj) => (
              <div key={proj.id} className="space-y-1">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-slate-900">{proj.title} <span className="font-normal text-slate-500">({proj.tools.join(', ')})</span></h4>
                  <span className="text-slate-500 font-mono text-[11px]">{proj.date}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  {proj.keyFeatures.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-2">
          <h3 className="text-xs uppercase font-mono font-bold text-sky-600 tracking-wider">CERTIFICATIONS</h3>
          <ul className="list-disc list-inside space-y-1 text-xs text-slate-700">
            {CERTIFICATIONS_DATA.map((cert, idx) => (
              <li key={idx}>
                <span className="font-bold text-slate-900">{cert.title}</span> — {cert.issuer} ({cert.date})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
