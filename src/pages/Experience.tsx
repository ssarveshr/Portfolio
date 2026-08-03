import React from 'react';
import { EXPERIENCE_DATA, LEADERSHIP_DATA } from '../data/portfolioData';
import { Briefcase, Users, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="space-y-2">
        <span className="text-xs font-mono font-bold text-sky-600 uppercase tracking-widest">Industry & Community</span>
        <h1 className="text-4xl font-extrabold text-slate-900">Experience & Leadership</h1>
        <p className="text-slate-600 text-sm max-w-xl">
          Backend developer training and technical leadership achievements at GDG on Campus RNSIT.
        </p>
      </div>

      {/* Experience Section */}
      <div className="space-y-8">
        <h2 className="text-2xl font-extrabold text-slate-900 flex items-center space-x-3">
          <Briefcase className="w-6 h-6 text-indigo-600" />
          <span>Work Experience</span>
        </h2>

        {EXPERIENCE_DATA.map((exp) => (
          <div key={exp.id} className="glass-panel p-8 rounded-3xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-xl font-extrabold text-slate-900">{exp.role}</h3>
                <p className="text-indigo-600 text-sm font-bold">{exp.company}</p>
              </div>
              <div className="text-xs text-slate-500 font-mono space-y-1 sm:text-right">
                <div className="flex items-center space-x-1 sm:justify-end">
                  <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center space-x-1 sm:justify-end">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs uppercase font-mono font-bold text-slate-400 tracking-wider">Deliverables & Achievements:</h4>
              <ul className="space-y-2.5 text-xs text-slate-700">
                {exp.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-xl bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Leadership Section */}
      <div className="space-y-8">
        <h2 className="text-2xl font-extrabold text-slate-900 flex items-center space-x-3">
          <Users className="w-6 h-6 text-indigo-600" />
          <span>Leadership & Technical Activities</span>
        </h2>

        {LEADERSHIP_DATA.map((lead, idx) => (
          <div key={idx} className="glass-panel p-8 rounded-3xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-xl font-extrabold text-slate-900">{lead.role}</h3>
                <p className="text-indigo-600 text-sm font-bold">{lead.organization}</p>
              </div>
              <div className="text-xs text-slate-500 font-mono">
                <span>{lead.period}</span>
              </div>
            </div>

            <ul className="space-y-2.5 text-xs text-slate-700">
              {lead.highlights.map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
