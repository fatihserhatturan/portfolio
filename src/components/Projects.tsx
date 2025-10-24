import portfolioData from '@/data/portfolio-data.json';
import { FolderGit2 } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

export default function Projects() {
  const projects = portfolioData.projects;

  return (
    <section className="relative mb-32">
      <div className="absolute -left-6 top-20 h-0 w-0 border-b-[60px] border-l-[30px] border-r-[30px] border-b-blue-600 border-l-transparent border-r-transparent"></div>

      <div className="mb-12 flex items-center gap-6 border-t-4 border-red-600 pt-8">
        <div className="flex h-16 w-16 items-center justify-center bg-yellow-400">
          <FolderGit2 className="h-8 w-8 text-black" strokeWidth={2.5} />
        </div>
        <h2 className="text-5xl font-black uppercase tracking-tight text-black dark:text-white">
          Projects
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden bg-gradient-to-br from-white to-zinc-100 p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:from-zinc-900 dark:to-zinc-800 dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] dark:hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]"
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rotate-45 bg-yellow-400 opacity-50"></div>

            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center border-2 border-black bg-black text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-yellow-400 hover:text-black hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:bg-white dark:text-black dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] dark:hover:bg-yellow-400 dark:hover:shadow-[1px_1px_0px_0px_rgba(255,255,255,1)]"
                aria-label="View on GitHub"
              >
                <SiGithub className="h-5 w-5" />
              </a>
            ) : (
              <div
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center border-2 border-zinc-300 bg-zinc-200 text-zinc-400 opacity-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-600"
                aria-label="GitHub link not available"
              >
                <SiGithub className="h-5 w-5" />
              </div>
            )}

            <h3 className="relative mb-3 pr-12 text-2xl font-bold uppercase tracking-wide text-black dark:text-white">
              {project.name}
            </h3>

            <p className="relative mb-6 leading-relaxed text-zinc-800 dark:text-zinc-300">
              {project.description}
            </p>

            <div className="relative flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="border-2 border-black bg-white px-4 py-2 font-mono text-sm font-bold uppercase tracking-wider text-black transition-colors hover:bg-blue-600 hover:text-white dark:border-white dark:bg-black dark:text-white dark:hover:bg-yellow-400 dark:hover:text-black"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 h-2 w-full bg-red-600"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
