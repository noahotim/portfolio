export default function Home() {
  return (
    <div className="min-h-screen bg-[#fcfcfb] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-sky-500/20">
      {/* credibility */}
      <div className="hidden md:block border-b border-zinc-200/60 dark:border-white/10 bg-white/70 dark:bg-zinc-950/60 backdrop-blur">
        <div className="mx-auto max-w-[1120px] px-6 h-[28px] flex items-center justify-between text-[11px] tracking-wide text-zinc-500">
          <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" /> Available for freelance and full time roles <span className="hidden lg:inline opacity-30">— response within 24h</span></span>
          <span className="inline-flex items-center gap-3"><a href="mailto:hello@noahotim.dev" className="hover:text-zinc-900 dark:hover:text-white transition">hello@noahotim.dev</a><span className="h-3 w-px bg-zinc-200 dark:bg-white/10" /><a href="https://github.com/noahotim" className="hover:text-zinc-900 dark:hover:text-white transition">github.com/noahotim</a></span>
        </div>
      </div>

      {/* nav */}
      <header className="sticky top-0 z-50 border-b border-zinc-200/60 dark:border-white/10 bg-white/80 dark:bg-zinc-950/70 backdrop-blur-xl">
        <div className="mx-auto max-w-[1120px] px-6 h-[64px] flex items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-3">
            <span className="h-9 w-9 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 grid place-items-center font-semibold text-[13px] tracking-tight shadow-sm">N</span>
            <span className="hidden sm:block font-semibold tracking-tight text-[15px]">Noah Otim</span>
            <span className="hidden lg:inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/20"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Available</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-[13.5px] text-zinc-500">
            <a href="#about" className="hover:text-zinc-900 dark:hover:text-white transition font-medium">About</a>
            <a href="#featured" className="hover:text-zinc-900 dark:hover:text-white transition">Featured</a>
            <a href="#work" className="hover:text-zinc-900 dark:hover:text-white transition">Work</a>
            <a href="#stack" className="hover:text-zinc-900 dark:hover:text-white transition">Stack</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="https://github.com/noahotim/content-growth-machine" className="hidden lg:inline-flex items-center gap-1.5 rounded-full bg-sky-600 text-white px-4 py-2 text-xs font-medium hover:bg-sky-700 shadow-sm transition">Content Growth Machine <span aria-hidden>&#8599;</span></a>
            <a href="https://github.com/noahotim" className="inline-flex items-center justify-center rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-5 py-2.5 text-sm font-medium shadow-[0_4px_14px_rgba(0,0,0,0.12)] hover:opacity-90 transition">GitHub</a>
            <details className="md:hidden relative">
              <summary className="list-none grid place-items-center h-9 w-9 rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 cursor-pointer">≡</summary>
              <div className="absolute right-0 mt-3 w-64 rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 shadow-2xl p-2">
                <a href="#about" className="block px-3 py-2.5 rounded-xl hover:bg-zinc-50 dark:hover:bg-white/5 text-sm">About</a>
                <a href="#featured" className="block px-3 py-2.5 rounded-xl hover:bg-zinc-50 dark:hover:bg-white/5 text-sm">Featured</a>
                <a href="#work" className="block px-3 py-2.5 rounded-xl hover:bg-zinc-50 dark:hover:bg-white/5 text-sm">Work</a>
                <a href="#stack" className="block px-3 py-2.5 rounded-xl hover:bg-zinc-50 dark:hover:bg-white/5 text-sm">Stack</a>
              </div>
            </details>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/80 via-sky-50/0 to-transparent dark:from-white/[0.04] pointer-events-none" />
        <div className="absolute -top-24 -right-24 h-[560px] w-[560px] rounded-full bg-gradient-to-br from-sky-400/18 via-indigo-400/14 to-violet-500/14 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-amber-200/12 to-sky-300/12 blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-[1120px] px-6 pt-10 pb-8 md:pt-14 md:pb-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-7 animate-fadeUp">
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 px-3 py-1.5 text-xs shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Software Engineer <span className="text-zinc-300 dark:text-white/20">·</span> Uganda <span className="text-zinc-300 dark:text-white/20">·</span> Remote
              </div>
              <h1 className="mt-6 text-[38px] sm:text-[50px] lg:text-[60px] font-semibold tracking-[-0.05em] leading-[0.9] text-balance">
                <span className="block font-normal text-zinc-900 dark:text-white">Practical</span>
                <span className="bg-gradient-to-r from-sky-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">software that ships.</span>
              </h1>
              <p className="mt-5 max-w-[56ch] text-[17px] leading-8 text-zinc-600 dark:text-zinc-400">
                I build systems that remove friction and ship consistently. AI and automation, marketing and growth, leadership for small teams — without hype, with results you can use today.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="https://github.com/noahotim/content-growth-machine" className="group inline-flex items-center justify-center rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-7 py-3.5 text-sm font-medium shadow-lg shadow-zinc-900/10 hover:translate-y-[-1px] transition">
                  Explore Flagship Project <span className="ml-1.5 transition group-hover:translate-x-0.5">→</span>
                </a>
                <a href="#featured" className="inline-flex items-center justify-center rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 px-7 py-3.5 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-white/5 transition">
                  See how it works
                </a>
              </div>
              <div className="mt-8 grid grid-cols-3 divide-x divide-zinc-200 dark:divide-white/10 rounded-2xl border border-zinc-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur overflow-hidden">
                <div className="px-4 py-3 text-center"><p className="text-sm font-semibold tracking-tight">14+</p><p className="text-[11px] text-zinc-500">Public repos</p></div>
                <div className="px-4 py-3 text-center"><p className="text-sm font-semibold tracking-tight">Daily</p><p className="text-[11px] text-zinc-500">Content system</p></div>
                <div className="px-4 py-3 text-center"><p className="text-sm font-semibold tracking-tight">MIT</p><p className="text-[11px] text-zinc-500">Open source</p></div>
              </div>
            </div>
            <div className="lg:col-span-5 animate-fadeUp-2">
              <div className="card-elevated rounded-[28px] overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10">
                <div className="h-1 w-full bg-gradient-to-r from-sky-500 via-indigo-500 to-violet-500" />
                <div className="p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://github.com/noahotim.png" alt="Noah Otim" width={76} height={76} className="h-[76px] w-[76px] rounded-2xl object-cover border border-zinc-200 dark:border-white/10 shadow-sm" />
                    <div className="min-w-0">
                      <h2 className="text-[17px] font-semibold tracking-tight leading-none">Noah Otim</h2>
                      <p className="mt-1 text-xs font-medium tracking-wide uppercase text-zinc-500">Software Engineer · Uganda</p>
                      <p className="mt-2.5 text-xs leading-5 text-zinc-600 dark:text-zinc-400 line-clamp-3">Writing for marketers and builders, early career to senior, who want strategy they can use immediately without hype.</p>
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-2">
                    <div className="rounded-2xl bg-zinc-50 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/10 p-3 text-center"><p className="text-[13px] font-semibold">14+</p><p className="text-[10px] tracking-wide uppercase text-zinc-500">Repos</p></div>
                    <div className="rounded-2xl bg-zinc-50 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/10 p-3 text-center"><p className="text-[13px] font-semibold">Daily</p><p className="text-[10px] tracking-wide uppercase text-zinc-500">Shipping</p></div>
                    <div className="rounded-2xl bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 p-3 text-center"><p className="text-[13px] font-semibold text-sky-700 dark:text-sky-300">MIT</p><p className="text-[10px] tracking-wide uppercase text-sky-700/60 dark:text-sky-300/60">License</p></div>
                  </div>
                  <div className="mt-5 rounded-2xl bg-zinc-950 dark:bg-black border border-white/10 p-4 flex items-center justify-between gap-4">
                    <div><p className="text-[10px] tracking-[0.14em] uppercase text-white/50">Flagship</p><p className="text-sm font-medium text-white">Content Growth Machine</p><p className="text-xs text-white/60">Voice · Scoring · Graphics · Automation</p></div>
                    <a href="https://github.com/noahotim/content-growth-machine" aria-label="Open Content Growth Machine" className="shrink-0 grid place-items-center h-9 w-9 rounded-full bg-white text-zinc-900 hover:scale-105 transition">→</a>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    <span className="rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-2.5 py-1 text-[11px] font-medium">Next.js</span>
                    <span className="rounded-full border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 px-2.5 py-1 text-[11px]">TypeScript</span>
                    <span className="rounded-full border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 px-2.5 py-1 text-[11px]">Tailwind</span>
                    <span className="rounded-full border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 px-2.5 py-1 text-[11px]">OpenCode</span>
                  </div>
                </div>
                <div className="border-t border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-white/[0.02] px-6 py-3 flex items-center justify-between text-xs">
                  <span className="text-zinc-500">GMT+3 · Remote</span>
                  <a href="https://github.com/noahotim" className="font-medium text-zinc-900 dark:text-white hover:underline">github.com/noahotim →</a>
                </div>
              </div>
              <p className="mt-3 text-center text-[11px] tracking-wide text-zinc-400">“Remove friction, focus on what works, ship consistently.”</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-[1120px] px-6 py-10 md:py-14">
        <div className="flex items-center gap-3"><span className="h-px flex-1 bg-zinc-200 dark:bg-white/10 hidden sm:block" /><span className="text-[11px] tracking-[0.16em] uppercase text-zinc-400">01 — About</span><span className="h-px flex-1 bg-zinc-200 dark:bg-white/10 hidden sm:block" /></div>
        <div className="mt-6 flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="text-xl font-semibold tracking-tight">Practical builder, plain language.</h2>
          <a href="https://github.com/noahotim" className="text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-white">@noahotim · Vercel · GitHub</a>
        </div>
        <div className="mt-6 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 rounded-[24px] border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 p-7 md:p-8 card-elevated">
            <p className="text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">I am a software engineer who builds practical software and systems that solve real problems, focused on clear execution over complexity. I write for marketers, from early career to senior leaders, who want strategy they can use immediately.</p>
            <p className="mt-4 text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">Good marketing and good engineering share the same principle: remove friction, focus on what works, and ship consistently. When you see my name you think <span className="font-medium text-zinc-900 dark:text-white">practical, honest and ahead.</span></p>
            <div className="mt-6 flex flex-wrap gap-2"><span className="rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-3 py-1 text-xs font-medium">Practical builder</span><span className="rounded-full border border-zinc-200 dark:border-white/10 px-3 py-1 text-xs">Plain language</span><span className="rounded-full border border-zinc-200 dark:border-white/10 px-3 py-1 text-xs">Ships daily</span></div>
            <div className="mt-6 relative rounded-2xl bg-zinc-50 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/10 p-5 pl-7 overflow-hidden"><span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-500 to-violet-500" /><p className="text-sm leading-6 text-zinc-700 dark:text-zinc-300 italic" style={{fontFamily: "var(--font-fraunces)"}}>“People overcomplicate it. The answer is simpler than you think.”</p></div>
          </div>
          <div className="lg:col-span-5 grid gap-4">
            <div className="group rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 p-5 card-elevated hover:translate-y-[-1px] transition"><div className="h-1 w-10 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 mb-3" /><h3 className="text-sm font-semibold tracking-tight">AI and automation</h3><p className="mt-1.5 text-sm leading-6 text-zinc-500">How AI tools change work and how to apply them simply. Shipped with Vercel and OpenAI APIs.</p></div>
            <div className="group rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 p-5 card-elevated hover:translate-y-[-1px] transition"><div className="h-1 w-10 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 mb-3" /><h3 className="text-sm font-semibold tracking-tight">Marketing and growth</h3><p className="mt-1.5 text-sm leading-6 text-zinc-500">Strategy, content and growth that compounds. Flagship is Content Growth Machine — daily LinkedIn system.</p></div>
            <div className="group rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 p-5 card-elevated hover:translate-y-[-1px] transition"><div className="h-1 w-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 mb-3" /><h3 className="text-sm font-semibold tracking-tight">Leadership</h3><p className="mt-1.5 text-sm leading-6 text-zinc-500">Management, hiring and culture in small teams. Collaborating with the GitHub community.</p></div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section id="featured" className="mx-auto max-w-[1120px] px-6">
        <div className="flex items-center gap-3"><span className="h-px flex-1 bg-zinc-200 dark:bg-white/10 hidden sm:block" /><span className="text-[11px] tracking-[0.16em] uppercase text-zinc-400">02 — Featured</span><span className="h-px flex-1 bg-zinc-200 dark:bg-white/10 hidden sm:block" /></div>
        <div className="mt-6 rounded-[28px] overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 card-elevated">
          <div className="grid md:grid-cols-12">
            <div className="md:col-span-7 p-7 md:p-9">
              <div className="flex flex-wrap items-center gap-2"><span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 text-sky-700 dark:text-sky-300 px-3 py-1 text-xs font-medium"><span className="h-1.5 w-1.5 rounded-full bg-sky-500" /> Featured</span><a href="https://github.com/noahotim/content-growth-machine" className="text-xs text-zinc-500 hover:text-sky-600 transition">github.com/noahotim/content-growth-machine &#8599;</a></div>
              <h2 className="mt-4 text-[26px] md:text-[28px] font-semibold tracking-tight">Content Growth Machine</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-500">The system behind my daily LinkedIn content — voice, scoring, graphics and automation.</p>
              <p className="mt-4 text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">A production Next.js workspace that turns raw ideas into scored, formatted, branded LinkedIn posts every day. Voice system keeps every post sounding like you. No manual design, no guessing.</p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
                <li className="flex gap-2.5"><span className="mt-0.5 grid place-items-center h-5 w-5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 text-xs">✓</span><span className="text-zinc-600 dark:text-zinc-400 leading-6">Voice engine for 100% consistent tone</span></li>
                <li className="flex gap-2.5"><span className="mt-0.5 grid place-items-center h-5 w-5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 text-xs">✓</span><span className="text-zinc-600 dark:text-zinc-400 leading-6">Post writer, formatter, hook and scorer</span></li>
                <li className="flex gap-2.5"><span className="mt-0.5 grid place-items-center h-5 w-5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 text-xs">✓</span><span className="text-zinc-600 dark:text-zinc-400 leading-6">Gemini carousel & infographic prompts</span></li>
                <li className="flex gap-2.5"><span className="mt-0.5 grid place-items-center h-5 w-5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 text-xs">✓</span><span className="text-zinc-600 dark:text-zinc-400 leading-6">Content matrix + niche research</span></li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-2"><span className="rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-3 py-1 text-xs font-medium">Next.js</span><span className="rounded-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 px-3 py-1 text-xs">TypeScript</span><span className="rounded-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 px-3 py-1 text-xs">Tailwind</span><span className="rounded-full bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 text-sky-700 dark:text-sky-300 px-3 py-1 text-xs">OpenCode Skills</span></div>
              <div className="mt-7 flex flex-wrap gap-3"><a href="https://github.com/noahotim/content-growth-machine" className="inline-flex items-center rounded-full bg-sky-600 text-white px-6 py-3 text-sm font-medium hover:bg-sky-700 shadow-md transition">View Repository →</a><a href="https://github.com/noahotim/content-growth-machine#readme" className="inline-flex items-center rounded-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 px-6 py-3 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-white/10 transition">Read Docs</a></div>
              <div className="mt-5 flex flex-wrap gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://img.shields.io/github/stars/noahotim/content-growth-machine?style=flat&label=Stars" alt="stars" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://img.shields.io/github/last-commit/noahotim/content-growth-machine?style=flat&label=Updated" alt="last commit" />
              </div>
            </div>
            <div className="md:col-span-5 bg-gradient-to-br from-sky-600 via-indigo-600 to-violet-600 p-7 md:p-8 text-white flex flex-col relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.12)_1px,transparent_0)] bg-[size:18px_18px] opacity-30 pointer-events-none" />
              <div className="relative"><p className="text-[11px] tracking-[0.16em] uppercase text-white/60">Why this project</p><h3 className="mt-3 text-[20px] font-medium leading-7 text-balance">From idea to published post in minutes, not hours.</h3><div className="mt-7 grid grid-cols-2 gap-3"><div className="rounded-2xl bg-white/10 backdrop-blur border border-white/15 p-4"><p className="text-xl font-semibold">12+</p><p className="text-xs text-white/70 mt-1">Skills & workflows</p></div><div className="rounded-2xl bg-white/10 backdrop-blur border border-white/15 p-4"><p className="text-xl font-semibold">Daily</p><p className="text-xs text-white/70 mt-1">Content output</p></div><div className="rounded-2xl bg-white/10 backdrop-blur border border-white/15 p-4"><p className="text-xl font-semibold">No</p><p className="text-xs text-white/70 mt-1">Design time</p></div><div className="rounded-2xl bg-white/10 backdrop-blur border border-white/15 p-4"><p className="text-xl font-semibold">MIT</p><p className="text-xs text-white/70 mt-1">Open source</p></div></div></div>
              <div className="relative mt-7 rounded-2xl bg-white text-zinc-900 p-5 shadow-xl border border-black/5"><p className="text-[11px] tracking-widest uppercase text-zinc-400">Principle</p><p className="mt-2 text-sm leading-6">“Remove friction, focus on what works, and ship consistently.” Every skill in the machine does exactly that.</p><a href="https://github.com/noahotim/content-growth-machine" className="mt-3 inline-block text-sm font-medium text-sky-600 hover:underline">Explore the machine →</a></div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="mx-auto max-w-[1120px] px-6 py-12 md:py-14">
        <div className="flex items-center gap-3"><span className="h-px flex-1 bg-zinc-200 dark:bg-white/10 hidden sm:block" /><span className="text-[11px] tracking-[0.16em] uppercase text-zinc-400">03 — Selected Work</span><span className="h-px flex-1 bg-zinc-200 dark:bg-white/10 hidden sm:block" /></div>
        <div className="mt-6 flex items-end justify-between gap-4"><div><h2 className="text-xl font-semibold tracking-tight">More systems I have shipped.</h2><p className="mt-1 text-sm text-zinc-500">Production code, not demos.</p></div><a href="https://github.com/noahotim" className="hidden md:inline-flex text-sm font-medium text-sky-600 hover:underline">All repositories →</a></div>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          <a href="https://github.com/noahotim/educontrol-school-system" className="group rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 p-6 card-elevated hover:-translate-y-1 hover:shadow-xl transition"><div className="flex items-start justify-between gap-3"><span className="grid place-items-center h-8 w-8 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-xs font-semibold">E</span><span className="text-[11px] tracking-widest uppercase text-zinc-400 pt-1.5">TypeScript · Education</span></div><h3 className="mt-4 text-[15px] font-semibold tracking-tight group-hover:text-sky-600 transition">educontrol-school-system</h3><p className="mt-2 text-sm leading-6 text-zinc-500">School management for admins, teachers and students. Roles, classes, fees and reporting.</p><p className="mt-4 text-sm font-medium text-zinc-900 dark:text-white inline-flex items-center gap-1.5">View <span className="transition group-hover:translate-x-0.5">→</span></p></a>
          <a href="https://github.com/noahotim/otzu-tech-solutions" className="group rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 p-6 card-elevated hover:-translate-y-1 hover:shadow-xl transition"><div className="flex items-start justify-between gap-3"><span className="grid place-items-center h-8 w-8 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-xs font-semibold">O</span><span className="text-[11px] tracking-widest uppercase text-zinc-400 pt-1.5">Next.js · Tailwind</span></div><h3 className="mt-4 text-[15px] font-semibold tracking-tight group-hover:text-sky-600 transition">otzu-tech-solutions</h3><p className="mt-2 text-sm leading-6 text-zinc-500">Agency site and client systems — fast, clean, maintainable.</p><p className="mt-4 text-sm font-medium text-zinc-900 dark:text-white inline-flex items-center gap-1.5">View <span className="transition group-hover:translate-x-0.5">→</span></p></a>
          <a href="https://github.com/noahotim/portfolio" className="group rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 p-6 card-elevated hover:-translate-y-1 hover:shadow-xl transition"><div className="flex items-start justify-between gap-3"><span className="grid place-items-center h-8 w-8 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-xs font-semibold">P</span><span className="text-[11px] tracking-widest uppercase text-zinc-400 pt-1.5">Next.js · Portfolio</span></div><h3 className="mt-4 text-[15px] font-semibold tracking-tight group-hover:text-sky-600 transition">portfolio</h3><p className="mt-2 text-sm leading-6 text-zinc-500">This site — editorial, minimal and fast. Deployed to GitHub Pages.</p><p className="mt-4 text-sm font-medium text-zinc-900 dark:text-white inline-flex items-center gap-1.5">View <span className="transition group-hover:translate-x-0.5">→</span></p></a>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="border-y border-zinc-200 dark:border-white/10 bg-white dark:bg-white/[0.02]">
        <div className="mx-auto max-w-[1120px] px-6 py-10">
          <div className="flex items-center gap-3"><span className="h-px flex-1 bg-zinc-200 dark:bg-white/10 hidden sm:block" /><span className="text-[11px] tracking-[0.16em] uppercase text-zinc-400">04 — Stack</span><span className="h-px flex-1 bg-zinc-200 dark:bg-white/10 hidden sm:block" /></div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3"><h2 className="text-sm font-semibold tracking-tight">Stack I use daily</h2><span className="text-xs text-zinc-400">Core · Systems · Tooling</span></div>
          <div className="mt-5 flex flex-wrap gap-2">
            {["TypeScript","JavaScript","Node.js","Next.js","React","Tailwind","Python","Docker","Git","GitHub","Vercel","Figma"].map((s)=>(
              <span key={s} className="rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-white/5 px-3.5 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300">{s}</span>
            ))}
          </div>
          <div className="mt-6 flex justify-center opacity-90">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://skillicons.dev/icons?i=ts,js,nodejs,nextjs,react,tailwind,python,docker,git,github,vercel,figma&perline=6" alt="stack icons" className="max-w-full hidden sm:block" loading="lazy" />
          </div>
        </div>
      </section>

      {/* GITHUB */}
      <section className="bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-[1120px] px-6 py-10 md:py-12">
          <div className="flex flex-wrap items-start justify-between gap-6"><div><h2 className="text-lg font-medium tracking-tight">GitHub Activity</h2><p className="text-sm text-zinc-400">Live badges update in minutes · summary cards cache 4h</p></div><div className="flex flex-wrap gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://img.shields.io/github/stars/noahotim/content-growth-machine?style=for-the-badge&logo=github&label=Stars%3A%20content-growth-machine" alt="stars cgm" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://img.shields.io/github/stars/noahotim/portfolio?style=for-the-badge&logo=github&label=Stars%3A%20portfolio" alt="stars portfolio" />
            </div></div>
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=noahotim&theme=tokyonight" alt="stats" className="w-full rounded-2xl border border-white/10" loading="lazy" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=noahotim&theme=tokyonight" alt="repos" className="w-full rounded-2xl border border-white/10" loading="lazy" />
          </div>
          <p className="mt-3 text-xs text-zinc-500 text-center">Stats via Vercel — max-age 14400. Badges above are live.</p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="mx-auto max-w-[1120px] px-6 py-10">
        <div className="rounded-[24px] border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 p-[1px]">
          <div className="rounded-[23px] bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-900 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div><h2 className="text-lg font-semibold tracking-tight">Let’s build something practical</h2><p className="mt-1.5 text-sm leading-6 text-zinc-500 max-w-md">Open to freelance, collaborations and full time roles. Best way to reach me is GitHub or email.</p></div>
            <div className="flex flex-wrap gap-3"><a href="https://github.com/noahotim" className="inline-flex items-center rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-6 py-3 text-sm font-medium shadow-md hover:opacity-90 transition">Message on GitHub →</a><a href="mailto:hello@noahotim.dev" className="inline-flex items-center rounded-full border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 px-6 py-3 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-white/10 transition">hello@noahotim.dev</a></div>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-[1120px] px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500"><p>© 2026 Noah Otim · <a href="https://github.com/noahotim/content-growth-machine" className="font-medium text-zinc-900 dark:text-white hover:underline">Content Growth Machine</a> is the flagship</p><p className="flex gap-5"><a href="https://github.com/noahotim/portfolio" className="hover:text-zinc-900 dark:hover:text-white">Source</a><a href="https://github.com/noahotim" className="hover:text-zinc-900 dark:hover:text-white">GitHub</a></p></div>
      </footer>
    </div>
  );
}
