'use client';

import LightPillar from '@/components/LightPillar';
import {
  FileText,
  Search,
  BookOpen,
  Presentation,
  FileCode,
  Plus,
} from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">

      {/* 🌌 LightPillar Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <LightPillar
          topColor="#22d3ee"
          bottomColor="#1e3a8a"
          intensity={1.1}
          glowAmount={0.006}
          quality="medium"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="flex h-screen">

        {/* 🔹 SIDEBAR */}
        <aside className="w-64 bg-gray-900/80 border-r border-white/10 p-6 hidden md:flex flex-col">
          <h2 className="text-xl font-bold mb-8 text-teal-400">
            Manuscriptor
          </h2>

          <nav className="space-y-4 text-gray-300 text-sm">
            <div className="flex items-center gap-3 hover:text-white cursor-pointer">
              <Plus size={16} /> New Workspace
            </div>
            <div className="flex items-center gap-3 hover:text-white cursor-pointer">
              <FileText size={16} /> Manuscript Workspace
            </div>
            <div className="flex items-center gap-3 hover:text-white cursor-pointer">
              <Search size={16} /> Format Validator
            </div>
            <div className="flex items-center gap-3 hover:text-white cursor-pointer">
              <BookOpen size={16} /> Reference Organizer
            </div>
            <div className="flex items-center gap-3 hover:text-white cursor-pointer">
              <FileCode size={16} /> Submission Tools
            </div>
          </nav>

          <div className="mt-auto text-xs text-gray-400">
            Logged in • Demo Mode
          </div>
        </aside>

        {/* 🔹 MAIN CONTENT */}
        <main className="flex-1 flex flex-col items-center justify-center px-6">

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Your Intelligent Workspace for
            <br />
            <span className="text-teal-400">
              Academic Publishing
            </span>
          </h1>

          <p className="text-gray-400 text-center max-w-2xl mb-10">
            From raw manuscripts to submission‑ready formats —
            Manuscriptor AI helps you structure, validate, and prepare
            academic documents with precision.
          </p>

          {/* 🧠 INPUT BOX */}
          <div className="w-full max-w-3xl bg-gray-900/80 border border-white/10 rounded-2xl p-4 mb-10">
            <input
              type="text"
              placeholder="Describe your publication task or paste manuscript instructions here…"
              className="w-full bg-transparent outline-none text-sm text-white placeholder-gray-400"
            />
          </div>

          {/* ⚡ QUICK ACTION CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">

            {[
              {
                icon: <Search />,
                title: 'Manuscript Review',
                desc: 'AI‑assisted structural and formatting analysis',
              },
              {
                icon: <FileText />,
                title: 'Draft Refinement',
                desc: 'Improve clarity, sections, and academic tone',
              },
              {
                icon: <Presentation />,
                title: 'Conference Presentation',
                desc: 'Generate publication‑ready PPT slides',
              },
              {
                icon: <FileCode />,
                title: 'LaTeX & Journal Format',
                desc: 'Convert documents into compliant templates',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-800/60 border border-white/10 rounded-xl p-6 hover:border-teal-500/40 transition cursor-pointer"
              >
                <div className="text-teal-400 mb-3">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

          {/* Tagline */}
          <p className="mt-10 text-xs text-gray-500">
            Built for researchers • Designed for publications
          </p>
        </main>
      </div>
    </div>
  );
}
