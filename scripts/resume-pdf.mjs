// npm run pdf: print /resume/ to static/Daniel-Singer-Resume.pdf with headless
// Chrome, then check that the PDF's text extracts cleanly.
//
// Runs Hugo in the "pdf" environment so the print-only header can show the
// real email address without it ever appearing on the live site.

import { spawn, spawnSync } from "node:child_process";
import { existsSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const PORT = 1415;
const OUT = "static/Daniel-Singer-Resume.pdf";
const URL = `http://localhost:${PORT}/resume/`;

// Hugo's Sass importer breaks on a lowercase Windows drive letter (d:\),
// which is what VS Code hands the terminal. Always pass an uppercase one.
let root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
root = root.replace(/^[a-z]:/, (d) => d.toUpperCase());

function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
  ];
  const found = candidates.find((p) => p && existsSync(p));
  if (!found) throw new Error("Chrome not found. Set CHROME_PATH.");
  return found;
}

async function waitFor(url, ms = 30000) {
  const end = Date.now() + ms;
  while (Date.now() < end) {
    try {
      if ((await fetch(url)).ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error(`Hugo server did not answer at ${url}`);
}

// What a parser must find, in this order, for the PDF to count as readable.
function check(pdf) {
  const r = spawnSync("pdftotext", ["-layout", pdf, "-"], { encoding: "utf8" });
  if (r.error) {
    console.warn("pdftotext not found, skipped the text check.");
    return;
  }
  const text = r.stdout;
  const expect = [
    "Daniel Singer",
    "daniel@chilblane.com",
    "Skills",
    "Experience",
    "PNC",
    "Microsoft",
    "Smartsheet",
    "Education",
  ];
  let at = 0;
  for (const word of expect) {
    const i = text.indexOf(word, at);
    if (i === -1) throw new Error(`PDF text check failed: "${word}" missing or out of order`);
    at = i;
  }
  if (/[a-z]{2,}\s*<\w+ \/>/.test(text)) throw new Error("PDF contains code labels");
  console.log("Text check passed.");
}

const hugo = spawn(
  "hugo",
  ["server", "-s", root, "-e", "pdf", "--port", String(PORT),
   "--disableLiveReload", "--renderToMemory"],
  { stdio: "ignore" },
);

try {
  await waitFor(URL);
  const out = path.join(root, OUT);
  const chrome = spawnSync(
    findChrome(),
    ["--headless=new", "--disable-gpu", "--no-pdf-header-footer",
     "--virtual-time-budget=5000", `--print-to-pdf=${out}`, URL],
    { encoding: "utf8" },
  );
  if (chrome.status !== 0 || !existsSync(out)) {
    throw new Error(`Chrome failed:\n${chrome.stderr}`);
  }
  console.log(`Wrote ${OUT} (${Math.round(statSync(out).size / 1024)} KB)`);
  check(out);
} finally {
  // On Windows "hugo" is often a shim (Chocolatey, Scoop) that starts the real
  // hugo.exe as a child; killing the shim leaves the server running. Kill the
  // whole process tree instead.
  if (process.platform === "win32") {
    spawnSync("taskkill", ["/pid", String(hugo.pid), "/T", "/F"], { stdio: "ignore" });
  } else {
    hugo.kill();
  }
}
