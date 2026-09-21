export default function Home() {
  return (
    <div className="min-h-screen bg-[#fcfcfb] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-sky-500/20">
      {/* Top bar */}
      <div className="hidden md:block border-b border-zinc-200/70 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto max-w-[1120px] px-6 h-8 flex items-center justify-between text-[11px] tracking-wide text-zinc-500">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Available for freelance and full-time roles
          </span>
          <span className="flex items-center gap-4">
            <a href="mailto:hello@noahotim.dev" className="hover:text-zinc-900 dark:hover:text-white transition">
              hello@noahotim.dev
            </a>
            <span className="opacity-30">|</span>
            <a href="https://github.com/noahotim" className="hover:text-zinc-900 dark:hover:text-white transition">
              github.com/noahotim
            </a>
          </span>
        </div>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-zinc-200/60 dark:border-zinc-800/60 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl">
        <div className="mx-auto max-w-[1120px] px-6 h-16 flex items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-3 shrink-0">
            <span className="h-9 w-9 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 grid place-items-center font-semibold text-[13px] tracking-tight">
              N
            </span>
            <span className="hidden sm:block font-semibold tracking-tight text-[15px]">Noah Otim</span>
            <span className="hidden lg:inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm text-zinc-600 dark:text-zinc-400">
            <a href="#about" className="hover:text-zinc-900 dark:hover:text-white transition">About</a>
            <a href="#featured" className="hover:text-zinc-900 dark:hover:text-white transition">Featured</a>
            <a href="#work" className="hover:text-zinc-900 dark:hover:text-white transition">Work</a>
            <a href="#stack" className="hover:text-zinc-900 dark:hover:text-white transition">Stack</a>
          </nav>

          <a
            href="https://github.com/noahotim"
            className="inline-flex items-center rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-4 py-2 text-sm font-medium hover:opacity-90 transition"
          >
            GitHub &#8594;
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-[1120px] px-6 pt-14 pb-12 md:pt-20 md:pb-16">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-sky-600 dark:text-sky-400 mb-3">
            Software Engineer &#183; Uganda &#183; Remote
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-balance leading-[1.15]">
            Practical software that ships.
          </h1>
          <p className="mt-5 text-[17px] leading-7 text-zinc-600 dark:text-zinc-400 max-w-xl">
            I build systems that remove friction and ship consistently. AI & automation, marketing systems, and tools for small teams &#8212; without hype, with results you can use today.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#featured"
              className="inline-flex items-center rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-6 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              Explore Flagship Project &#8594;
            </a>
            <a
              href="https://github.com/noahotim"
              className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-6 py-3 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
            >
              View GitHub
            </a>
          </div>
        </div>

        {/* Proof bar */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "14+", label: "Repos shipped" },
            { value: "Daily", label: "Content system" },
            { value: "MIT", label: "Open source" },
            { value: "Remote", label: "Uganda \u00B7 GMT+3" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-5 py-4"
            >
              <p className="text-xl font-semibold tracking-tight">{item.value}</p>
              <p className="mt-0.5 text-sm text-zinc-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-[1120px] px-6 py-14 md:py-16 border-t border-zinc-200/70 dark:border-zinc-800">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://github.com/noahotim.png"
                alt="Noah Otim"
                className="h-16 w-16 rounded-2xl object-cover border border-zinc-200 dark:border-zinc-700"
              />
              <div>
                <h2 className="text-xl font-semibold tracking-tight">Noah Otim</h2>
                <p className="text-sm text-zinc-500">Software Engineer &#183; Practical systems</p>
              </div>
            </div>
            <p className="mt-6 text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
              I build practical software and systems that solve real problems. Focused on clear execution over complexity. I write for marketers and builders who want strategy they can use immediately &#8212; without hype.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
              Good marketing and good engineering share the same principle: remove friction, focus on what works, and ship consistently.
            </p>
            <p className="mt-5 text-sm text-zinc-500 italic">
              &#8220;People overcomplicate it. The answer is simpler than you think.&#8221;
            </p>
          </div>

          <div className="md:col-span-7 grid sm:grid-cols-3 gap-4">
            {[
              {
                title: "AI & Automation",
                desc: "How AI tools change work and how to apply them simply. Shipped with Vercel and OpenAI APIs.",
              },
              {
                title: "Marketing & Growth",
                desc: "Strategy, content and growth that compounds. Flagship is the Content Growth Machine.",
              },
              {
                title: "Leadership",
                desc: "Management, hiring and culture in small teams. Collaborating with the GitHub community.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5"
              >
                <h3 className="text-sm font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section id="featured" className="mx-auto max-w-[1120px] px-6 py-14 md:py-16">
        <div className="rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.12)]">
          <div className="grid md:grid-cols-12">
            <div className="md:col-span-7 p-7 md:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-sky-50 dark:bg-sky-950/50 border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300 px-3 py-1 text-xs font-medium">
                  Featured
                </span>
                <a
                  href="https://github.com/noahotim/content-growth-machine"
                  className="text-xs text-zinc-500 hover:text-sky-600 transition"
                >
                  github.com/noahotim/content-growth-machine &#8599;
                </a>
              </div>

              <h2 className="mt-4 text-2xl md:text-[28px] font-semibold tracking-tight">
                Content Growth Machine
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-500">
                The system behind my daily LinkedIn content &#8212; voice, scoring, graphics and automation.
              </p>
              <p className="mt-4 text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
                A production Next.js workspace that turns raw ideas into scored, formatted, branded LinkedIn posts every day. Voice system keeps every post sounding like you. No manual design, no guessing.
              </p>

              <ul className="mt-6 space-y-2.5 text-sm">
                {[
                  "Voice engine (about-me.md + voice.md) for consistent tone",
                  "Post writer, formatter, hook and scorer skills",
                  "Graphic designer + Gemini carousel & infographic prompts",
                  "Content matrix + niche research + analytics",
                ].map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="text-emerald-500 mt-0.5 shrink-0">&#10003;</span>
                    <span className="text-zinc-600 dark:text-zinc-400">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/noahotim/content-growth-machine"
                  className="inline-flex items-center rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-5 py-2.5 text-sm font-medium hover:opacity-90 transition"
                >
                  Explore the machine &#8594;
                </a>
                <div className="flex flex-wrap gap-1.5">
                  {["TypeScript", "Tailwind", "Next.js", "OpenCode"].map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-5 bg-zinc-900 dark:bg-zinc-950 text-white p-7 md:p-10 flex flex-col justify-between">
              <div>
                <p className="text-xs tracking-widest uppercase text-zinc-400">Why this project</p>
                <p className="mt-3 text-lg font-medium leading-snug">
                  From idea to published post in minutes, not hours.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { value: "12+", label: "Skills & workflows" },
                  { value: "Daily", label: "Content output" },
                  { value: "0", label: "Design time" },
                  { value: "MIT", label: "Open source" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-semibold tracking-tight">{s.value}</p>
                    <p className="text-xs text-zinc-400 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm leading-6 text-zinc-300 border-t border-white/10 pt-6">
                &#8220;Remove friction, focus on what works, and ship consistently.&#8221; Every skill in the machine does exactly that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section id="work" className="mx-auto max-w-[1120px] px-6 py-14 md:py-16 border-t border-zinc-200/70 dark:border-zinc-800">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Selected Work</h2>
            <p className="mt-1 text-sm text-zinc-500">More systems I have shipped.</p>
          </div>
          <a
            href="https://github.com/noahotim"
            className="text-sm text-sky-600 hover:underline shrink-0"
          >
            All repositories &#8594;
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              tag: "TypeScript \u00B7 Education",
              title: "educontrol-school-system",
              desc: "School management for admins, teachers and students. Roles, classes, fees and reporting.",
              href: "https://github.com/noahotim/educontrol-school-system",
            },
            {
              tag: "Next.js \u00B7 Tailwind",
              title: "otzu-tech-solutions",
              desc: "Agency site and client systems \u2014 fast, clean, maintainable.",
              href: "https://github.com/noahotim/otzu-tech-solutions",
            },
            {
              tag: "Next.js \u00B7 Portfolio",
              title: "portfolio",
              desc: "This site \u2014 editorial, minimal and fast. Deployed to GitHub Pages.",
              href: "https://github.com/noahotim/portfolio",
            },
          ].map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md transition"
            >
              <p className="text-xs text-zinc-500">{project.tag}</p>
              <h3 className="mt-2 text-[15px] font-semibold tracking-tight group-hover:text-sky-600 transition">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">{project.desc}</p>
              <p className="mt-4 text-sm font-medium text-sky-600">View &#8594;</p>
            </a>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="mx-auto max-w-[1120px] px-6 py-14 md:py-16 border-t border-zinc-200/70 dark:border-zinc-800">
        <h2 className="text-xl font-semibold tracking-tight">Stack I use daily</h2>
        <p className="mt-1 text-sm text-zinc-500">Built with these</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "TypeScript",
            "JavaScript",
            "Node.js",
            "React",
            "Next.js",
            "Tailwind",
            "Python",
            "Docker",
            "Git",
            "GitHub",
            "Vercel",
            "Figma",
          ].map((tech) => (
            <span
              key={tech}
              className="text-sm px-3.5 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1120px] px-6 py-10 md:py-14">
        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-7 md:p-9 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">Let\u2019s build something practical</h2>
            <p className="mt-1.5 text-sm leading-6 text-zinc-500 max-w-md">
              Open to freelance, collaborations and full-time roles. Best way to reach me is GitHub or email.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/noahotim"
              className="inline-flex items-center rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-6 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              Message on GitHub &#8594;
            </a>
            <a
              href="mailto:hello@noahotim.dev"
              className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-6 py-3 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
            >
              hello@noahotim.dev
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-[1120px] px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>
            \u00A9 2026 Noah Otim \u00B7{" "}
            <a
              href="https://github.com/noahotim/content-growth-machine"
              className="font-medium text-zinc-900 dark:text-white hover:underline"
            >
              Content Growth Machine
            </a>{" "}
            is the flagship
          </p>
          <div className="flex gap-5">
            <a href="https://github.com/noahotim/portfolio" className="hover:text-zinc-900 dark:hover:text-white transition">
              Source
            </a>
            <a href="https://github.com/noahotim" className="hover:text-zinc-900 dark:hover:text-white transition">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}