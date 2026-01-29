'use client';

import { useEffect, useRef, useState } from 'react';
import LightPillar from '@/components/LightPillar';
import { gsap } from 'gsap';
import {
  Plus,
  LayoutGrid,
  FileCheck,
  Send,
  Upload,
  CheckCircle,
  Loader2,
  FileText,
  Download,
  History,
} from 'lucide-react';


export default function DashboardPage() {
  const contentRef = useRef(null);
  const [file, setFile] = useState(null);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (!contentRef.current) return;

    gsap.fromTo(
      contentRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.12,
        duration: 0.6,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <div className="relative min-h-screen text-white">

      {/* ================= BACKGROUND ================= */}
      <div className="fixed inset-0 min-h-screen w-full -z-10 pointer-events-none">
        <LightPillar
          topColor="#22d3ee"
          bottomColor="#1e3a8a"
          intensity={1.1}
          glowAmount={0.006}
          quality="medium"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* ================= TOP HEADER ================= */}
      <header className="h-16 px-6 flex items-center border-b border-white/10 bg-gray-900/70 backdrop-blur">
        <h1 className="text-lg font-semibold text-white">
          Manuscriptor Workspace
        </h1>
      </header>

      {/* ================= LAYOUT ================= */}
      <div className="flex min-h-[calc(100vh-4rem)]">

        {/* ========== LEFT SIDEBAR ========== */}
        {/* ========== LEFT SIDEBAR ========== */}
<aside className="w-64 bg-gray-900/85 border-r border-white/10 p-6 hidden md:flex flex-col">

  {/* Logo */}
  <h2 className="text-teal-400 font-semibold text-lg mb-8">
    Manuscriptor
  </h2>

  {/* New Workspace */}
  <button
    className="flex items-center gap-3 mb-8 px-4 py-2 rounded-lg
               bg-teal-500/10 text-teal-300 hover:bg-teal-500/20
               transition text-sm font-medium"
  >
    <Plus size={16} />
    New Workspace
  </button>

  {/* Navigation */}
  <nav className="space-y-1 text-sm text-gray-300">

    <div className="flex items-center gap-3 px-3 py-2 rounded-lg
                    hover:bg-white/5 cursor-pointer">
      <LayoutGrid size={16} />
      <span>Workspace</span>
    </div>

    <div className="flex items-center gap-3 px-3 py-2 rounded-lg
                    hover:bg-white/5 cursor-pointer">
      <FileCheck size={16} />
      <span>Format Validator</span>
    </div>

    <div className="flex items-center gap-3 px-3 py-2 rounded-lg
                    hover:bg-white/5 cursor-pointer">
      <Send size={16} />
      <span>Submission Tools</span>
    </div>

    <div className="flex items-center gap-3 px-3 py-2 rounded-lg
                    hover:bg-white/5 cursor-pointer">
      <History size={16} />
      <span>History</span>
    </div>

  </nav>

  {/* Footer */}
  <div className="mt-auto pt-6 text-xs text-gray-500">
    Logged in · Demo Mode
  </div>
</aside>


        {/* ========== MAIN CONTENT ========== */}
        <main
          ref={contentRef}
          className="flex-1 px-8 py-10 space-y-16"
        >

          {/* HERO */}
          <section className="max-w-5xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your Intelligent Workspace for{' '}
              <span className="text-teal-400">
                Academic Publishing
              </span>
            </h1>
            <p className="text-gray-300 max-w-3xl">
              From raw manuscripts to submission‑ready formats — Manuscriptor
              helps you structure, validate, and prepare academic documents
              across multiple publication standards with precision.
            </p>
          </section>

          {/* UPLOAD */}
          <section>
            <h2 className="text-xl font-semibold mb-4">
              Upload Manuscript
            </h2>
            <div className="bg-gray-900/80 border border-white/10 rounded-xl p-6">
              <Upload className="text-teal-400 mb-3" />
              <input
                type="file"
                accept=".docx"
                onChange={(e) => setFile(e.target.files[0])}
                className="text-sm text-gray-300"
              />
              {file && (
                <p className="text-teal-400 text-sm mt-3">
                  {file.name}
                </p>
              )}
            </div>
          </section>

          {/* DESCRIPTION */}
          <section>
            <h2 className="text-xl font-semibold mb-4">
              Describe Your Requirement
            </h2>
            <textarea
              rows={4}
              placeholder="Example: Convert this manuscript to Springer format and fix references..."
              className="w-full bg-gray-900/80 border border-white/10 rounded-xl p-4 text-sm text-white placeholder-gray-400 outline-none"
            />
          </section>

          {/* FORMAT */}
          <section>
            <h2 className="text-xl font-semibold mb-4">
              Select Publication Format
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['IEEE', 'Springer', 'ACM', 'Elsevier'].map((f) => (
                <div
                  key={f}
                  className="bg-gray-800/60 border border-white/10 rounded-lg p-4 text-center cursor-pointer hover:border-teal-400 transition"
                >
                  {f}
                </div>
              ))}
            </div>
          </section>

          {/* ALTERATIONS */}
          <section>
            <h2 className="text-xl font-semibold mb-4">
              Select Alterations
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Structure validation',
                'Reference formatting',
                'Template compliance',
                'Figure & table alignment',
              ].map((opt) => (
                <div
                  key={opt}
                  className="bg-gray-800/60 border border-white/10 rounded-lg p-4 flex items-center gap-3"
                >
                  <CheckCircle className="text-teal-400" size={16} />
                  <span className="text-sm">{opt}</span>
                </div>
              ))}
            </div>
          </section>

          {/* PROCESS */}
          <section>
            <button
              onClick={() => setProcessing(true)}
              className="px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl font-semibold"
            >
              Process Manuscript
            </button>

            {processing && (
              <div className="flex items-center gap-3 mt-4 text-gray-300">
                <Loader2 className="animate-spin text-teal-400" />
                Processing manuscript…
              </div>
            )}
          </section>

          {/* OUTPUT */}
          <section>
            <h2 className="text-xl font-semibold mb-4">
              Output
            </h2>
            <div className="bg-gray-900/70 border border-white/10 rounded-xl p-5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <FileText className="text-teal-400" />
                <span className="text-sm">Manuscript Ready</span>
              </div>
              <button className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-lg">
                <Download size={16} />
                Download
              </button>
            </div>
          </section>

          {/* HISTORY */}
          <section>
            <h2 className="text-xl font-semibold mb-4">
              Previously Processed
            </h2>
            <div className="space-y-3">
              <div className="bg-gray-800/60 p-4 rounded-lg text-sm">
                paper_v1.docx → IEEE
              </div>
              <div className="bg-gray-800/60 p-4 rounded-lg text-sm">
                draft_final.docx → Springer
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
