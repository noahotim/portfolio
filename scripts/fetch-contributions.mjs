import fs from "node:fs";
import path from "node:path";

const SOURCE =
  process.env.CONTRIB_DATA_URL ||
  "https://raw.githubusercontent.com/noahotim/github-contrib-globe-badge/main/data.json";
const TARGET = path.join(process.cwd(), "src", "data", "contributions.json");

async function main() {
  const headers = { "user-agent": "noahotim-portfolio-build" };
  if (process.env.GITHUB_TOKEN) headers.authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

  try {
    const res = await fetch(SOURCE, { headers });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (!Array.isArray(data.markers)) throw new Error("markers missing");
    // An empty result usually means the badge workflow failed, not that the
    // contributions disappeared — keep the last good snapshot in that case.
    if (data.markers.length === 0 && fs.existsSync(TARGET)) {
      console.warn("Upstream data.json has no markers — keeping committed snapshot");
      return;
    }
    fs.writeFileSync(TARGET, JSON.stringify(data, null, 2) + "\n");
    console.log(
      `Wrote ${data.markers.length} markers / ${data.totalCommits} commits -> src/data/contributions.json`
    );
  } catch (error) {
    if (fs.existsSync(TARGET)) {
      console.warn(`Using committed contributions.json (${error.message})`);
      return;
    }
    fs.writeFileSync(
      TARGET,
      JSON.stringify(
        { user: "noahotim", generatedAt: new Date().toISOString(), totalCommits: 0, totalPullRequests: 0, markers: [] },
        null,
        2
      ) + "\n"
    );
    console.warn(`Wrote empty contributions.json (${error.message})`);
  }
}

main();
