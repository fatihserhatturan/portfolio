<template>
  <div class="min-h-screen bg-indigo-600 text-white">
    <div class="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 right-1/4 w-64 h-64 bg-lime-300 rounded-full opacity-10 blur-xl"></div>
      <div class="absolute bottom-1/3 left-1/4 w-48 h-48 bg-purple-500 rounded-full opacity-10 blur-xl"></div>

      <div class="absolute top-1/3 right-1/3 w-32 h-32 opacity-10">
        <div class="grid grid-cols-4 gap-2">
          {Array.from({ length: 16 }).map((_, i) => (
            <div :key="i" class="w-1 h-1 bg-lime-300 rounded-full"></div>
          ))}
        </div>
      </div>
    </div>

    <nav class="relative z-10 px-6 py-4">
      <div class="container mx-auto flex justify-between items-center">
        <div class="text-2xl font-bold tracking-tight">
          <span class="text-lime-300">Fatih Serhat Turan</span>
        </div>
        <div class="hidden md:flex items-center">
          <div class="flex space-x-6 mr-6">
            <a href="#about" class="text-sm hover:text-lime-300 transition">About</a>
            <a href="#experience" class="text-sm hover:text-lime-300 transition">Experience</a>
            <a href="#skills" class="text-sm hover:text-lime-300 transition">Skills</a>
            <a href="#projects" class="text-sm hover:text-lime-300 transition">Projects</a>
            <a href="#contact" class="text-sm hover:text-lime-300 transition">Contact</a>
          </div>
          <a href="/Fatih_Serhat_Turan_CV.pdf" download class="bg-lime-300 text-indigo-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-lime-400 transition-all flex items-center">
            <i class="fas fa-download mr-2 text-xs"></i> Download CV
          </a>
        </div>
        <div class="md:hidden flex items-center">
          <a href="/Fatih_Serhat_Turan_CV.pdf" download class="bg-lime-300 text-indigo-900 px-3 py-1 rounded-md text-xs font-medium hover:bg-lime-400 transition-all mr-4">
            <i class="fas fa-download mr-1"></i> CV
          </a>
          <button class="text-xl">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>

    <header class="relative z-10 pt-12 pb-20">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-3/5 mb-12 md:mb-0">
            <h1 class="text-4xl lg:text-6xl font-bold mb-2 leading-tight">
              Fullstack<br />Developer.
            </h1>
            <p class="text-indigo-200 mb-6 max-w-md">
              I like to craft solid and scalable frontend & backend solutions with great user experiences.
            </p>

            <div class="flex space-x-4 mb-8">
              <a :href="data.personal.social.github" target="_blank" class="bg-indigo-700 hover:bg-indigo-800 p-3 rounded-full transition-all">
                <i class="fab fa-github text-lime-300"></i>
              </a>
              <a :href="data.personal.social.linkedin" target="_blank" class="bg-indigo-700 hover:bg-indigo-800 p-3 rounded-full transition-all">
                <i class="fab fa-linkedin-in text-lime-300"></i>
              </a>
              <a :href="data.personal.social.medium" target="_blank" class="bg-indigo-700 hover:bg-indigo-800 p-3 rounded-full transition-all">
                <i class="fab fa-medium-m text-lime-300"></i>
              </a>
            </div>

            <div class="flex space-x-4">
              <a href="#projects" class="bg-lime-300 text-indigo-900 px-5 py-2 rounded-md font-medium text-sm hover:bg-lime-400 transition-all">
                View Projects
              </a>
              <a href="#contact" class="border border-lime-300 text-lime-300 px-5 py-2 rounded-md font-medium text-sm hover:bg-indigo-700 transition-all">
                Contact Me
              </a>
            </div>
          </div>

          <div class="md:w-2/5">
            <div class="relative mx-auto w-64 h-64 md:w-72 md:h-72">
              <div class="absolute inset-0 bg-indigo-700 rounded-md rotate-3"></div>
              <div class="absolute inset-0 border-2 border-lime-300 rounded-md -rotate-3"></div>
              <div class="absolute inset-2 bg-indigo-600 rounded-md overflow-hidden">
                <img src="/image.png" alt="Fatih Serhat Turan" class="w-full h-full object-cover" />
              </div>

              <div class="absolute -right-2 top-1/2 flex flex-col space-y-2">
                <div class="w-2 h-2 rounded-full bg-lime-300"></div>
                <div class="w-2 h-2 rounded-full bg-cyan-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section id="about" class="py-20 bg-white text-indigo-900">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-12 text-center relative inline-block">
          About Me
          <div class="absolute -bottom-2 left-0 w-16 h-1 bg-lime-300"></div>
        </h2>

        <div class="flex flex-col md:flex-row items-start gap-10">
          <div class="md:w-2/3">
            <div v-for="(paragraph, index) in data.about" :key="index" class="text-indigo-800 mb-4">
              {{ paragraph }}
            </div>
          </div>
          <div class="md:w-1/3">
            <div class="bg-indigo-50 p-6 rounded-md">
              <h3 class="text-lg font-semibold mb-4 text-indigo-900">
                Contact Info
              </h3>
              <div class="space-y-4">
                <div class="flex items-center">
                  <div class="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-3">
                    <i class="fas fa-envelope text-sm"></i>
                  </div>
                  <div>
                    <div class="text-indigo-400 text-xs">Email</div>
                    <div class="text-indigo-800 text-sm">{{ data.personal.contact.email }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="experience" class="py-20 bg-indigo-700">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-12 text-center text-white relative inline-block">
          Experience
          <div class="absolute -bottom-2 left-0 w-16 h-1 bg-lime-300"></div>
        </h2>

        <div class="space-y-8 max-w-3xl mx-auto">
          <div v-for="(job, index) in data.experience" :key="index" class="bg-indigo-600 rounded-md p-6">
            <div class="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h3 class="text-xl font-bold text-white">{{ job.title }}</h3>
                <div class="text-lime-300 text-sm">{{ job.company }}</div>
              </div>
              <div class="mt-2 md:mt-0">
                <span class="bg-indigo-800 text-indigo-200 py-1 px-3 rounded-md text-xs">{{ job.period }}</span>
              </div>
            </div>

            <ul class="space-y-2 text-indigo-200 text-sm">
              <li v-for="(responsibility, rIndex) in job.responsibilities" :key="rIndex" class="flex">
                <span class="text-lime-300 mr-2">›</span>
                <span>{{ responsibility }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="skills" class="py-20 bg-white text-indigo-900">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-12 text-center relative inline-block">
          Skills
          <div class="absolute -bottom-2 left-0 w-16 h-1 bg-lime-300"></div>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-indigo-50 rounded-md p-6">
            <div class="flex items-center mb-4">
              <div class="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white mr-3">
                <i class="fas fa-code text-sm"></i>
              </div>
              <h3 class="text-lg font-semibold">Programming</h3>
            </div>
            <ul class="space-y-2">
              <li v-for="(lang, index) in data.skills.programming" :key="index" class="flex items-center text-sm text-indigo-800">
                <div class="w-1 h-1 bg-lime-300 rounded-full mr-2"></div>
                <span>{{ lang }}</span>
              </li>
            </ul>
          </div>

          <div class="bg-indigo-50 rounded-md p-6">
            <div class="flex items-center mb-4">
              <div class="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white mr-3">
                <i class="fas fa-layer-group text-sm"></i>
              </div>
              <h3 class="text-lg font-semibold">Frameworks</h3>
            </div>
            <ul class="space-y-2">
              <li v-for="(framework, index) in data.skills.frameworks" :key="index" class="flex items-center text-sm text-indigo-800">
                <div class="w-1 h-1 bg-lime-300 rounded-full mr-2"></div>
                <span>{{ framework }}</span>
              </li>
            </ul>
          </div>

          <div class="bg-indigo-50 rounded-md p-6">
            <div class="flex items-center mb-4">
              <div class="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white mr-3">
                <i class="fas fa-database text-sm"></i>
              </div>
              <h3 class="text-lg font-semibold">Databases</h3>
            </div>
            <ul class="space-y-2">
              <li v-for="(db, index) in data.skills.databases" :key="index" class="flex items-center text-sm text-indigo-800">
                <div class="w-1 h-1 bg-lime-300 rounded-full mr-2"></div>
                <span>{{ db }}</span>
              </li>
            </ul>
          </div>

          <div class="bg-indigo-50 rounded-md p-6">
            <div class="flex items-center mb-4">
              <div class="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white mr-3">
                <i class="fas fa-network-wired text-sm"></i>
              </div>
              <h3 class="text-lg font-semibold">DevOps</h3>
            </div>
            <ul class="space-y-2">
              <li v-for="(devop, index) in data.skills.devops" :key="index" class="flex items-center text-sm text-indigo-800">
                <div class="w-1 h-1 bg-lime-300 rounded-full mr-2"></div>
                <span>{{ devop }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="py-20 bg-indigo-700">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-12 text-center text-white relative inline-block">
          Projects
          <div class="absolute -bottom-2 left-0 w-16 h-1 bg-lime-300"></div>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(project, index) in data.projects" :key="index" class="bg-indigo-600 rounded-md overflow-hidden">
            <div class="p-6">
              <div class="flex justify-between items-center mb-4">
                <h3 class="text-lg font-semibold text-white">{{ project.title }}</h3>
                <div class="bg-indigo-800 text-lime-300 py-1 px-2 rounded-md text-xs">{{ project.category }}</div>
              </div>

              <p class="text-indigo-200 text-sm mb-4 h-16 overflow-hidden">
                {{ project.description }}
              </p>

              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="(tech, tIndex) in project.technologies" :key="tIndex"
                      class="bg-indigo-800 text-indigo-200 px-2 py-1 rounded-md text-xs">{{ tech }}</span>
              </div>

              <div class="pt-3 border-t border-indigo-500">
                <a href="#" class="text-lime-300 flex items-center text-sm hover:text-white transition-all">
                  View Details
                  <i class="fas fa-arrow-right ml-2 text-xs"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="py-20 bg-white text-indigo-900">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-12 text-center relative inline-block">
          Contact
          <div class="absolute -bottom-2 left-0 w-16 h-1 bg-lime-300"></div>
        </h2>

        <div class="max-w-lg mx-auto bg-indigo-600 rounded-md overflow-hidden p-8 text-white text-center">
          <h3 class="text-2xl font-semibold mb-4">Get In Touch</h3>
          <p class="text-indigo-200 mb-8 max-w-md mx-auto">
            Feel free to reach out for collaborations or just a friendly hello.
          </p>

          <div class="flex items-center justify-center mb-10">
            <div class="w-10 h-10 rounded-full bg-indigo-700 flex items-center justify-center text-lime-300 mr-3">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="text-left">
              <div class="text-indigo-300 text-xs">Email</div>
              <div>{{ data.personal.contact.email }}</div>
            </div>
          </div>

          <div class="flex justify-center space-x-6 pt-6 border-t border-indigo-500">
            <a :href="data.personal.social.github" target="_blank" class="w-10 h-10 bg-indigo-700 rounded-full flex items-center justify-center text-white hover:text-lime-300 transition-all">
              <i class="fab fa-github"></i>
            </a>
            <a :href="data.personal.social.linkedin" target="_blank" class="w-10 h-10 bg-indigo-700 rounded-full flex items-center justify-center text-white hover:text-lime-300 transition-all">
              <i class="fab fa-linkedin"></i>
            </a>
            <a :href="data.personal.social.medium" target="_blank" class="w-10 h-10 bg-indigo-700 rounded-full flex items-center justify-center text-white hover:text-lime-300 transition-all">
              <i class="fab fa-medium"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <footer class="bg-indigo-900 text-white py-6">
      <div class="container mx-auto px-6 text-center">
        <div class="text-xl font-bold mb-2">
          <span class="text-white">{{ data.personal.name.split(' ')[0] }}</span>
          <span class="text-lime-300">{{ data.personal.name.split(' ')[1] }}</span>
        </div>
        <p class="text-indigo-300 text-sm mb-3">Fullstack Developer</p>
        <p class="text-xs text-indigo-400">&copy; {{ new Date().getFullYear() }} {{ data.personal.name }}. All Rights Reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import portfolioData from '@/assets/portfolio-data.json'

export default {
  name: 'PortfolioView',
  data() {
    return {
      data: portfolioData
    }
  }
}
</script>
