import portfolioData from '@/data/portfolio-data.json';
import { Mail} from 'lucide-react';
import { SiLinkedin, SiGithub, SiMedium } from 'react-icons/si';

export default function Contact() {
  const { email, links } = portfolioData.personal;

  return (
    <section className="relative">
      <div className="absolute right-0 top-0 h-full w-1/3 bg-yellow-400 opacity-10"></div>

      <div className="relative border-4 border-black bg-white p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:bg-zinc-900 dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]">
        <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-red-600"></div>
        <div className="absolute -bottom-4 -left-4 h-12 w-12 bg-blue-600"></div>

        <h2 className="mb-8 text-5xl font-black uppercase tracking-tight text-black dark:text-white">
          Get In<br />Touch
        </h2>

        <div className="mb-8 space-y-4 border-l-4 border-yellow-400 pl-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center bg-red-600">
              <Mail className="h-4 w-4 text-white" strokeWidth={2.5} />
            </div>
            <p className="font-mono text-sm font-bold uppercase tracking-widest text-zinc-800 dark:text-zinc-300">
              {email}
            </p>
          </div>
          <div className="h-px bg-black dark:bg-white"></div>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 overflow-hidden border-2 border-black bg-blue-600 px-8 py-4 font-mono text-sm font-bold uppercase tracking-wider text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
          >
            <SiLinkedin className="h-5 w-5" />
            <span>LinkedIn</span>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-red-600 transition-all group-hover:w-full"></div>
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 overflow-hidden border-2 border-black bg-yellow-400 px-8 py-4 font-mono text-sm font-bold uppercase tracking-wider text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
          >
            <SiGithub className="h-5 w-5" />
            <span>GitHub</span>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 transition-all group-hover:w-full"></div>
          </a>
          <a
            href={links.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 overflow-hidden border-2 border-black bg-red-600 px-8 py-4 font-mono text-sm font-bold uppercase tracking-wider text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
          >
            <SiMedium className="h-5 w-5" />
            <span>Medium</span>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-yellow-400 transition-all group-hover:w-full"></div>
          </a>
        </div>
      </div>
    </section>
  );
}
