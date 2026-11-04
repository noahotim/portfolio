"use client";

import { useEffect } from "react";
import { detectClient } from "@/lib/detect";

const API =
  process.env.NEXT_PUBLIC_PROFILE_VIEWS_API ||
  "https://profile-views.otim-no25.workers.dev";

const BEACON_MS = 6000;

export default function ActivityTracker() {
  useEffect(() => {
    // Owner reads are tracked too. Activity rows are ephemeral and never touch
    // the view totals, so the fastest way to confirm the live table works is
    // to watch your own session move through the sections.
    const started = Date.now();
    const perSection: Record<string, number> = {};
    let current: string | null = null;
    let currentSince = Date.now();
    let clicks = 0;
    let depth = 0;

    const flush = () => {
      if (current) {
        perSection[current] = (perSection[current] || 0) + (Date.now() - currentSince) / 1000;
        currentSince = Date.now();
      }
    };

    const send = () => {
      flush();
      const section = current || "top";
      const client = detectClient();
      const params = new URLSearchParams({
        src: "activity",
        sec: section,
        dwell: String(Math.round((Date.now() - started) / 1000)),
        clicks: String(clicks),
        depth: String(depth),
        path: window.location.pathname,
        b: client.browser,
        o: client.os,
        d: client.device,
        ua: navigator.userAgent || "",
      });
      const url = `${API}/api/activity?${params.toString()}`;
      if (navigator.sendBeacon) navigator.sendBeacon(url);
      else void fetch(url, { keepalive: true, cache: "no-store" });
    };

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section[id], section[id]")
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.id || "top";
          if (id === current) continue;
          if (current) perSection[current] = (perSection[current] || 0) + (Date.now() - currentSince) / 1000;
          current = id;
          currentSince = Date.now();
        }
      },
      { threshold: 0.35 }
    );
    sections.forEach((el) => observer.observe(el));

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      depth = max > 0 ? Math.min(100, Math.round((window.scrollY / max) * 100)) : 100;
    };
    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      if (target?.closest("a, button, summary")) clicks += 1;
    };
    const onHide = () => send();

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClick);
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") onHide();
    });
    window.addEventListener("pagehide", onHide);
    onScroll();

    const timer = window.setInterval(send, BEACON_MS);

    return () => {
      window.clearInterval(timer);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
      window.removeEventListener("pagehide", onHide);
    };
  }, []);

  return null;
}
