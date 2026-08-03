import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Heart, ExternalLink, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200/80 pt-12 pb-8 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <Link to="/" className="flex items-center space-x-2">
              <Code2 className="w-5 h-5 text-indigo-600" />
              <span className="font-extrabold text-lg text-slate-900">SAI SARVESH R</span>
            </Link>
            <p className="text-slate-500 text-xs max-w-sm leading-relaxed">
              Computer Science & Engineering student at RNS Institute of Technology. Building modern web platforms, Node.js REST APIs, and smart systems.
            </p>
            <div className="flex items-center space-x-2 pt-1">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-300 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-300 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 font-mono">Navigation</h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li><Link to="/about" className="hover:text-indigo-600 transition-colors">About Me</Link></li>
              <li><Link to="/skills" className="hover:text-indigo-600 transition-colors">Skills & Tech</Link></li>
              <li><Link to="/projects" className="hover:text-indigo-600 transition-colors">Projects</Link></li>
              <li><Link to="/experience" className="hover:text-indigo-600 transition-colors">Experience</Link></li>
              <li><Link to="/resume" className="hover:text-indigo-600 transition-colors">Resume</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 font-mono">Contact Info</h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li><span className="font-semibold text-slate-900">Location:</span> Bangalore, India</li>
              <li><span className="font-semibold text-slate-900">IEEE:</span> ID #100890383</li>
              <li className="pt-1">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center space-x-1 text-xs text-indigo-600 hover:underline font-medium"
                >
                  <span>{PERSONAL_INFO.email}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Sai Sarvesh R. All rights reserved.</p>
          <p className="flex items-center space-x-1 mt-2 sm:mt-0">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>React, Vite & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
