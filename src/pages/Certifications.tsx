import React from 'react';
import { CERTIFICATIONS_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { Award, ShieldCheck } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="space-y-2">
        <span className="text-xs font-mono font-bold text-sky-600 uppercase tracking-widest">Credentials</span>
        <h1 className="text-4xl font-extrabold text-slate-900">Certifications & Memberships</h1>
        <p className="text-slate-600 text-sm max-w-xl">
          Verified industry achievements from Google Cloud, NPTEL, and IEEE.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CERTIFICATIONS_DATA.map((cert, idx) => (
          <div key={idx} className="glass-panel glass-panel-hover rounded-3xl p-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-50 to-indigo-50 flex items-center justify-center border border-indigo-100 shadow-xs">
                <Award className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-slate-900 mb-1">{cert.title}</h3>
                <p className="text-xs font-bold text-indigo-600">{cert.issuer}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>Issue Date:</span>
              <span className="text-slate-900 font-bold">{cert.date}</span>
            </div>
          </div>
        ))}

        {/* IEEE Professional Membership Card */}
        <div className="glass-panel glass-panel-hover rounded-3xl p-7 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-50 to-purple-50 flex items-center justify-center border border-indigo-100 shadow-xs">
              <ShieldCheck className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-slate-900 mb-1">IEEE Professional Membership</h3>
              <p className="text-xs font-bold text-indigo-600 mb-2">Institute of Electrical and Electronics Engineers</p>
              <p className="text-xs text-slate-600 font-mono">ID: <strong className="text-slate-900">{PERSONAL_INFO.ieeeMembership}</strong></p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
            <span>Status:</span>
            <span className="text-emerald-600 font-bold">Active Member</span>
          </div>
        </div>
      </div>
    </div>
  );
};
