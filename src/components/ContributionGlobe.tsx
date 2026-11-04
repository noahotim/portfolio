"use client";

import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import contributions from "@/data/contributions.json";
import { countryCentroid } from "@/lib/geo";

const API =
  process.env.NEXT_PUBLIC_PROFILE_VIEWS_API ||
  "https://profile-views.otim-no25.workers.dev";
const STORAGE_KEY = "pv_dashboard_key";

type Repo = { name: string; url: string; commits?: number };
type Marker = {
  owner: string;
  commits: number;
  pullRequests: number;
  location: [number, number];
  size?: number;
  repositories: Repo[];
};
type GlobeData = {
  user: string;
  generatedAt: string;
  totalCommits: number;
  totalPullRequests: number;
  markers: Marker[];
};
type ActiveVisitor = {
  ts: string;
  section: string;
  dwell: number;
  clicks: number;
  depth: number;
  country: string;
  city: string | null;
  browser: string;
  os: string;
  device: string;
};
type SectionCount = { section: string; visitors: number };

function duration(seconds: number) {
  if (seconds < 60) return `${seconds}s`;
  const m = Math.floor(seconds / 60);
  if (m < 60) return `${m}m ${seconds % 60}s`;
  return `${Math.floor(m / 60)}h ${m % 60}m`;
}

function flag(code: string) {
  if (!/^[A-Za-z]{2}$/.test(code)) return "🏳️";
  const up = code.toUpperCase();
  return String.fromCodePoint(...[...up].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65));
}

