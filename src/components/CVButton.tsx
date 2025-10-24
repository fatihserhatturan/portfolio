import { Download } from 'lucide-react';

export default function CVButton() {
  return (
    <a
      href="/Fatih_Serhat_Turan.pdf"
      download
      className="group fixed bottom-8 right-8 flex items-center gap-3 border-4 border-black bg-red-600 px-8 py-4 font-mono text-sm font-bold uppercase tracking-widest text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-yellow-400 hover:text-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
    >
      <Download className="h-5 w-5" strokeWidth={2.5} />
      <span className="relative z-10">Download CV</span>
      <div className="absolute -right-2 -top-2 h-4 w-4 bg-blue-600 transition-all group-hover:bg-red-600"></div>
    </a>
  );
}
