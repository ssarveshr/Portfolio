import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Search, Code2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = SKILL_CATEGORIES.map((cat) => ({
    ...cat,
    skills: cat.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  })).filter((cat) => cat.skills.length > 0);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-sky-600 uppercase tracking-widest">Technical Stack</span>
          <h1 className="text-4xl font-extrabold text-slate-900">Skills & Competencies</h1>
          <p className="text-slate-600 text-sm max-w-xl">
            Clean breakdown of programming languages, web technologies, databases, and DevOps tools.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search skills (e.g. Node, Python, SQL)..."
            className="w-full bg-white border border-slate-200 rounded-2xl pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 shadow-xs"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((cat) => (
          <div key={cat.category} className="glass-panel p-7 rounded-3xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Code2 className="w-5 h-5 text-indigo-600" />
                <h2 className="text-base font-extrabold text-slate-900 font-mono">{cat.category}</h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 text-xs font-semibold text-slate-700 hover:border-indigo-300 hover:text-indigo-600 transition-colors shadow-2xs"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-[11px] text-slate-400 font-mono">
              <span>Category item count</span>
              <span className="text-indigo-600 font-bold">{cat.skills.length} verified</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
