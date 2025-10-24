import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import CVButton from '@/components/CVButton';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-50 font-sans dark:bg-zinc-950">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-blue-600 opacity-5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-96 w-96 bg-yellow-400 opacity-5 blur-3xl"></div>
        <div className="absolute right-1/3 top-0 h-64 w-64 bg-red-600 opacity-5 blur-3xl"></div>
      </div>

      <main className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <CVButton />
      </main>
    </div>
  );
}
