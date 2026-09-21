export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfc] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-zinc-950/80 border-b border-zinc-200/50 dark:border-zinc-800/50">
        <div className="mx-auto max-w-6xl px-6 h-[64px] flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <span className="h-8 w-8 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 grid place-items-center text-sm font-semibold">N</span>
            <span className="font-semibold tracking-tight">Noah Otim</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#featured" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white">Featured</a>
            <a href="#projects" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white">Projects</a>
            <a href="#stack" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white">Stack</a>
            <a href="https://github.com/noahotim/content-growth-machine" className="inline-flex items-center gap-2 rounded-full bg-sky-600 text-white px-4 py-1.5 text-xs font-medium hover:bg-sky-700">Content Growth Machine ↗</a>
          </nav>
          <a href="https://github.com/noahotim" className="hidden md:inline-flex items-center rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-5 py-2 text-sm font-medium">GitHub</a>
        </div>
      </header>

      {/* Hero - more editorial */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50 to-white dark:from-zinc-900 dark:to-zinc-950 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-10 md:pt-24 md:pb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3 py-1 text-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Building practical systems • Available for work
          </div>
          <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-[-0.04em] leading-[0.9]">
            Practical software<br />
            <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">that ships.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl leading-8 text-zinc-600 dark:text-zinc-400">
            I am Noah Otim, a software engineer focused on clear execution over complexity. I build AI and automation, marketing and growth systems for founders and small teams.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://github.com/noahotim/content-growth-machine" className="inline-flex items-center rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-7 py-3 text-sm font-medium shadow-lg shadow-zinc-900/10 hover:opacity-90">
              Explore Content Growth Machine →
            </a>
            <a href="#featured" className="inline-flex items-center rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-7 py-3 text-sm font-medium hover:bg-zinc-50">View Featured Work</a>
          </div>
          <div className="mt-10 flex items-center gap-3 text-xs text-zinc-500">
            <span>Uganda • Remote</span><span className="h-1 w-1 rounded-full bg-zinc-300" /><span>Content • AI • Leadership</span>
          </div>
        </div>
      </section>

      {/* Featured - Content Growth Machine as flagship */}
      <section id="featured" className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-[32px] overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-2xl shadow-zinc-200/50 dark:shadow-black/20">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-3 p-8 md:p-10">
              <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-sky-600">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-600" /> Flagship Project
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Content Growth Machine</h2>
              <p className="mt-3 text-sm text-zinc-500">github.com/noahotim/content-growth-machine</p>
              <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">
                A production system for LinkedIn growth. Voice-guided posts, branded graphics, post scoring, newsletter and carousel skills, and a full content pipeline that turns ideas into daily posts without the busywork.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li className="flex gap-2"><span className="text-emerald-500">✓</span> Voice system (about-me.md + voice.md) so every post sounds like you</li>
                <li className="flex gap-2"><span className="text-emerald-500">✓</span> Post writer, formatter, scorer and graphic designer skills</li>
                <li className="flex gap-2"><span className="text-emerald-500">✓</span> Automated content matrix, niche research and analytics dashboard</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-zinc-900 text-white text-xs">Next.js</span>
                <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300 text-xs">TypeScript</span>
                <span className="px-3 py-1 rounded-full bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-300 text-xs">OpenCode Skills</span>
              </div>
              <div className="mt-8 flex gap-3">
                <a href="https://github.com/noahotim/content-growth-machine" className="inline-flex items-center rounded-full bg-sky-600 text-white px-6 py-3 text-sm font-medium hover:bg-sky-700">View Repository →</a>
                <a href="https://noahotim.github.io/portfolio/" className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-700 px-6 py-3 text-sm font-medium">Live Portfolio</a>
              </div>
            </div>
            <div className="md:col-span-2 bg-gradient-to-br from-sky-600 via-indigo-600 to-violet-600 p-8 md:p-10 text-white flex flex-col justify-between">
              <div>
                <p className="text-sm text-white/70 uppercase tracking-widest">Impact</p>
                <div className="mt-6 grid grid-cols-2 gap-6">
                  <div><p className="text-3xl font-semibold">12+</p><p className="text-sm text-white/70">Skills and workflows</p></div>
                  <div><p className="text-3xl font-semibold">Daily</p><p className="text-sm text-white/70">Posts generated</p></div>
                  <div><p className="text-3xl font-semibold">100%</p><p className="text-sm text-white/70">Voice consistent</p></div>
                  <div><p className="text-3xl font-semibold">MIT</p><p className="text-sm text-white/70">Open source</p></div>
                </div>
              </div>
              <div className="mt-8 rounded-2xl bg-white/10 backdrop-blur p-4 border border-white/20">
                <p className="text-sm leading-6 text-white/90">“Remove friction, focus on what works, and ship consistently.” — The core principle behind the machine.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">More Projects</h2>
          <a href="https://github.com/noahotim" className="text-sm text-zinc-500 hover:text-sky-600">All GitHub →</a>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            { name: "educontrol-school-system", desc: "School management platform for admins, teachers and students.", tag: "TypeScript" },
            { name: "otzu-tech-solutions", desc: "Agency site — fast, clean and maintainable.", tag: "Next.js" },
            { name: "noahotim", desc: "GitHub profile with Bubble components — stats, streak, snake.", tag: "Profile" },
          ].map((p) => (
            <a key={p.name} href={`https://github.com/noahotim/${p.name}`} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 hover:shadow-xl hover:-translate-y-1 transition">
              <p className="text-xs tracking-widest uppercase text-zinc-400">{p.tag}</p>
              <h3 className="mt-2 font-medium">{p.name}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">{p.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="bg-white dark:bg-zinc-900 border-y border-zinc-100 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Stack I use daily</h2>
            <span className="text-xs text-zinc-400">Hover to see names</span>
          </div>
          <div className="mt-6 flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://skillicons.dev/icons?i=ts,js,nodejs,nextjs,react,tailwind,python,docker,git,github,vercel,figma&perline=6" alt="stack" className="max-w-full" />
          </div>
        </div>
      </section>

      {/* GitHub - live stars */}
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">GitHub Activity</h2>
              <p className="text-sm text-zinc-400">Stats cards cache 4 hours — live badges below update within minutes</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://img.shields.io/github/stars/noahotim/content-growth-machine?style=for-the-badge&logo=github&label=Stars%3A%20content-growth-machine" alt="stars cgm" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://img.shields.io/github/stars/noahotim/portfolio?style=for-the-badge&logo=github&label=Stars%3A%20portfolio" alt="stars portfolio" />
            </div>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=noahotim&theme=tokyonight" alt="stats" className="w-full rounded-2xl" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=noahotim&theme=tokyonight" alt="repos" className="w-full rounded-2xl" />
          </div>
          <p className="mt-4 text-xs text-zinc-500 text-center">Summary cards: Cache-Control max-age 14400 (4h) via Vercel. Shields badges above are live from GitHub API.</p>
        </div>
      </section>

      <footer className="border-t border-zinc-100 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>© 2026 Noah Otim • <a href="https://github.com/noahotim/content-growth-machine" className="underline decoration-zinc-300 hover:text-zinc-900 dark:hover:text-white">Content Growth Machine</a></p>
          <p><a href="https://github.com/noahotim/portfolio" className="hover:text-zinc-900 dark:hover:text-white">Source</a> • <a href="https://github.com/noahotim/noahotim" className="hover:text-zinc-900 dark:hover:text-white">Profile</a></p>
        </div>
      </footer>
    </div>
  );
}
