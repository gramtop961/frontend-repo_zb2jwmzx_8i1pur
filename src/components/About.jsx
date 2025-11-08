import React from 'react';
import { Cpu, Wrench } from 'lucide-react';

const skillBadges = [
  { icon: <Wrench className="h-4 w-4" />, label: 'Equipment Design' },
  { icon: <Cpu className="h-4 w-4" />, label: 'Controls & Automation' },
  { icon: <Cpu className="h-4 w-4" />, label: 'Embedded & IoT' },
  { icon: <Cpu className="h-4 w-4" />, label: 'Python / FastAPI' },
  { icon: <Cpu className="h-4 w-4" />, label: 'React / TypeScript' },
  { icon: <Cpu className="h-4 w-4" />, label: 'Data & Telemetry' },
];

const About = () => {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-16 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-md bg-emerald-500/20 p-2 text-emerald-400">
            <Wrench className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-semibold md:text-3xl">About</h2>
        </div>

        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-3">
            <p className="text-slate-300">
              I am an equipment engineer with a passion for bridging hardware and software. From concept to commissioning, I enjoy solving practical problems, building intuitive interfaces, and closing the loop with data. I collaborate with cross‑functional teams to deliver robust systems that scale.
            </p>
            <p className="mt-4 text-slate-300">
              My toolkit spans CAD and tolerance analysis to control systems, embedded devices, and modern web apps. I translate operational needs into reliable architectures and clean code.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="mb-3 text-sm font-medium text-slate-300">Core skills</div>
              <div className="flex flex-wrap gap-2">
                {skillBadges.map((b, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-100"
                  >
                    {b.icon}
                    {b.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
