import portfolioData from '@/data/portfolio-data.json';
import { Code2, Layers, Database, Container, Cloud, Brain, TestTube, Network } from 'lucide-react';
import {
   SiJavascript, SiTypescript, SiHtml5, SiCss3,
  SiDotnet, SiVuedotjs, SiNodedotjs, SiFastapi,
  SiMongodb, SiRedis, SiElasticsearch,
  SiDocker, SiKubernetes, SiRabbitmq,
  SiAmazon, SiFirebase, SiGooglecloud, SiOpenai,
  SiMocha,
} from 'react-icons/si';

const categoryIcons = {
  'Languages': Code2,
  'Frameworks': Layers,
  'Databases': Database,
  'DevOps': Container,
  'Cloud': Cloud,
  'AI/ML': Brain,
  'Testing': TestTube,
  'Architecture': Network
};

// Brand ikonları mapping
const brandIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'C#': Code2,
  'Java': Code2,
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript,
  'HTML/CSS': SiHtml5,
  'T-SQL': Code2,
  '.NET Core': SiDotnet,
  'Vue.js': SiVuedotjs,
  'Node.js': SiNodedotjs,
  'FastAPI': SiFastapi,
  'MSSQL': Code2,
  'MongoDB': SiMongodb,
  'Redis': SiRedis,
  'Elasticsearch': SiElasticsearch,
  'Docker': SiDocker,
  'Kubernetes': SiKubernetes,
  'RabbitMQ': SiRabbitmq,
  'Azure DevOps': SiJavascript,
  'AWS Bedrock': SiAmazon,
  'Firebase': SiFirebase,
  'Google Cloud': SiGooglecloud,
  'Azure OpenAI': SiOpenai,
  'OpenAI Models': SiOpenai,
  'Mocha': SiMocha,
};

export default function Skills() {
  const skills = portfolioData.skills;

  return (
    <section className="relative mb-32">
      <div className="absolute -right-8 top-12 h-24 w-24 rounded-full border-8 border-red-600"></div>

      <div className="mb-12 flex items-center gap-6">
        <div className="h-20 w-20 bg-yellow-400"></div>
        <h2 className="text-5xl font-black uppercase leading-tight tracking-tight text-black dark:text-white">
          Tools &<br />Skills
        </h2>
      </div>

      <div className="space-y-10">
        {Object.entries(skills).map(([category, items], categoryIndex) => {
          const IconComponent = categoryIcons[category as keyof typeof categoryIcons];

          return (
            <div key={categoryIndex} className="relative">
              <div className="mb-6 flex items-center gap-4">
                <div className={`flex h-10 w-10 items-center justify-center border-2 border-black dark:border-white ${
                  categoryIndex % 3 === 0 ? 'bg-red-600' :
                  categoryIndex % 3 === 1 ? 'bg-blue-600' :
                  'bg-yellow-400'
                }`}>
                  {IconComponent && (
                    <IconComponent
                      className="h-5 w-5 text-white dark:text-black"
                      strokeWidth={2.5}
                    />
                  )}
                </div>
                <h3 className="font-mono text-lg font-bold uppercase tracking-widest text-black dark:text-white">
                  {category}
                </h3>
                <div className="h-px flex-1 bg-zinc-300 dark:bg-zinc-700"></div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {items.map((skill, index) => {
                  const BrandIcon = brandIcons[skill];

                  return (
                    <div
                      key={index}
                      className="group relative bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:bg-zinc-900 dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
                    >
                      <div className="flex h-full flex-col items-center justify-center gap-3">
                        {BrandIcon && (
                          <div className={`flex h-8 w-8 items-center justify-center ${
                            categoryIndex % 3 === 0 ? 'text-red-600' :
                            categoryIndex % 3 === 1 ? 'text-blue-600' :
                            'text-yellow-400'
                          }`}>
                            <BrandIcon className="h-full w-full" />
                          </div>
                        )}

                        <p className="text-center font-mono text-xs font-bold uppercase tracking-wider text-black dark:text-white">
                          {skill}
                        </p>
                      </div>
                      <div className={`absolute -right-1 -top-1 h-2 w-2 ${
                        categoryIndex % 3 === 0 ? 'bg-red-600' :
                        categoryIndex % 3 === 1 ? 'bg-blue-600' :
                        'bg-yellow-400'
                      }`}></div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
