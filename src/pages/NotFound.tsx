import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="pt-36 pb-24 max-w-xl mx-auto px-4 text-center space-y-6">
      <div className="w-16 h-16 rounded-3xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center mx-auto shadow-xs">
        <AlertCircle className="w-8 h-8" />
      </div>
      <h1 className="text-6xl font-extrabold font-mono text-slate-900 tracking-wider">404</h1>
      <h2 className="text-2xl font-bold text-slate-800">Page Not Found</h2>
      <p className="text-xs text-slate-500">
        The requested page does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center space-x-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-xs font-bold shadow-md shadow-sky-500/20"
      >
        <Home className="w-4 h-4" />
        <span>Return to Home</span>
      </Link>
    </div>
  );
};
