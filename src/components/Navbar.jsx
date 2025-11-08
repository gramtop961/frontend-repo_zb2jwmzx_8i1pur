import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-slate-950/80 to-transparent backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-slate-100">
        <a href="#" className="text-sm font-semibold tracking-tight">
          <span className="text-emerald-400">ENG</span> • Portfolio
        </a>

        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="hidden items-center gap-6 md:flex">
          <a href="#about" className="text-sm text-slate-300 hover:text-white">
            About
          </a>
          <a href="#projects" className="text-sm text-slate-300 hover:text-white">
            Projects
          </a>
          <a href="#contact" className="text-sm text-slate-300 hover:text-white">
            Contact
          </a>
        </div>
      </nav>

      {open && (
        <div className="mx-auto block max-w-6xl px-6 pb-4 md:hidden">
          <div className="flex flex-col gap-2 rounded-lg border border-white/10 bg-white/5 p-3">
            <a href="#about" className="text-sm text-slate-300 hover:text-white" onClick={() => setOpen(false)}>
              About
            </a>
            <a href="#projects" className="text-sm text-slate-300 hover:text-white" onClick={() => setOpen(false)}>
              Projects
            </a>
            <a href="#contact" className="text-sm text-slate-300 hover:text-white" onClick={() => setOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