export default function ContributionGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null);
  const data = contributions as GlobeData;
  const [active, setActive] = useState<ActiveVisitor[]>([]);
  const [sections, setSections] = useState<SectionCount[]>([]);
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    const key = window.localStorage.getItem(STORAGE_KEY);
    if (!key) return;
    setIsOwner(true);
    let alive = true;
    const load = async () => {
      try {
        const res = await fetch(`${API}/api/stats?key=${encodeURIComponent(key)}`, {
          cache: "no-store",
        });
        if (!res.ok) return;
        const stats = await res.json();
        if (!alive) return;
        setActive(stats.active || []);
        setSections(stats.sections || []);
      } catch {
        /* keep last known activity */
      }
    };
    void load();
    const timer = window.setInterval(load, 10000);
    return () => {
      alive = false;
      window.clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !data) return;

    let phi = 0;
    let theta = 0.2;
    let scale = 1;
    let pointer: { x: number; y: number } | null = null;
    let frame = 0;

    const markers = data.markers.map((m) => ({
      location: m.location,
      size: m.size ?? 0.05,
    }));

    const globe = createGlobe(canvas, {
      devicePixelRatio: Math.min(2, window.devicePixelRatio || 1),
      width: 600,
      height: 600,
      phi: 0,
      theta: 0.2,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      mapBaseBrightness: 0.05,
      baseColor: [0.11, 0.13, 0.18],
      markerColor: [0.15, 0.8, 0.95],
      glowColor: [0.12, 0.22, 0.45],
      markers,
    });
    globeRef.current = globe;

    const resize = () => {
      const size = Math.max(240, canvas.offsetWidth);
      globe.update({ width: size * 2, height: size * 2 });
    };
    resize();

    const animate = () => {
      if (!pointer) phi += 0.0022;
      globe.update({ phi, theta, scale });
      frame = requestAnimationFrame(animate);
    };
    animate();

    const down = (event: PointerEvent) => {
      pointer = { x: event.clientX, y: event.clientY };
      canvas.setPointerCapture(event.pointerId);
    };
    const move = (event: PointerEvent) => {
      if (!pointer) return;
      phi += (event.clientX - pointer.x) / 300;
      theta = Math.max(-0.9, Math.min(0.9, theta + (event.clientY - pointer.y) / 1000));
      pointer = { x: event.clientX, y: event.clientY };
    };
    const up = () => {
      pointer = null;
    };
    const wheel = (event: WheelEvent) => {
      event.preventDefault();
      scale = Math.max(0.85, Math.min(1.3, scale - event.deltaY * 0.0008));
    };

    canvas.addEventListener("pointerdown", down);
    canvas.addEventListener("pointermove", move);
    canvas.addEventListener("pointerup", up);
    canvas.addEventListener("pointercancel", up);
    canvas.addEventListener("wheel", wheel, { passive: false });
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(frame);
      canvas.removeEventListener("pointerdown", down);
      canvas.removeEventListener("pointermove", move);
      canvas.removeEventListener("pointerup", up);
      canvas.removeEventListener("pointercancel", up);
      canvas.removeEventListener("wheel", wheel);
      window.removeEventListener("resize", resize);
      globeRef.current = null;
    };
  }, [data]);

  // Live visitors ride on top of the contribution markers once the owner is
  // signed in; the public view stays a pure contributions map.
  useEffect(() => {
    const globe = globeRef.current;
    if (!globe || !data) return;
    const base = data.markers.map((m) => ({ location: m.location, size: m.size ?? 0.05 }));
    const live = active
      .map((v) => countryCentroid(v.country))
      .filter((loc): loc is [number, number] => !!loc)
      .map((location) => ({ location, size: 0.018 }));
    globe.update({ markers: [...base, ...live] });
  }, [active, data]);

  const total = data.totalCommits + data.totalPullRequests;
  const workRepos = data.markers
    .flatMap((m) => m.repositories)
    .sort((a, b) => (b.commits ?? 0) - (a.commits ?? 0));
  const shownRepos = workRepos.slice(0, 8);
  const peakCommits = Math.max(1, ...shownRepos.map((r) => r.commits ?? 0));
  const updated = new Date(data.generatedAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="grid lg:grid-cols-12 gap-6 items-stretch">
      <div className="lg:col-span-7 relative overflow-hidden rounded-[28px] bg-zinc-950 border border-white/10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />
        <div className="relative aspect-square w-full">
          <canvas
            ref={canvasRef}
            className="h-full w-full cursor-grab touch-none active:cursor-grabbing"
            aria-label="Interactive globe of contribution locations. Drag to rotate, scroll to zoom."
          />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-zinc-950 to-transparent" />
        <div className="absolute inset-x-5 bottom-4 flex items-end justify-between text-[11px] text-white/50">
          <span>Drag to rotate · scroll to zoom</span>
          {isOwner && active.length > 0 && (
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-400/30 px-3 py-1 text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {active.length} live
            </span>
          )}
        </div>
      </div>

      <div className="lg:col-span-5 flex flex-col gap-4">
        <div className="rounded-[24px] border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 p-6 card-elevated">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="text-[13px] font-semibold tracking-tight">Contribution map</h3>
            <span className="text-[11px] text-zinc-400">updated {updated}</span>
          </div>
          <p className="mt-3 text-2xl font-semibold tracking-tight">
            {total.toLocaleString("en-GB")}
            <span className="ml-2 text-xs font-normal text-zinc-500">
              commits · {data.totalPullRequests} merged PRs
            </span>
          </p>
          {data.markers.length === 0 && (
            <p className="mt-3 text-sm text-zinc-500">
              No contribution data yet — the badge workflow writes it daily.
            </p>
          )}
          <ul className="mt-4 space-y-3">
                {data.markers.map((m) => {
                  const share = total ? Math.round(((m.commits + m.pullRequests) / total) * 100) : 0;
                  return (
                    <li key={m.owner}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">@{m.owner}</span>
                        <span className="text-zinc-500 tabular-nums">
                          {m.commits.toLocaleString("en-GB")} commits · {share}%
                        </span>
                      </div>
                      <div className="mt-1.5 h-1.5 rounded-full bg-zinc-100 dark:bg-white/10 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-sky-500 to-violet-500"
                          style={{ width: `${Math.max(4, share)}%` }}
                        />
                      </div>
                      <div className="mt-2 text-[11px] text-zinc-400">
                        {m.repositories.length} repositories · {m.commits.toLocaleString("en-GB")} commits
                      </div>
                    </li>
                  );
                })}
          </ul>

          {shownRepos.length > 0 && (
            <div className="mt-5 border-t border-zinc-100 dark:border-white/10 pt-4">
              <div className="flex items-baseline justify-between gap-3">
                <h4 className="text-[13px] font-semibold tracking-tight">Work behind these pins</h4>
                <span className="text-[11px] text-zinc-400">commits per repo</span>
              </div>
              <ul className="mt-3 space-y-2.5">
                {shownRepos.map((repo) => (
                  <li key={repo.url}>
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <div className="flex items-center justify-between gap-3 text-xs">
                        <span className="truncate font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-sky-600 transition">
                          {repo.name}
                        </span>
                        <span className="shrink-0 tabular-nums text-zinc-500">
                          {(repo.commits ?? 0).toLocaleString("en-GB")}
                        </span>
                      </div>
                      <div className="mt-1 h-1 rounded-full bg-zinc-100 dark:bg-white/10 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-sky-500/70 to-violet-500/70"
                          style={{ width: `${Math.max(3, ((repo.commits ?? 0) / peakCommits) * 100)}%` }}
                        />
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex items-center justify-between gap-3 text-[11px] text-zinc-400">
                <span>
                  {workRepos.length > shownRepos.length
                    ? `+${workRepos.length - shownRepos.length} more repositories`
                    : `${workRepos.length} repositories`}
                </span>
                <a href="#work" className="font-medium text-sky-600 hover:underline">
                  See the work →
                </a>
              </div>
            </div>
          )}
        </div>

        {isOwner && (active.length > 0 || sections.length > 0) && (
          <div className="rounded-[24px] border border-sky-200 dark:border-sky-500/25 bg-white dark:bg-zinc-900 p-6 card-elevated">
            <div className="flex items-center justify-between">
              <h3 className="text-[13px] font-semibold tracking-tight">Viewers right now</h3>
              <span className="text-[11px] text-zinc-400">owner only</span>
            </div>
            {sections.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {sections.map((s) => (
                  <span
                    key={s.section}
                    className="rounded-full bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 px-2.5 py-1 text-[11px] text-sky-700 dark:text-sky-300"
                  >
                    {s.section} · {s.visitors}
                  </span>
                ))}
              </div>
            )}
            <ul className="mt-3 divide-y divide-zinc-100 dark:divide-white/5">
              {active.slice(0, 6).map((v, i) => (
                <li key={`${v.ts}-${i}`} className="py-2 flex items-center justify-between gap-3 text-xs">
                  <span className="truncate">
                    {flag(v.country)} {v.city || v.country} · <span className="font-medium">{v.section}</span>
                  </span>
                  <span className="shrink-0 text-zinc-500 tabular-nums">
                    {duration(v.dwell)} · {v.clicks} clicks
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
