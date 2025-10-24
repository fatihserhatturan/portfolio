import portfolioData from '@/data/portfolio-data.json';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = portfolioData.experience;

  return (
    <section className="relative mb-32">
      <div className="absolute -left-4 top-0 h-2 w-32 bg-blue-600"></div>

      <div className="mb-12 flex items-center gap-6">
        <div className="flex h-16 w-16 items-center justify-center bg-red-600">
          <Briefcase className="h-8 w-8 text-white" strokeWidth={2.5} />
        </div>
        <h2 className="text-5xl font-black uppercase tracking-tight text-black dark:text-white">
          Work<br />Experience
        </h2>
      </div>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="group relative border-l-4 border-yellow-400 bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:bg-zinc-900 dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
          >
            <div className="absolute -left-2 top-8 h-4 w-4 rotate-45 bg-red-600"></div>

            <h3 className="mb-3 text-2xl font-bold uppercase tracking-wide text-black dark:text-white">
              {exp.position}
            </h3>

            <div className="mb-4 flex items-center gap-3">
              <span className="font-mono text-sm font-bold uppercase tracking-wider text-red-600">
                {exp.company}
              </span>
              <div className="h-px flex-1 bg-black dark:bg-white"></div>
              <span className="font-mono text-sm font-bold uppercase tracking-wider text-blue-600">
                {exp.period}
              </span>
            </div>

            <p className="mb-4 leading-relaxed text-zinc-800 dark:text-zinc-300">
              {exp.description}
            </p>

            {exp.highlights && exp.highlights.length > 0 && (
              <ul className="space-y-2">
                {exp.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-400"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-yellow-400"></span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
