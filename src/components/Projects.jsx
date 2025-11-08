import React from 'react';
import { Cpu, Boxes, LineChart } from 'lucide-react';

const projects = [
  {
    title: 'Automated Test Bench',
    description:
      'Designed and built a modular test bench with PLC control, safety interlocks, and telemetry dashboard. Reduced validation time by 35%.',
    icon: <Boxes className="h-5 w-5 text-emerald-400" />,
    tags: ['PLC', 'SCADA', 'Python', 'FastAPI', 'Grafana'],
  },
  {
    title: 'IoT Condition Monitoring',
    description:
      'Deployed low‑power sensors and edge firmware to stream vibration and temperature data. Built predictive maintenance models.',
    icon: <LineChart className="h-5 w-5 text-emerald-400" />,
    tags: ['Embedded', 'MQTT', 'Timeseries', 'React', 'Cloud'],
  },
  {
    title: 'Manufacturing Data Portal',
    description:
      'Full‑stack app that aggregates machine KPIs and traces, with role‑based access and batch analytics.',
    icon: <Cpu className="h-5 w-5 text-emerald-400" />,
    tags: ['React', 'TypeScript', 'FastAPI', 'MongoDB'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-slate-950 py-16 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-md bg-emerald-500/20 p-2 text-emerald-400">
            <Boxes className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-semibold md:text-3xl">Featured Projects</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5 transition hover:border-emerald-400/30 hover:shadow-[0_0_0_1px_rgba(52,211,153,0.25)]"
            >
              <div className="mb-3 flex items-center gap-3">
                {p.icon}
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              </div>
              <p className="mb-4 text-sm text-slate-300">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
