import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay that doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-950/80" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 pt-28 md:pt-36">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200 backdrop-blur">
          <Rocket className="h-4 w-4 text-emerald-400" />
          Equipment Engineer • Software-Fluent
        </span>
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-white drop-shadow-sm md:text-6xl">
          Building reliable machines and the software that powers them
        </h1>
        <p className="max-w-2xl text-slate-300 md:text-lg">
          I design, commission, and optimize equipment — then extend its capability with clean, maintainable software. Reliability, safety, and data-driven performance are my north stars.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 font-medium text-emerald-950 shadow hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
          >
            Get in touch
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 font-medium text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-slate-300/20"
          >
            View projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
