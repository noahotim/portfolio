"use client";

import { useEffect } from "react";

const API =
  process.env.NEXT_PUBLIC_PROFILE_VIEWS_API ||
  "https://profile-views.otim-no25.workers.dev";

export default function VisitTracker() {
  useEffect(() => {
    const id = window.setTimeout(() => {
      if (window.localStorage.getItem("pv_dashboard_key")) return;
      if (window.sessionStorage.getItem("pv_tracked")) return;
      window.sessionStorage.setItem("pv_tracked", "1");

      const params = new URLSearchParams({
        src: "site",
        path: window.location.pathname,
        ref: document.referrer || "",
      });
      const url = `${API}/api/track?${params.toString()}`;

      if (typeof navigator !== "undefined" && navigator.sendBeacon) {
        navigator.sendBeacon(url);
      } else {
        void fetch(url, { keepalive: true, cache: "no-store" });
      }
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  return null;
}
