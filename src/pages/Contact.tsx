import React, { useState } from 'react';
import { PERSONAL_INFO, GOOGLE_DRIVE_RESUME_URL } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Download } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } });
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="space-y-2">
        <span className="text-xs font-mono font-bold text-sky-600 uppercase tracking-widest">Get In Touch</span>
        <h1 className="text-4xl font-extrabold text-slate-900">Contact Me</h1>
        <p className="text-slate-600 text-sm max-w-xl">
          Interested in internship opportunities or technical discussions? Feel free to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info Sidebar */}
        <div className="space-y-6">
          <div className="glass-panel p-7 rounded-3xl space-y-6">
            <h3 className="text-base font-extrabold text-slate-900 font-mono">Contact Details</h3>

            <div className="space-y-4 text-xs">
              <div className="flex items-start space-x-3">
                <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-slate-400 uppercase font-mono text-[10px] font-bold">Email</p>
                  <p className="text-slate-900 font-semibold">{PERSONAL_INFO.email}</p>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center space-x-1 text-[11px] text-indigo-600 hover:underline mt-1 font-semibold"
                  >
                    <Copy className="w-3 h-3" />
                    <span>{copied ? 'Copied to clipboard!' : 'Copy email'}</span>
                  </button>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-slate-400 uppercase font-mono text-[10px] font-bold">Phone</p>
                  <p className="text-slate-900 font-semibold">{PERSONAL_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-slate-400 uppercase font-mono text-[10px] font-bold">Location</p>
                  <p className="text-slate-900 font-semibold">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-3xl space-y-4 text-center">
            <h3 className="text-sm font-extrabold text-slate-900">Official Resume PDF</h3>
            <p className="text-xs text-slate-500">Stored Google Drive resume link</p>
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

        {/* Form */}
        <div className="md:col-span-2 glass-panel p-8 md:p-10 rounded-3xl">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">Message Sent!</h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Thank you for reaching out, {formData.name}. I will get back to you as soon as possible.
              </p>
              <button
                onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold shadow-md"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 shadow-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-700 mb-1">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 shadow-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-slate-700 mb-1">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Opportunity or inquiry"
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 shadow-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-slate-700 mb-1">Message *</label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 shadow-xs"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center space-x-2 w-full py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-xs font-bold shadow-md shadow-sky-500/20 hover:scale-[1.01] transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
