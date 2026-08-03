import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/portfolioData';
import { ArrowRight, Search, Github } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [search, setSearch] = useState<string>('');

  const categories = ['All', 'Backend & Blockchain', 'Fullstack', 'AI & ML'];

  const filteredProjects = PROJECTS.filter((p) => {
    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
                          p.tools.some(t => t.toLowerCase().includes(search.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="space-y-2">
        <span className="text-xs font-mono font-bold text-sky-600 uppercase tracking-widest">Engineering Projects</span>
        <h1 className="text-4xl font-extrabold text-slate-900">Projects Showcase</h1>
        <p className="text-slate-600 text-sm max-w-xl">
          Detailed technical project breakdowns including problem statements, architecture, tech stack, and challenges.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects..."
            className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 shadow-xs"
          />
        </div>
      </div>

      {/* Projects List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="glass-panel glass-panel-hover rounded-3xl p-7 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-100 text-xs font-mono font-semibold">
                  {project.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">{project.date}</span>
              </div>

              <div>
                <h2 className="text-xl font-extrabold text-slate-900">{project.title}</h2>
                <p className="text-xs text-indigo-600 font-semibold mt-0.5">{project.subtitle}</p>
              </div>

              <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-1.5">
                <span className="text-[10px] uppercase font-mono font-bold text-slate-400 tracking-wider">Tech Stack:</span>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg bg-slate-100 text-[11px] font-semibold text-slate-600">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <Link
                to={`/projects/${project.id}`}
                className="inline-flex items-center space-x-1 text-xs font-bold text-indigo-600 hover:text-indigo-700"
              >
                <span>Read Full DPR Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100"
                  aria-label="GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
