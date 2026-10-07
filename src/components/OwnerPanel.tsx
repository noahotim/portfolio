"use client";

import { useCallback, useEffect, useState } from "react";

const API =
  process.env.NEXT_PUBLIC_PROFILE_VIEWS_API ||
  "https://profile-views.otim-no25.workers.dev";
const STORAGE_KEY = "pv_dashboard_key";

type Country = { code: string; name: string; flag: string; views: number };
type Day = { day: string; views: number; uniques: number };
type Stats = {
  total: number;
  uniques: number;
  live: number;
  lastSeen: string | null;
  lastCountry: string | null;
  countries: Country[];
  days: Day[];
  generatedAt: string;
};

function flagEmoji(code: string) {
  if (!/^[A-Za-z]{2}$/.test(code)) return "\u{1F3F3}\u{FE0F}";
  const upper = code.toUpperCase();
  return String.fromCodePoint(
    ...[...upper].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65)
  );
}

function resolveKeyFromStorage() {
  const params = new URLSearchParams(window.location.search);
  const fromUrl = params.get("key");
  if (fromUrl) {
    window.localStorage.setItem(STORAGE_KEY, fromUrl);
    const url = new URL(window.location.href);
    url.searchParams.delete("key");
    window.history.replaceState({}, "", url.pathname + url.search + url.hash);
    return fromUrl;
  }
  return window.localStorage.getItem(STORAGE_KEY);
}

export default function OwnerPanel() {
  const [key, setKey] = useState<string | null>(null);
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    const id = window.setTimeout(() => {
      const resolved = resolveKeyFromStorage();
      if (resolved) setKey(resolved);
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!key) return;
    let active = true;
    const load = async () => {
      try {
        const res = await fetch(
          `${API}/api/stats?key=${encodeURIComponent(key)}`,
          { cache: "no-store" }
        );
        if (res.status === 401) {
          window.localStorage.removeItem(STORAGE_KEY);
          if (active) {
            setKey(null);
            setStats(null);
          }
          return;
        }
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: Stats = await res.json();
        if (active) setStats(data);
      } catch {
        /* keep the last good stats on transient errors */
      }
    };
    void load();
    const timer = window.setInterval(load, 15000);
    return () => {
      active = false;
      window.clearInterval(timer);
    };
  }, [key]);

  const signOut = useCallback(() => {
    window.localStorage.removeItem(STORAGE_KEY);
    setKey(null);
    setStats(null);
  }, []);

  if (!key || !stats) return null;

  const maxCountry = stats.countries.length ? stats.countries[0].views : 1;
  const maxDay = Math.max(1, ...stats.days.map((d) => d.views));
  const updated = new Date(stats.generatedAt).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <section className="mx-auto max-w-[1120px] px-6 pt-10">
      <div className="rounded-[24px] border border-sky-200 dark:border-sky-500/25 bg-white dark:bg-zinc-900 overflow-hidden card-elevated">
        <div className="h-1 w-full bg-gradient-to-r from-sky-500 via-indigo-500 to-violet-500" />
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 text-sky-700 dark:text-sky-300 px-3 py-1 text-[11px] font-semibold tracking-wide uppercase">
                Owner only
              </span>
              <h2 className="text-[15px] font-semibold tracking-tight">
                Live profile traffic
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 text-xs text-zinc-500">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  {stats.live}
                </span>
                viewing now · updated {updated}
              </span>
              <button
                onClick={signOut}
                className="rounded-full border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 px-3.5 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-white/10 transition"
              >
                Hide
              </button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Total views", value: stats.total, accent: true },
              { label: "Unique visitors", value: stats.uniques },
              { label: "Live (5 min)", value: stats.live },
              { label: "Countries", value: stats.countries.length },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-zinc-50 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/10 p-4"
              >
                <p
                  className={`text-2xl font-semibold tracking-tight ${
                    s.accent ? "text-sky-600 dark:text-sky-400" : ""
                  }`}
                >
                  {s.value.toLocaleString("en-GB")}
                </p>
                <p className="mt-1 text-[10px] tracking-wide uppercase text-zinc-500">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid lg:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-zinc-200 dark:border-white/10 p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-[12px] font-semibold tracking-wide uppercase text-zinc-500">
                  Top countries
                </h3>
                <span className="text-[11px] text-zinc-400">
                  {stats.countries.length} total
                </span>
              </div>
              <div className="mt-3 space-y-2.5">
                {stats.countries.length === 0 && (
                  <p className="text-sm text-zinc-500">
                    No visits recorded yet.
                  </p>
                )}
                {stats.countries.slice(0, 8).map((c) => (
                  <div key={c.code} className="flex items-center gap-3">
                    <span className="text-lg w-6 text-center">
                      {flagEmoji(c.code)}
                    </span>
                    <span className="text-sm flex-1 truncate">{c.name}</span>
                    <span
                      className="h-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-500"
                      style={{
                        width: `${Math.max(
                          4,
                          Math.round((c.views / maxCountry) * 90)
                        )}px`,
                      }}
                    />
                    <span className="text-xs text-zinc-500 tabular-nums w-12 text-right">
                      {c.views.toLocaleString("en-GB")}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 dark:border-white/10 p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-[12px] font-semibold tracking-wide uppercase text-zinc-500">
                  Last 14 days
                </h3>
                <span className="text-[11px] text-zinc-400">
                  {stats.lastCountry ? `last: ${stats.lastCountry}` : "no data"}
                </span>
              </div>
              <div className="mt-4 flex items-end gap-1.5 h-[110px]">
                {stats.days.map((d) => (
                  <div
                    key={d.day}
                    className="flex-1 flex flex-col items-center justify-end gap-1.5 h-full"
                    title={`${d.day}: ${d.views} views, ${d.uniques} unique`}
                  >
                    <div
                      className="w-full rounded bg-gradient-to-t from-sky-500 to-indigo-400 min-h-[3px]"
                      style={{
                        height: `${Math.max(
                          3,
                          Math.round((d.views / maxDay) * 100)
                        )}%`,
                      }}
                    />
                    <span className="text-[9px] text-zinc-400">
                      {d.day.slice(8)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
