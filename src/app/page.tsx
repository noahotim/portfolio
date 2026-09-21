export default function Home() {
  return (
    <div className="min-h-screen bg-[#fcfcfb] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-sky-500/20">
      {/* credibility strip */}
      <div className="hidden md:block border-b border-zinc-200/70 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto max-w-[1120px] px-6 h-7 flex items-center justify-between text-[11px] tracking-wide text-zinc-500">
          <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Available for freelance and full time roles</span>
          <span className="flex items-center gap-4"><a href="mailto:hello@noahotim.dev" className="hover:text-zinc-900 dark:hover:text-white">hello@noahotim.dev</a><span className="opacity-30">|</span><a href="https://github.com/noahotim" className="hover:text-zinc-900 dark:hover:text-white">github.com/noahotim</a></span>
        </div>
      </div>

      {/* Nav - glass, 68px */}
      <header className="sticky top-0 z-50 border-b border-zinc-200/60 dark:border-zinc-800/60 bg-white/75 dark:bg-zinc-950/75 backdrop-blur-xl">
        <div className="mx-auto max-w-[1120px] px-6 h-[68px] flex items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-3 shrink-0">
            <span className="h-9 w-9 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 grid place-items-center font-semibold text-[13px] tracking-tight">N</span>
            <span className="hidden sm:block font-semibold tracking-tight text-[15px]">Noah Otim</span>
            <span className="hidden lg:inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Available</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
            <a href="#about" className="hover:text-zinc-900 dark:hover:text-white transition">About</a>
            <a href="#featured" className="hover:text-zinc-900 dark:hover:text-white transition">Featured</a>
            <a href="#work" className="hover:text-zinc-900 dark:hover:text-white transition">Work</a>
            <a href="#stack" className="hover:text-zinc-900 dark:hover:text-white transition">Stack</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="https://github.com/noahotim/content-growth-machine" className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-sky-600 text-white px-4 py-2 text-xs font-medium hover:bg-sky-700 shadow-sm transition">Content Growth Machine <span aria-hidden>&#8599;</span></a>
            <a href="https://github.com/noahotim" className="inline-flex items-center justify-center rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-5 py-2.5 text-sm font-medium shadow hover:opacity-90 transition">GitHub</a>
            <details className="md:hidden group relative">
              <summary className="list-none inline-grid place-items-center h-9 w-9 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 cursor-pointer"><span className="text-lg leading-none">&#8801;</span></summary>
              <div className="absolute right-0 mt-3 w-64 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl p-2">
                <a href="#about" className="block px-3 py-2.5 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 text-sm">About</a>
                <a href="#featured" className="block px-3 py-2.5 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 text-sm">Featured</a>
                <a href="#work" className="block px-3 py-2.5 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 text-sm">Work</a>
                <a href="#stack" className="block px-3 py-2.5 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 text-sm">Stack</a>
                <a href="https://github.com/noahotim/content-growth-machine" className="mt-1 block text-center rounded-xl bg-sky-600 text-white px-3 py-2.5 text-sm">Content Growth Machine &#8599;</a>
              </div>
            </details>
          </div>
        </div>
      </header>

      {/* Hero - editorial 2-col with grid and blurs */}
      <section className="relative overflow-hidden bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/70 via-transparent to-transparent dark:from-zinc-900/40 pointer-events-none" />
        <div className="absolute -top-28 -right-20 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-sky-400/15 via-indigo-400/12 to-violet-400/12 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 h-[360px] w-[360px] rounded-full bg-gradient-to-br from-amber-200/10 to-sky-200/10 blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-[1120px] px-6 pt-10 pb-8 md:pt-14 md:pb-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3 py-1.5 text-xs shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Software Engineer <span className="opacity-30">&#183;</span> Uganda <span className="opacity-30">&#183;</span> Remote
              </div>
              <h1 className="mt-6 text-[40px] sm:text-[52px] lg:text-[62px] font-semibold tracking-[-0.04em] leading-[0.9] text-balance">
                Practical
                <br />
                <span className="bg-gradient-to-r from-sky-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">software that ships.</span>
              </h1>
              <p className="mt-5 max-w-[60ch] text-[17px] sm:text-[18px] leading-8 text-zinc-600 dark:text-zinc-400">
                I build systems that remove friction and ship consistently. My work is AI and automation, marketing and growth, and leadership for small teams. Without hype, with results you can use today.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="https://github.com/noahotim/content-growth-machine" className="inline-flex items-center justify-center rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-7 py-3.5 text-sm font-medium shadow-lg shadow-zinc-900/10 hover:opacity-90 transition">
                  Explore Flagship Project &#8594;
                </a>
                <a href="#featured" className="inline-flex items-center justify-center rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-7 py-3.5 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition">
                  See how it works
                </a>
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-5 text-xs text-zinc-500 border-t border-zinc-200 dark:border-zinc-800 pt-5">
                <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" /> 14 public repos</span>
                <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" /> MIT Open Source</span>
                <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" /> Daily content system</span>
                <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-zinc-900 text-white dark:bg-zinc-800 px-2.5 py-1 text-[11px]">Trusted &#183; Practical &#183; Ahead</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[28px] overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.18)]">
                <div className="p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://github.com/noahotim.png" alt="Noah Otim" width={72} height={72} className="h-[72px] w-[72px] rounded-2xl object-cover border border-zinc-200 dark:border-zinc-800 shadow-sm" />
                    <div className="min-w-0">
                      <h2 className="font-semibold tracking-tight">Noah Otim</h2>
                      <p className="text-sm text-zinc-500">Software Engineer &#183; Practical systems</p>
                      <p className="mt-2 text-xs leading-5 text-zinc-600 dark:text-zinc-400">I write for marketers, from early career to senior leaders, who want strategy and growth tactics they can use immediately without hype.</p>
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                    <div className="rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 p-3">
                      <p className="text-sm font-semibold">14+</p><p className="text-[11px] text-zinc-500">Repos shipped</p>
                    </div>
                    <div className="rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 p-3">
                      <p className="text-sm font-semibold">Daily</p><p className="text-[11px] text-zinc-500">Content output</p>
                    </div>
                    <div className="rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-900 p-3">
                      <p className="text-sm font-semibold text-sky-700 dark:text-sky-300">MIT</p><p className="text-[11px] text-sky-700/70 dark:text-sky-300/70">Open source</p>
                    </div>
                  </div>
                  <div className="mt-5 rounded-2xl bg-zinc-950 text-white dark:bg-zinc-800 p-4 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs tracking-widest uppercase text-white/50">Flagship</p>
                      <p className="text-sm font-medium">Content Growth Machine</p>
                      <p className="text-xs text-white/60">Voice &#183; Scoring &#183; Graphics &#183; Automation</p>
                    </div>
                    <a href="https://github.com/noahotim/content-growth-machine" className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-zinc-900">&#8594;</a>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    <span className="rounded-full bg-zinc-900 text-white px-2.5 py-1 text-[11px]">Next.js</span>
                    <span className="rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-2.5 py-1 text-[11px]">TypeScript</span>
                    <span className="rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-2.5 py-1 text-[11px]">Tailwind</span>
                    <span className="rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-2.5 py-1 text-[11px]">OpenCode</span>
                  </div>
                </div>
                <div className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 px-6 py-3 flex items-center justify-between text-xs text-zinc-500">
                  <span>Uganda &#183; Remote &#183; GMT+3</span>
                  <a href="https://github.com/noahotim" className="font-medium text-zinc-900 dark:text-white hover:underline">View GitHub &#8594;</a>
                </div>
              </div>
              <p className="mt-3 text-center text-[11px] tracking-wide text-zinc-400">Principle: Remove friction, focus on what works, ship consistently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-[1120px] px-6 py-10 md:py-14">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-lg font-semibold tracking-tight">About me</h2>
          <a href="https://github.com/noahotim" className="text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-white">@noahotim &#183; Organisations: Vercel &#183; GitHub</a>
        </div>
        <div className="mt-6 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 rounded-[24px] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-7 md:p-8">
            <p className="text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
              I am a software engineer who builds practical software and systems that solve real problems, focused on clear execution over complexity. I write for marketers, from early career to senior leaders, who want strategy they can use immediately.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
              Good marketing and good engineering share the same principle: remove friction, focus on what works, and ship consistently. When you see my name you think practical, honest and ahead.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-zinc-900 text-white px-3 py-1">Practical builder</span>
              <span className="rounded-full border border-zinc-200 dark:border-zinc-700 px-3 py-1">Plain language</span>
              <span className="rounded-full border border-zinc-200 dark:border-zinc-700 px-3 py-1">Ships daily</span>
            </div>
            <div className="mt-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 p-4">
              <p className="text-sm leading-6 text-zinc-700 dark:text-zinc-300" style={{fontFamily: "var(--font-fraunces)"}}><span className="italic">&#8220;People overcomplicate it. The answer is simpler than you think.&#8221;</span></p>
            </div>
          </div>
          <div className="lg:col-span-5 grid gap-4">
            {[
              { k: "AI and automation", d: "How AI tools change work and how to apply them simply. Shipped with Vercel and OpenAI APIs." },
              { k: "Marketing and growth", d: "Strategy, content and growth that compounds. Flagship is Content Growth Machine \u2014 daily LinkedIn system." },
              { k: "Leadership", d: "Management, hiring and culture in small teams. Collaborating with the GitHub community." },
            ].map((c) => (
              <div key={c.k} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5">
                <h3 className="text-sm font-semibold tracking-tight">{c.k}</h3>
                <p className="mt-1.5 text-sm leading-6 text-zinc-500">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured - flagship, now as editorial card with metric */}
      <section id="featured" className="mx-auto max-w-[1120px] px-6">
        <div className="rounded-[28px] overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.14)]">
          <div className="grid md:grid-cols-12">
            <div className="md:col-span-7 p-7 md:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-sky-50 dark:bg-sky-950 border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300 px-3 py-1 text-xs font-medium">Featured</span>
                <a href="https://github.com/noahotim/content-growth-machine" className="text-xs text-zinc-500 hover:text-sky-600">github.com/noahotim/content-growth-machine &#8599;</a>
              </div>
              <h2 className="mt-4 text-[26px] md:text-[28px] font-semibold tracking-tight text-balance">Content Growth Machine</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-500">The system behind my daily LinkedIn content \u2014 voice, scoring, graphics and automation.</p>
              <p className="mt-4 text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
                A production Next.js workspace that turns raw ideas into scored, formatted, branded LinkedIn posts every day. Voice system keeps every post sounding like you. No manual design, no guessing.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
                <li className="flex gap-2"><span className="text-emerald-500 mt-0.5">&#10003;</span><span className="text-zinc-600 dark:text-zinc-400">Voice engine (about-me.md + voice.md) for 100% consistent tone</span></li>
                <li className="flex gap-2"><span className="text-emerald-500 mt-0.5">&#10003;</span><span className="text-zinc-600 dark:text-zinc-400">Post writer, formatter, hook and scorer skills</span></li>
                <li className="flex gap-2"><span className="text-emerald-500 mt-0.5">&#10003;</span><span className="text-zinc-600 dark:text-zinc-400">Graphic designer + Gemini carousel & infographic prompts</span></li>
                <li className="flex gap-2"><span className="text-emerald-500 mt-0.5">&#10003;</span><span className="text-zinc-600 dark:text-zinc-400">Content matrix (24 to 40 ideas) + niche research + analytics</span></li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-zinc-900 text-white px-3 py-1 text-xs">Next.js</span>
                <span className="rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-3 py-1 text-xs">TypeScript</span>
                <span className="rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-3 py-1 text-xs">Tailwind</span>
                <span className="rounded-full bg-sky-50 dark:bg-sky-950 border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300 px-3 py-1 text-xs">OpenCode Skills</span>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="https://github.com/noahotim/content-growth-machine" className="inline-flex items-center rounded-full bg-sky-600 text-white px-6 py-3 text-sm font-medium hover:bg-sky-700 shadow">View Repository &#8594;</a>
                <a href="https://github.com/noahotim/content-growth-machine#readme" className="inline-flex items-center rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-6 py-3 text-sm font-medium">Read Docs</a>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://img.shields.io/github/stars/noahotim/content-growth-machine?style=flat&label=Stars" alt="stars" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://img.shields.io/github/last-commit/noahotim/content-growth-machine?style=flat&label=Updated" alt="last commit" />
              </div>
            </div>
            <div className="md:col-span-5 bg-gradient-to-br from-sky-600 via-indigo-600 to-violet-600 p-7 md:p-10 text-white flex flex-col">
              <div>
                <p className="text-xs tracking-[0.14em] uppercase text-white/60">Why this project</p>
                <h3 className="mt-3 text-[20px] font-medium leading-7 text-balance">From idea to published post in minutes, not hours.</h3>
                <div className="mt-7 grid grid-cols-2 gap-4">
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
              <div className="mt-7 rounded-2xl bg-white text-zinc-900 p-5 shadow-xl">
                <p className="text-xs tracking-widest uppercase text-zinc-400">Principle</p>
                <p className="mt-2 text-sm leading-6">&#8220;Remove friction, focus on what works, and ship consistently.&#8221; Every skill in the machine does exactly that.</p>
                <a href="https://github.com/noahotim/content-growth-machine" className="mt-3 inline-block text-sm font-medium text-sky-600 hover:underline">Explore the machine &#8594;</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-[1120px] px-6 py-12 md:py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Selected Work</h2>
            <p className="mt-1 text-sm text-zinc-500">More systems I have shipped.</p>
          </div>
          <a href="https://github.com/noahotim" className="hidden md:inline-flex text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white">All repositories &#8594;</a>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {[
            { name: "educontrol-school-system", href: "https://github.com/noahotim/educontrol-school-system", desc: "School management for admins, teachers and students. Roles, classes, fees and reporting.", tag: "TypeScript \u00B7 Education" },
            { name: "otzu-tech-solutions", href: "https://github.com/noahotim/otzu-tech-solutions", desc: "Agency site and client systems \u2014 fast, clean, maintainable.", tag: "Next.js \u00B7 Tailwind" },
            { name: "portfolio", href: "https://github.com/noahotim/portfolio", desc: "This site \u2014 editorial, minimal and fast. Deployed to GitHub Pages.", tag: "Next.js \u00B7 Portfolio" },
          ].map((p) => (
            <a key={p.name} href={p.href} className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 hover:shadow-xl hover:border-zinc-300 dark:hover:border-zinc-700 hover:-translate-y-0.5 transition">
              <p className="text-[11px] tracking-widest uppercase text-zinc-400">{p.tag}</p>
              <h3 className="mt-2 font-medium group-hover:text-sky-600 transition text-[15px]">{p.name}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">{p.desc}</p>
              <p className="mt-4 text-sm font-medium text-zinc-900 dark:text-white inline-flex items-center gap-1">View <span className="transition group-hover:translate-x-0.5">&#8594;</span></p>
            </a>
          ))}
        </div>
        <div className="md:hidden mt-4 text-center">
          <a href="https://github.com/noahotim" className="text-sm text-zinc-500 hover:text-zinc-900">All repositories &#8594;</a>
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="border-y border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900/40">
        <div className="mx-auto max-w-[1120px] px-6 py-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-sm font-medium tracking-widest uppercase text-zinc-500">Stack I use daily</h2>
            <span className="text-xs text-zinc-400">Built with these</span>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {["TypeScript","JavaScript","Node.js","Next.js","React","Tailwind","Python","Docker","Git","GitHub","Vercel","Figma"].map((s)=>(
              <span key={s} className="rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300">{s}</span>
            ))}
          </div>
          <div className="mt-6 flex justify-center opacity-90">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://skillicons.dev/icons?i=ts,js,nodejs,nextjs,react,tailwind,python,docker,git,github,vercel,figma&perline=6" alt="stack icons" className="max-w-full hidden sm:block" loading="lazy" />
          </div>
        </div>
      </section>

      {/* GitHub */}
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-[1120px] px-6 py-10 md:py-12">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <h2 className="text-lg font-medium">GitHub Activity</h2>
              <p className="text-sm text-zinc-400">Summary cards cache 4h \u2014 live badges update in minutes</p>
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
            <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=noahotim&theme=tokyonight" alt="stats" className="w-full rounded-2xl border border-white/10" loading="lazy" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=noahotim&theme=tokyonight" alt="repos" className="w-full rounded-2xl border border-white/10" loading="lazy" />
          </div>
          <p className="mt-3 text-xs text-zinc-500 text-center">Stats: Vercel cache max-age 14400. Shields badges above are live.</p>
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-[1120px] px-6 py-10">
        <div className="rounded-[24px] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">Let\u2019s build something practical</h2>
            <p className="mt-1 text-sm leading-6 text-zinc-500">Open to freelance, collaborations and full time roles. Best way to reach me is GitHub or email.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="https://github.com/noahotim" className="inline-flex items-center rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-6 py-3 text-sm font-medium">Message on GitHub &#8594;</a>
            <a href="mailto:hello@noahotim.dev" className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-6 py-3 text-sm font-medium">hello@noahotim.dev</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-[1120px] px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>\u00A9 2026 Noah Otim \u00B7 <a href="https://github.com/noahotim/content-growth-machine" className="font-medium text-zinc-900 dark:text-white hover:underline">Content Growth Machine</a> is the flagship</p>
          <p className="flex gap-4"><a href="https://github.com/noahotim/portfolio" className="hover:text-zinc-900 dark:hover:text-white">Source</a><a href="https://github.com/noahotim" className="hover:text-zinc-900 dark:hover:text-white">GitHub</a></p>
        </div>
      </footer>
    </div>
  );
}