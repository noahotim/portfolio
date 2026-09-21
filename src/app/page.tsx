export default function Home() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-sky-500/20">
      {/* Nav - glass */}
      <header className="sticky top-0 z-50 border-b border-zinc-200/60 dark:border-zinc-800/60 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl">
        <div className="mx-auto max-w-[1080px] px-6 h-[64px] flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <span className="h-9 w-9 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 grid place-items-center font-semibold text-sm">N</span>
            <span className="font-semibold tracking-tight">Noah Otim</span>
            <span className="hidden sm:inline text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">Available</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-zinc-500">
            <a href="#featured" className="hover:text-zinc-900 dark:hover:text-white transition">Featured</a>
            <a href="#work" className="hover:text-zinc-900 dark:hover:text-white transition">Work</a>
            <a href="#stack" className="hover:text-zinc-900 dark:hover:text-white transition">Stack</a>
            <a href="https://github.com/noahotim/content-growth-machine" className="inline-flex items-center gap-1.5 rounded-full bg-sky-600 text-white px-4 py-2 text-xs font-medium hover:bg-sky-700 shadow-sm">Content Growth Machine ↗</a>
          </nav>
          <a href="https://github.com/noahotim" className="inline-flex items-center gap-2 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-5 py-2 text-sm font-medium shadow">GitHub</a>
        </div>
      </header>

      {/* Hero - editorial, generous whitespace */}
      <section className="relative overflow-hidden bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/60 via-transparent to-transparent dark:from-zinc-900/40 pointer-events-none" />
        <div className="absolute -top-32 right-0 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-sky-400/20 to-indigo-400/20 blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-[1080px] px-6 pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3 py-1.5 text-xs shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Software Engineer • Uganda • Remote
            </div>
            <h1 className="mt-6 text-[42px] md:text-[64px] font-semibold tracking-[-0.04em] leading-[0.9]">
              Practical<br />
              <span className="bg-gradient-to-r from-sky-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">software that ships.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-[18px] leading-8 text-zinc-600 dark:text-zinc-400">
              I build systems that remove friction and ship consistently. My work is AI and automation, marketing and growth, and leadership for small teams — without hype, with results you can use today.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://github.com/noahotim/content-growth-machine" className="inline-flex items-center justify-center rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-7 py-3.5 text-sm font-medium shadow-lg shadow-zinc-900/10 hover:opacity-90 transition">
                Explore Flagship Project →
              </a>
              <a href="#featured" className="inline-flex items-center justify-center rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-7 py-3.5 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition">
                See how it works
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-zinc-500 border-t border-zinc-200 dark:border-zinc-800 pt-6">
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-zinc-400" /> 14 public repos</span>
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-zinc-400" /> MIT Open Source</span>
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-zinc-400" /> Daily content system</span>
            </div>
          </div>
        </div>
      </section>

      {/* About - tell us about yourself with mentions */}
      <section id="about" className="mx-auto max-w-[1080px] px-6 py-12">
        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 md:p-10">
          <div className="flex items-start gap-4">
            <img src="https://github.com/noahotim.png" alt="Noah Otim" className="h-12 w-12 rounded-2xl object-cover border border-zinc-200 dark:border-zinc-700" />
            <div>
              <h2 className="text-xl font-semibold tracking-tight">About me — Noah Otim</h2>
              <p className="text-sm text-zinc-500">Software engineer • Practical systems • Uganda • Remote</p>
            </div>
          </div>
          <p className="mt-6 leading-7 text-zinc-600 dark:text-zinc-400">
            I am <a href="https://github.com/noahotim" className="font-medium text-zinc-900 dark:text-white hover:underline">@noahotim</a>, a software engineer who builds practical software and systems that solve real problems, focused on clear execution over complexity. I write for marketers, from early career to senior leaders, who want strategy and growth tactics they can use immediately without hype.
          </p>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 p-5 border border-zinc-100 dark:border-zinc-800">
              <p className="text-sm font-medium">AI and automation</p><p className="mt-1 text-sm text-zinc-500 leading-6">How AI tools change work and how to apply them simply. Shipped with <a href="https://github.com/vercel" className="text-sky-600 hover:underline">@vercel</a> and <a href="https://github.com/openai" className="text-sky-600 hover:underline">@openai</a> APIs.</p>
            </div>
            <div className="rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 p-5 border border-zinc-100 dark:border-zinc-800">
              <p className="text-sm font-medium">Marketing and growth</p><p className="mt-1 text-sm text-zinc-500 leading-6">Strategy, content and growth that compounds. Flagship is <a href="https://github.com/noahotim/content-growth-machine" className="text-sky-600 hover:underline">content-growth-machine</a> — daily LinkedIn system.</p>
            </div>
            <div className="rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 p-5 border border-zinc-100 dark:border-zinc-800">
              <p className="text-sm font-medium">Leadership</p><p className="mt-1 text-sm text-zinc-500 leading-6">Management, hiring and culture in small teams. Collaborating with <a href="https://github.com/github" className="text-sky-600 hover:underline">@github</a> community.</p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            <span className="font-medium text-zinc-900 dark:text-white">Point of view:</span> People overcomplicate it. Good marketing and good engineering share the same principle — remove friction, focus on what works, and ship consistently. When you see my name you think practical, honest and ahead. Inspired by <a href="https://github.com/LHRUN" className="text-sky-600 hover:underline">@LHRUN</a> and the Bubble open-source community.
          </p>
          <p className="mt-4 text-sm text-zinc-500">
            Mention me as <a href="https://github.com/noahotim" className="text-sky-600 hover:underline">@noahotim</a> • Organisations I build with: <a href="https://github.com/vercel" className="text-sky-600 hover:underline">@vercel</a> <a href="https://github.com/github" className="text-sky-600 hover:underline">@github</a>
          </p>
        </div>
      </section>

      {/* Featured - flagship, now as editorial card with metric */}
      <section id="featured" className="mx-auto max-w-[1080px] px-6">
        <div className="rounded-[28px] overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]">
          <div className="grid md:grid-cols-12">
            <div className="md:col-span-7 p-8 md:p-10">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-sky-50 dark:bg-sky-950 border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300 px-3 py-1 text-xs font-medium">Featured</span>
                <a href="https://github.com/noahotim/content-growth-machine" className="text-xs text-zinc-500 hover:text-sky-600">github.com/noahotim/content-growth-machine ↗</a>
              </div>
              <h2 className="mt-4 text-[28px] font-semibold tracking-tight">Content Growth Machine</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-500">The system behind my daily LinkedIn content — voice, scoring, graphics and automation.</p>
              <p className="mt-4 text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
                A production Next.js workspace that turns raw ideas into scored, formatted, branded LinkedIn posts every day. Voice system keeps every post sounding like you. No manual design, no guessing.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
                <li className="flex gap-2"><span className="text-emerald-500 mt-0.5">✓</span><span className="text-zinc-600 dark:text-zinc-400">Voice engine (about-me.md + voice.md) for 100% consistent tone</span></li>
                <li className="flex gap-2"><span className="text-emerald-500 mt-0.5">✓</span><span className="text-zinc-600 dark:text-zinc-400">Post writer, formatter, hook and scorer skills</span></li>
                <li className="flex gap-2"><span className="text-emerald-500 mt-0.5">✓</span><span className="text-zinc-600 dark:text-zinc-400">Graphic designer + Gemini carousel & infographic prompts</span></li>
                <li className="flex gap-2"><span className="text-emerald-500 mt-0.5">✓</span><span className="text-zinc-600 dark:text-zinc-400">Content matrix (24–40 ideas) + niche research + analytics</span></li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-zinc-900 text-white px-3 py-1 text-xs">Next.js</span>
                <span className="rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-3 py-1 text-xs">TypeScript</span>
                <span className="rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-3 py-1 text-xs">Tailwind</span>
                <span className="rounded-full bg-sky-50 dark:bg-sky-950 border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300 px-3 py-1 text-xs">OpenCode Skills</span>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="https://github.com/noahotim/content-growth-machine" className="inline-flex items-center rounded-full bg-sky-600 text-white px-6 py-3 text-sm font-medium hover:bg-sky-700 shadow">View Repository →</a>
                <a href="https://github.com/noahotim/content-growth-machine#readme" className="inline-flex items-center rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-6 py-3 text-sm font-medium">Read Docs</a>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://img.shields.io/github/stars/noahotim/content-growth-machine?style=flat&label=Stars" alt="stars" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://img.shields.io/github/last-commit/noahotim/content-growth-machine?style=flat&label=Updated" alt="last commit" />
              </div>
            </div>
            <div className="md:col-span-5 bg-gradient-to-br from-sky-600 via-indigo-600 to-violet-600 p-8 md:p-10 text-white flex flex-col">
              <div>
                <p className="text-xs tracking-widest uppercase text-white/60">Why this project</p>
                <h3 className="mt-3 text-xl font-medium leading-7">From idea to published post in minutes, not hours.</h3>
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="rounded-2xl bg-white/10 backdrop-blur border border-white/15 p-4">
                    <p className="text-2xl font-semibold">12+</p><p className="text-xs text-white/70 mt-1">Skills & workflows</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 backdrop-blur border border-white/15 p-4">
                    <p className="text-2xl font-semibold">Daily</p><p className="text-xs text-white/70 mt-1">Content output</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 backdrop-blur border border-white/15 p-4">
                    <p className="text-2xl font-semibold">No</p><p className="text-xs text-white/70 mt-1">Design time</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 backdrop-blur border border-white/15 p-4">
                    <p className="text-2xl font-semibold">MIT</p><p className="text-xs text-white/70 mt-1">Open source</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 rounded-2xl bg-white text-zinc-900 p-5 shadow-xl">
                <p className="text-xs tracking-widest uppercase text-zinc-400">Principle</p>
                <p className="mt-2 text-sm leading-6">“Remove friction, focus on what works, and ship consistently.” Every skill in the machine does exactly that.</p>
                <a href="https://github.com/noahotim/content-growth-machine" className="mt-4 inline-block text-sm font-medium text-sky-600 hover:underline">Explore the machine →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-[1080px] px-6 py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Selected Work</h2>
            <p className="mt-1 text-sm text-zinc-500">More systems I have shipped.</p>
          </div>
          <a href="https://github.com/noahotim" className="hidden md:inline-flex text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white">All repositories →</a>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {[
            { name: "educontrol-school-system", href: "https://github.com/noahotim/educontrol-school-system", desc: "School management for admins, teachers and students. Roles, classes, fees and reporting.", tag: "TypeScript • Education" },
            { name: "otzu-tech-solutions", href: "https://github.com/noahotim/otzu-tech-solutions", desc: "Agency site and client systems — fast, clean, maintainable.", tag: "Next.js • Tailwind" },
            { name: "portfolio", href: "https://github.com/noahotim/portfolio", desc: "This site — editorial, minimal and fast. Deployed to GitHub Pages.", tag: "Next.js • Portfolio" },
          ].map((p) => (
            <a key={p.name} href={p.href} className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 hover:shadow-xl hover:border-zinc-300 dark:hover:border-zinc-700 hover:-translate-y-0.5 transition">
              <p className="text-[11px] tracking-widest uppercase text-zinc-400">{p.tag}</p>
              <h3 className="mt-2 font-medium group-hover:text-sky-600 transition">{p.name}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">{p.desc}</p>
              <p className="mt-4 text-sm font-medium text-zinc-900 dark:text-white">View →</p>
            </a>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="border-y border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
        <div className="mx-auto max-w-[1080px] px-6 py-10">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium tracking-widest uppercase text-zinc-500">Stack I use daily</h2>
            <span className="text-xs text-zinc-400">Built with these</span>
          </div>
          <div className="mt-6 flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://skillicons.dev/icons?i=ts,js,nodejs,nextjs,react,tailwind,python,docker,git,github,vercel,figma&perline=6" alt="stack" className="max-w-full" />
          </div>
        </div>
      </section>

      {/* GitHub - live */}
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-[1080px] px-6 py-12">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <h2 className="text-lg font-medium">GitHub Activity</h2>
              <p className="text-sm text-zinc-400">Summary cards cache 4h — live badges update in minutes</p>
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
          <p className="mt-3 text-xs text-zinc-500 text-center">Stats: Vercel cache max-age 14400. Shields badges above are live.</p>
        </div>
      </section>

      <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-[1080px] px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>© 2026 Noah Otim • <a href="https://github.com/noahotim/content-growth-machine" className="font-medium text-zinc-900 dark:text-white hover:underline">Content Growth Machine</a> is the flagship</p>
          <p className="flex gap-4"><a href="https://github.com/noahotim/portfolio" className="hover:text-zinc-900 dark:hover:text-white">Source</a><a href="https://github.com/noahotim/noahotim" className="hover:text-zinc-900 dark:hover:text-white">Profile</a></p>
        </div>
      </footer>
    </div>
  );
}
