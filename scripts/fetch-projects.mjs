import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(root, "src", "data", "projects.json");
const config = JSON.parse(readFileSync(join(root, "portfolio.config.json"), "utf8"));

const API = "https://api.github.com";
const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || "";
const headers = {
  "user-agent": "noahotim-portfolio-builder",
  accept: "application/vnd.github+json",
  ...(token ? { authorization: `Bearer ${token}` } : {}),
};

async function gh(path) {
  const res = await fetch(`${API}${path}`, { headers });
  if (!res.ok) throw new Error(`GitHub API ${path} -> ${res.status} ${res.statusText}`);
  return res.json();
}

async function getRepos() {
  const all = [];
  for (let page = 1; page <= 10; page++) {
    const batch = await gh(
      `/users/${config.username}/repos?per_page=100&page=${page}&sort=pushed&type=owner`
    );
    all.push(...batch);
    if (batch.length < 100) break;
  }
  return all;
}

function score(r) {
  let s = 0;
  s += (r.stargazers_count || 0) * 6;
  s += (r.forks_count || 0) * 8;
  if (r.description) s += 15;
  if (r.homepage) s += 12;
  s += Math.min((r.topics?.length || 0) * 2, 10);
  if (r.size > 0) s += 4;
  if (r.license) s += 3;
  const days = (Date.now() - new Date(r.pushed_at).getTime()) / 86400000;
  if (days <= 30) s += 30;
  else if (days <= 90) s += 20;
  else if (days <= 180) s += 12;
  else if (days <= 365) s += 6;
  return s;
}

function isWorthShowing(r) {
  if (r.name.toLowerCase() === config.username.toLowerCase()) return false;
  if (!config.includeForks && r.fork) return false;
  if (r.archived) return false;
  if ((config.exclude || []).map((x) => x.toLowerCase()).includes(r.name.toLowerCase())) return false;
  if (r.size === 0 && !r.description) return false;
  return true;
}

function pickBest(repos) {
  const eligible = repos.filter(isWorthShowing);
  const byName = new Map(eligible.map((r) => [r.name.toLowerCase(), r]));
  const featured = (config.featured || [])
    .map((n) => byName.get(String(n).toLowerCase()))
    .filter(Boolean);
  const featuredNames = new Set(featured.map((r) => r.name.toLowerCase()));
  const rest = eligible
    .filter((r) => !featuredNames.has(r.name.toLowerCase()))
    .map((r) => ({ r, s: score(r) }))
    .sort((a, b) => b.s - a.s || new Date(b.r.pushed_at) - new Date(a.r.pushed_at))
    .map((x) => x.r);
  return featured.concat(rest).slice(0, config.topN || 6);
}

function describe(r) {
  return config.descriptions?.[r.name] || r.description || "Production project from my GitHub.";
}

function tag(r) {
  return config.tags?.[r.name] || r.language || "Project";
}

async function main() {
  const [user, repos] = await Promise.all([gh(`/users/${config.username}`), getRepos()]);
  const picks = pickBest(repos);

  const data = {
    generatedAt: new Date().toISOString(),
    user: {
      login: user.login,
      publicRepos: user.public_repos,
      followers: user.followers,
      totalStars: repos.reduce((a, r) => a + (r.stargazers_count || 0), 0),
    },
    projects: picks.map((r) => ({
      name: r.name,
      description: describe(r),
      tag: tag(r),
      url: r.html_url,
      homepage: r.homepage || null,
      language: r.language || null,
      stars: r.stargazers_count,
      forks: r.forks_count,
      topics: r.topics || [],
      pushedAt: r.pushed_at,
      score: score(r),
    })),
  };

  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, JSON.stringify(data, null, 2) + "\n");
  console.log(`Wrote ${picks.length} projects -> src/data/projects.json: ${picks.map((r) => r.name).join(", ")}`);
}

main().catch((err) => {
  console.error(`[fetch-projects] ${err.message}`);
  if (existsSync(OUT)) {
    console.error("[fetch-projects] Keeping existing project data, continuing build.");
    process.exit(0);
  }
  process.exit(1);
});
