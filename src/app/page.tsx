export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-zinc-950/70 border-b border-zinc-100 dark:border-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight text-lg">
            NO<span className="text-sky-500">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-600 dark:text-zinc-400">
            <a href="#about" className="hover:text-zinc-950 dark:hover:text-white">About</a>
            <a href="#projects" className="hover:text-zinc-950 dark:hover:text-white">Projects</a>
            <a href="#stack" className="hover:text-zinc-950 dark:hover:text-white">Stack</a>
            <a href="#contact" className="hover:text-zinc-950 dark:hover:text-white">Contact</a>
          </nav>
          <a
            href="https://github.com/noahotim"
            className="inline-flex items-center rounded-full bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 px-5 py-2 text-sm font-medium hover:opacity-90"
          >
            GitHub
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500 via-indigo-500 to-violet-600 opacity-10 dark:opacity-20" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium tracking-widest text-sky-600 dark:text-sky-400 uppercase">Software Engineer</p>
              <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
                Noah Otim
                <span className="block text-zinc-500 dark:text-zinc-400 font-normal text-2xl md:text-3xl mt-3">
                  Practical software that solves real problems.
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400 max-w-xl">
                I build systems that remove friction and ship consistently. Focused on AI and automation, marketing and growth, and leadership for small teams.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#projects" className="inline-flex items-center rounded-full bg-sky-600 text-white px-6 py-3 text-sm font-medium hover:bg-sky-700">
                  View Projects
                </a>
                <a href="#contact" className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-800 px-6 py-3 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900">
                  Get in touch
                </a>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-zinc-500">
                <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Available for collaborations</span>
                <span>Uganda • Remote</span>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-8 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white font-semibold">NO</div>
                  <div>
                    <p className="font-medium">Noah Otim</p>
                    <p className="text-sm text-zinc-500">Software Engineer • Builder</p>
                  </div>
                  <span className="ml-auto text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">Open to work</span>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div className="rounded-2xl bg-zinc-50 dark:bg-zinc-800 p-4">
                    <p className="text-2xl font-semibold">15+</p><p className="text-xs text-zinc-500">Projects</p>
                  </div>
                  <div className="rounded-2xl bg-zinc-50 dark:bg-zinc-800 p-4">
                    <p className="text-2xl font-semibold">3</p><p className="text-xs text-zinc-500">Pillars</p>
                  </div>
                  <div className="rounded-2xl bg-zinc-50 dark:bg-zinc-800 p-4">
                    <p className="text-2xl font-semibold">100%</p><p className="text-xs text-zinc-500">Practical</p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-xs tracking-widest text-zinc-400 uppercase">Pillars</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300 text-xs">AI and Automation</span>
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 text-xs">Marketing and Growth</span>
                    <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300 text-xs">Leadership</span>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  &quot;People overcomplicate it. The answer is simpler than people think.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-semibold tracking-tight">About</h2>
            <p className="mt-2 text-zinc-500">Practical, honest and ahead.</p>
          </div>
          <div className="md:col-span-2 space-y-6 text-zinc-600 dark:text-zinc-400 leading-7">
            <p>
              I am Noah Otim, a software engineer who builds practical systems. My audience is marketers, founders and small teams who want strategy and growth tactics they can use immediately, without hype.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 pt-2">
              <div className="rounded-2xl border border-zinc-100 dark:border-zinc-800 p-5">
                <p className="font-medium text-zinc-950 dark:text-white">AI and Automation</p>
                <p className="mt-2 text-sm">How AI tools change work and how to apply them simply.</p>
              </div>
              <div className="rounded-2xl border border-zinc-100 dark:border-zinc-800 p-5">
                <p className="font-medium text-zinc-950 dark:text-white">Marketing</p>
                <p className="mt-2 text-sm">Strategy, content and growth that compounds.</p>
              </div>
              <div className="rounded-2xl border border-zinc-100 dark:border-zinc-800 p-5">
                <p className="font-medium text-zinc-950 dark:text-white">Leadership</p>
                <p className="mt-2 text-sm">Management, hiring and culture in small teams.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="bg-zinc-50 dark:bg-zinc-900/50 border-y border-zinc-100 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">Stack</h2>
          <p className="mt-2 text-zinc-500">Tools I use daily.</p>
          <div className="mt-8 flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://skillicons.dev/icons?i=ts,js,nodejs,nextjs,react,tailwind,python,docker,git,github,vercel,figma&perline=6" alt="Tech stack" className="max-w-full" />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <span className="px-3 py-1 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs">TypeScript</span>
            <span className="px-3 py-1 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs">Next.js</span>
            <span className="px-3 py-1 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs">Tailwind</span>
            <span className="px-3 py-1 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs">Python</span>
            <span className="px-3 py-1 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs">Docker</span>
            <span className="px-3 py-1 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs">Vercel</span>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Featured Projects</h2>
            <p className="mt-2 text-zinc-500">Selected work that shows how I build.</p>
          </div>
          <a href="https://github.com/noahotim" className="hidden md:inline text-sm text-sky-600 hover:underline">View all on GitHub →</a>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {[
            { name: "content-growth-machine", desc: "Content system for LinkedIn growth — posts, graphics, voice and scoring.", href: "https://github.com/noahotim/content-growth-machine", tag: "Next.js • Voice System" },
            { name: "educontrol-school-system", desc: "School management platform for administration and academics.", href: "https://github.com/noahotim/educontrol-school-system", tag: "TypeScript • System Design" },
            { name: "otzu-tech-solutions", desc: "Agency site and client systems — clean, fast and maintainable.", href: "https://github.com/noahotim/otzu-tech-solutions", tag: "Next.js • Tailwind" },
            { name: "portfolio", desc: "This portfolio — minimal, fast and content focused.", href: "https://github.com/noahotim/portfolio", tag: "Next.js • Tailwind" },
          ].map((p) => (
            <a key={p.name} href={p.href} className="group rounded-3xl border border-zinc-100 dark:border-zinc-800 p-6 hover:border-zinc-200 dark:hover:border-zinc-700 hover:shadow-lg transition">
              <p className="text-xs tracking-widest text-zinc-400 uppercase">{p.tag}</p>
              <h3 className="mt-2 font-medium group-hover:text-sky-600">{p.name}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{p.desc}</p>
              <p className="mt-4 text-sm font-medium text-sky-600">View →</p>
            </a>
          ))}
        </div>
      </section>

      {/* GitHub */}
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">GitHub Activity</h2>
          <p className="mt-2 text-zinc-400">Live stats from my profile.</p>
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=noahotim&theme=tokyonight" alt="stats" className="w-full rounded-2xl" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=noahotim&theme=tokyonight" alt="repos per language" className="w-full rounded-2xl" />
          </div>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://streak-stats.demolab.com?user=noahotim&theme=tokyonight&hide_border=true" alt="streak" className="w-full rounded-2xl" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://activity-graph.vercel.app/graph?username=noahotim&theme=tokyo-night&hide_border=true&area=true&bg_color=0d1117&color=0ea5e9&line=6366f1" alt="activity graph" className="w-full rounded-2xl bg-[#0d1117]" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl bg-gradient-to-br from-sky-600 to-indigo-600 p-8 md:p-12 text-white">
          <h2 className="text-3xl font-semibold tracking-tight">Let us build something practical</h2>
          <p className="mt-3 text-sky-100 max-w-2xl">Open to collaborations on AI tools, content systems and practical software. Tell me what you need and I will tell you what actually works.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="https://github.com/noahotim" className="inline-flex items-center rounded-full bg-white text-zinc-950 px-6 py-3 text-sm font-medium">GitHub</a>
            <a href="mailto:hello@noahotim.com" className="inline-flex items-center rounded-full bg-white/10 text-white border border-white/20 px-6 py-3 text-sm font-medium backdrop-blur">Email</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-100 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>© 2026 Noah Otim. Built with Next.js and Tailwind.</p>
          <p>
            <a href="https://github.com/noahotim/portfolio" className="hover:text-zinc-950 dark:hover:text-white">Source</a> • <a href="https://github.com/noahotim/noahotim" className="hover:text-zinc-950 dark:hover:text-white">Profile</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
