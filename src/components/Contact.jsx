import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-slate-950 py-16 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-md bg-emerald-500/20 p-2 text-emerald-400">
            <Mail className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-semibold md:text-3xl">Contact</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-slate-300">
              Interested in collaborating or have a project in mind? I’m open to consulting and full‑time opportunities.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="mailto:your@email.com"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-xl border border-white/10 bg-white/5 p-4"
          >
            <div className="grid gap-4">
              <div>
                <label className="mb-1 block text-sm text-slate-300">Name</label>
                <input
                  type="text"
                  className="w-full rounded-md border border-white/10 bg-slate-900 px-3 py-2 text-sm text-white placeholder-slate-400 outline-none focus:border-emerald-400/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-slate-300">Email</label>
                <input
                  type="email"
                  className="w-full rounded-md border border-white/10 bg-slate-900 px-3 py-2 text-sm text-white placeholder-slate-400 outline-none focus:border-emerald-400/50"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-slate-300">Message</label>
                <textarea
                  rows={4}
                  className="w-full rounded-md border border-white/10 bg-slate-900 px-3 py-2 text-sm text-white placeholder-slate-400 outline-none focus:border-emerald-400/50"
                  placeholder="Tell me about your project"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-emerald-950 shadow hover:bg-emerald-400"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
