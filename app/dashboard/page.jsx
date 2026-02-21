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
  const [description, setDescription] = useState('');
  const [processing, setProcessing] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState(null);
  const [selectedAlterations, setSelectedAlterations] = useState([]);

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

  const toggleAlteration = (option) => {
    setSelectedAlterations((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };

  const handleProcess = () => {
    if (!file) return alert('Upload manuscript first.');
    if (!selectedFormat) return alert('Select publication format.');
    if (!description.trim())
      return alert('Enter your requirement.');

    setProcessing(true);
    setCompleted(false);

    setTimeout(() => {
      setProcessing(false);
      setCompleted(true);
    }, 2500);
  };

  const handleDownload = () => {
    const content = `
Manuscriptor Processed File
----------------------------------
Original File: ${file?.name}
Publication Format: ${selectedFormat}
Alterations: ${selectedAlterations.join(', ') || 'None'}

User Requirement:
${description}

Status: Successfully Processed
`;

    const blob = new Blob([content], {
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    });

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `processed_${file?.name || 'manuscript'}.docx`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="relative min-h-screen text-white">

      {/* BACKGROUND */}
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

      {/* HEADER */}
      <header className="h-16 px-6 flex items-center border-b border-white/10 bg-gray-900/70 backdrop-blur">
        <h1 className="text-lg font-semibold text-white">
          Manuscriptor Workspace
        </h1>
      </header>

      <div className="flex min-h-[calc(100vh-4rem)]">

        {/* SIDEBAR */}
        <aside className="w-64 bg-gray-900/85 border-r border-white/10 p-6 hidden md:flex flex-col">
          <h2 className="text-teal-400 font-semibold text-lg mb-8">
            Manuscriptor
          </h2>

          <button className="flex items-center gap-3 mb-8 px-4 py-2 rounded-lg bg-teal-500/10 text-teal-300 hover:bg-teal-500/20 transition text-sm font-medium">
            <Plus size={16} />
            New Workspace
          </button>

          <nav className="space-y-1 text-sm text-gray-300">
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 cursor-pointer">
              <LayoutGrid size={16} />
              Workspace
            </div>

            <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 cursor-pointer">
              <FileCheck size={16} />
              Format Validator
            </div>

            <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 cursor-pointer">
              <Send size={16} />
              Submission Tools
            </div>

            <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 cursor-pointer">
              <History size={16} />
              History
            </div>
          </nav>

          <div className="mt-auto pt-6 text-xs text-gray-500">
            Logged in · Demo Mode
          </div>
        </aside>

        {/* MAIN */}
        <main ref={contentRef} className="flex-1 px-8 py-10 space-y-16">

          {/* HERO */}
          <section className="max-w-5xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your Intelligent Workspace for{' '}
              <span className="text-teal-400">
                Academic Publishing
              </span>
            </h1>
            <p className="text-gray-300 max-w-3xl">
              From raw manuscripts to submission-ready formats — Manuscriptor
              helps you structure, validate, and prepare academic documents
              across multiple publication standards with precision.
            </p>
          </section>

          {/* UPLOAD */}
          <section>
            <h2 className="text-xl font-semibold mb-4">
              Upload Manuscript
            </h2>

            <div className="bg-gray-900/80 border border-dashed border-white/20 rounded-xl p-6 text-center hover:border-teal-400 transition">
              <input
                type="file"
                accept=".doc,.docx,.pdf"
                className="hidden"
                id="fileUpload"
                onChange={(e) => {
                  if (e.target.files.length > 0) {
                    setFile(e.target.files[0]);
                    setCompleted(false);
                  }
                }}
              />

              <label htmlFor="fileUpload" className="cursor-pointer">
                <Upload className="mx-auto text-teal-400 mb-3" />
                {!file ? (
                  <p className="text-gray-300 text-sm">
                    Click to upload manuscript
                  </p>
                ) : (
                  <p className="text-teal-400 text-sm font-medium">
                    {file.name}
                  </p>
                )}
              </label>
            </div>
          </section>

          {/* DESCRIPTION */}
          <section>
            <h2 className="text-xl font-semibold mb-4">
              Describe Your Requirement
            </h2>

            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Example: Convert to Springer format, fix references..."
              className="w-full bg-gray-900/80 border border-white/10 rounded-xl p-4 text-sm text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-teal-500"
            />
          </section>

          {/* PUBLICATION FORMAT */}
          <section>
            <h2 className="text-xl font-semibold mb-6">
              Select Publication Format
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['IEEE', 'Springer', 'ACM', 'Elsevier'].map((f) => (
                <div
                  key={f}
                  onClick={() => setSelectedFormat(f)}
                  className={`rounded-xl py-6 text-center cursor-pointer transition border backdrop-blur ${
                    selectedFormat === f
                      ? 'border-teal-400 bg-teal-500/10 text-teal-300'
                      : 'border-white/10 bg-gray-800/50 hover:border-teal-400'
                  }`}
                >
                  {f}
                </div>
              ))}
            </div>
          </section>

          {/* SELECT ALTERATIONS */}
          <section>
            <h2 className="text-xl font-semibold mb-6">
              Select Alterations
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Structure validation',
                'Reference formatting',
                'Template compliance',
                'Figure & table alignment',
              ].map((opt) => (
                <div
                  key={opt}
                  onClick={() => toggleAlteration(opt)}
                  className={`rounded-xl p-5 flex items-center gap-4 cursor-pointer transition border ${
                    selectedAlterations.includes(opt)
                      ? 'border-teal-400 bg-teal-500/10'
                      : 'border-white/10 bg-gray-800/50 hover:border-teal-400'
                  }`}
                >
                  <CheckCircle
                    size={18}
                    className={`${
                      selectedAlterations.includes(opt)
                        ? 'text-teal-400'
                        : 'text-gray-400'
                    }`}
                  />
                  <span>{opt}</span>
                </div>
              ))}
            </div>
          </section>

          {/* PROCESS */}
          <section>
            <button
              disabled={processing}
              onClick={handleProcess}
              className="px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl font-semibold disabled:opacity-50"
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
          {completed && (
            <section>
              <h2 className="text-xl font-semibold mb-4">
                Output
              </h2>

              <div className="bg-gray-900/70 border border-white/10 rounded-xl p-5 flex justify-between items-center">
                <div>
                  <p className="text-teal-400 text-sm font-medium">
                    Converted to {selectedFormat}
                  </p>
                </div>

                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  <Download size={16} />
                  Download
                </button>
              </div>
            </section>
          )}

        </main>
      </div>
    </div>
  );
}