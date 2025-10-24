import portfolioData from '@/data/portfolio-data.json';

export default function Hero() {
  const { name, title } = portfolioData.personal;

  return (
    <section className="relative mb-32 overflow-hidden py-12">
      <div className="absolute -right-12 top-0 h-48 w-48 rounded-full bg-red-600 opacity-90"></div>
      <div className="absolute -left-8 bottom-0 h-32 w-32 bg-yellow-400"></div>
      <div className="absolute right-1/4 top-1/3 h-24 w-24 rotate-45 bg-blue-600 opacity-80"></div>

      <div className="relative">
        <div className="mb-8 inline-block border-l-8 border-red-600 pl-6">
          <h1 className="text-7xl font-black uppercase leading-none tracking-tight text-black dark:text-white">
            {name.split(' ')[0]}<br />{name.split(' ').slice(1).join(' ')}
          </h1>
        </div>
        <div className="ml-8 flex items-center gap-4">
          <div className="h-1 w-16 bg-black dark:bg-white"></div>
          <p className="text-2xl font-bold uppercase tracking-widest text-zinc-800 dark:text-zinc-200">
            {title}
          </p>
        </div>
      </div>
    </section>
  );
}
