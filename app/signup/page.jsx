'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useRouter } from 'next/navigation';
import LightPillar from '@/components/LightPillar';

export default function SignupPage() {
  const boxRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, y: 60, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power4.out' }
    );
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <LightPillar
          topColor="#22d3ee"
          bottomColor="#1e3a8a"
          intensity={1.1}
          glowAmount={0.006}
          quality="medium"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Signup Box */}
      <div
        ref={boxRef}
        className="w-full max-w-md bg-gray-900/80 backdrop-blur border border-white/10 rounded-2xl p-8"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">
          Create Account
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-3 mb-6 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={() => router.push('/dashboard')}
          className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 transition"
        >
          Sign Up
        </button>

        <p className="text-gray-400 text-sm text-center mt-6">
          Already have an account?{' '}
          <span
            onClick={() => router.push('/login')}
            className="text-blue-400 cursor-pointer hover:underline"
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}
