// app/page.jsx
'use client';
import LightPillar from "@/components/LightPillar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FileText,
  Search,
  Layers,
  BarChart3,
  Globe,
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
  Sparkles,
  BookOpen,
  Shield,
  Cpu
} from 'lucide-react';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const HomePage = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const valueRef = useRef(null);

  const workflowRef = useRef(null);

  useEffect(() => {
    // Hero section animation
    gsap.fromTo('.hero-title',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.2 }
    );

    gsap.fromTo('.hero-subtitle',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.4 }
    );

    gsap.fromTo('.hero-button',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, delay: 0.6 }
    );

    // Features cards animation
    gsap.utils.toArray('.feature-card').forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.2,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

   gsap.utils.toArray('.value-card').forEach((card, i) => {
  gsap.fromTo(card,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: i * 0.15,
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    }
  );
});


    // Workflow steps animation
    gsap.utils.toArray('.workflow-step').forEach((step, i) => {
      gsap.fromTo(step,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: i * 0.3,
          scrollTrigger: {
            trigger: step,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const features = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'AI-Powered Writing',
      description: 'Advanced AI models help you draft, edit, and refine your manuscripts with intelligent suggestions.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Smart Literature Review',
      description: 'Access 280M+ research papers and get relevant citations automatically suggested.',
      color: 'from-blue-500 to-teal-500'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Plagiarism Check',
      description: 'Built-in plagiarism detection ensures your work meets publication standards.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Data Visualization',
      description: 'Create professional charts and graphs directly from your research data.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaboration Tools',
      description: 'Real-time collaboration with co-authors, reviewers, and supervisors.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Journal Matching',
      description: 'Find the perfect journal for your manuscript based on impact factor and scope.',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const tasks = [
    {
      title: 'Draft a Manuscript',
      description: 'From abstract to conclusion with AI-assisted writing',
      icon: <FileText className="w-5 h-5" />,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Systematic Literature Review',
      description: 'Comprehensive review with automated paper screening',
      icon: <BookOpen className="w-5 h-5" />,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Patent Search & Analysis',
      description: 'Prior art search and patentability assessment',
      icon: <Search className="w-5 h-5" />,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Build a Research Website',
      description: 'Create project websites with your publications',
      icon: <Globe className="w-5 h-5" />,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Create Scientific Charts',
      description: 'Professional data visualization tools',
      icon: <BarChart3 className="w-5 h-5" />,
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Conference Poster Generation',
      description: 'Design-ready posters from your research',
      icon: <Layers className="w-5 h-5" />,
      gradient: 'from-teal-500 to-blue-500'
    }
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Define Your Research Task',
      description: 'Describe what you need - manuscript draft, literature review, or analysis.',
      icon: <FileText className="w-8 h-8" />
    },
    {
      step: '02',
      title: 'AI Agent Selects Tools',
      description: 'Our AI chooses from 150+ specialized tools for your specific task.',
      icon: <Zap className="w-8 h-8" />
    },
    {
      step: '03',
      title: 'Review & Refine',
      description: 'Collaborate with AI to refine outputs and add your expertise.',
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      step: '04',
      title: 'Export & Publish',
      description: 'Export in any format - LaTeX, Word, PDF, or direct journal submission.',
      icon: <Sparkles className="w-8 h-8" />
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <Navbar />
      {/* LightPillar Background */}
    <div className="fixed inset-0 -z-10 pointer-events-none">
    <LightPillar
      topColor="#22d3ee"
      bottomColor="#1e3a8a"
      intensity={1.1}
      glowAmount={0.006}
      quality="medium"
      mixBlendMode="screen"
    />

  {/* Contrast overlay */}
  <div className="absolute inset-0 bg-black/55" />
</div>


      {/* Hero Section */}
      <section ref={heroRef} id="hero" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          
          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 font-['Inter']">
            AI Research Agent for{' '}
            <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              Manuscript Writing
            </span>
          </h1>
          
          <p className="hero-subtitle text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Write research tasks and Manuscriptor Agent will use the best AI Models, Tools, and Data to complete it for you.
          </p>
          
          <div className="hero-button flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity flex items-center gap-2">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-gray-700 text-gray-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800/50 transition-colors">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Features for Researchers</h2>
            <p className="text-gray-400 text-lg">Everything you need to accelerate your research workflow</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-teal-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* VALUE PROPOSITION SECTION */}
<section
  ref={valueRef}
  id="value"
  className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent"
>
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">
        Why Manuscriptor for Academic Publications?
      </h2>
      <p className="text-gray-400 text-lg max-w-3xl mx-auto">
        Built to automate and validate academic manuscript formatting across multiple publication standards using AI‑driven structure analysis.

      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          title: "Publication Standards Ready",
          desc: "Supports IEEE in Stage‑1, with Springer, ACM, and others planned.",
          icon: <BookOpen className="w-6 h-6" />,
          color: "from-blue-500 to-cyan-500"
        },
        {
          title: "AI Structure Detection",
          desc: "Automatically identifies sections, headings, and references.",
          icon: <Cpu className="w-6 h-6" />,
          color: "from-purple-500 to-pink-500"
        },
        {
          title: "Compliance Validation",
          desc: "Detects and fixes formatting violations before submission.",
          icon: <Shield className="w-6 h-6" />,
          color: "from-green-500 to-emerald-500"
        },
        {
          title: "Time Saving",
          desc: "Reduces hours of manual formatting to minutes.",
          icon: <Zap className="w-6 h-6" />,
          color: "from-orange-500 to-red-500"
        }
      ].map((item, index) => (
        <div
          key={index}
          className="value-card bg-gray-800/50 border border-gray-700 rounded-2xl p-8 hover:border-teal-500/40 transition-all"
        >
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6`}
          >
            {item.icon}
          </div>
          <h3 className="text-xl font-semibold mb-3">
            {item.title}
          </h3>
          <p className="text-gray-400">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>




      {/* Workflow Section */}
      <section ref={workflowRef} id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How Manuscriptor Works</h2>
            <p className="text-gray-400 text-lg">Four simple steps from idea to publication</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <div
                key={index}
                className="workflow-step relative"
              >
                <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 h-full">
                  <div className="text-teal-400 text-3xl font-bold mb-4">{step.step}</div>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                {index < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-8 h-0.5 bg-gradient-to-r from-teal-500 to-blue-600 transform translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-transparent rounded-3xl p-12">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your{' '}
              <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                Research Workflow?
              </span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of researchers who are publishing faster with Manuscriptor
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity">
                Start Free Trial - No Credit Card
              </button>
              <button className="border border-gray-700 text-gray-300 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800/50 transition-colors">
                Schedule a Demo
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-6">Free 14-day trial • Cancel anytime</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;