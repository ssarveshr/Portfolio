import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../data/portfolioData';
import { ArrowLeft, Github, Cpu, AlertTriangle, Lightbulb, CheckCircle2, Layers } from 'lucide-react';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="pt-32 pb-20 max-w-3xl mx-auto text-center px-4">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Project Not Found</h1>
        <p className="text-slate-600 text-sm mb-6">The requested project DPR page does not exist.</p>
        <button
          onClick={() => navigate('/projects')}
          className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Navigation link */}
      <div>
        <Link
          to="/projects"
          className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-indigo-600 hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects Showcase</span>
        </Link>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-100 text-xs font-mono font-semibold">
                {project.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">{project.date}</span>
            </div>
            <h1 className="text-4xl font-extrabold text-slate-900">{project.title}</h1>
            <p className="text-indigo-600 font-bold text-sm mt-1">{project.subtitle}</p>
          </div>

          <div className="flex items-center space-x-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-2xl bg-white border border-slate-200 text-slate-800 text-xs font-bold shadow-xs hover:border-slate-300"
                id='hi'
              >
                <Github className="w-4 h-4 text-slate-700" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Tech Stack Badges */}
      <div className="glass-panel p-6 rounded-3xl space-y-3">
        <h3 className="text-xs uppercase font-mono font-bold text-slate-400 tracking-wider">Technology Stack</h3>
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span key={tool} className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700 font-semibold font-mono">
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Overview & Problem Statement */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel p-6 rounded-3xl space-y-3">
          <h2 className="text-base font-extrabold text-slate-900 flex items-center space-x-2">
            <CheckCircle2 className="w-5 h-5 text-indigo-600" />
            <span>Project Overview</span>
          </h2>
          <p className="text-slate-600 text-xs leading-relaxed">{project.description}</p>
        </div>

        <div className="glass-panel p-6 rounded-3xl space-y-3">
          <h2 className="text-base font-extrabold text-slate-900 flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            <span>Problem Statement</span>
          </h2>
          <p className="text-slate-600 text-xs leading-relaxed">{project.problemStatement}</p>
        </div>
      </div>

      {/* Key Implementation Features */}
      <div className="glass-panel p-8 rounded-3xl space-y-4">
        <h2 className="text-lg font-extrabold text-slate-900 flex items-center space-x-2">
          <Cpu className="w-5 h-5 text-indigo-600" />
          <span>Key Implementation Features</span>
        </h2>

        <ul className="space-y-2.5 text-xs text-slate-700">
          {project.keyFeatures.map((feat, i) => (
            <li key={i} className="flex items-start space-x-3">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5 shrink-0" />
              <span className="leading-relaxed">{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Architecture */}
      <div className="glass-panel p-8 rounded-3xl space-y-3">
        <h2 className="text-lg font-extrabold text-slate-900 flex items-center space-x-2">
          <Layers className="w-5 h-5 text-indigo-600" />
          <span>System Architecture & Design</span>
        </h2>
        <p className="text-slate-700 text-xs leading-relaxed font-mono bg-slate-100/80 p-4 rounded-2xl border border-slate-200/80">
          {project.architecture}
        </p>
      </div>

      {/* Challenges & Roadmap */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel p-6 rounded-3xl space-y-3">
          <h3 className="text-sm font-extrabold text-slate-900 flex items-center space-x-2">
            <AlertTriangle className="w-4 h-4 text-indigo-600" />
            <span>Engineering Challenges</span>
          </h3>
          <ul className="space-y-2 text-xs text-slate-600 list-disc list-inside">
            {project.engineeringChallenges.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>

        <div className="glass-panel p-6 rounded-3xl space-y-3">
          <h3 className="text-sm font-extrabold text-slate-900 flex items-center space-x-2">
            <Lightbulb className="w-4 h-4 text-indigo-600" />
            <span>Future Roadmap</span>
          </h3>
          <ul className="space-y-2 text-xs text-slate-600 list-disc list-inside">
            {project.futureImprovements.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
