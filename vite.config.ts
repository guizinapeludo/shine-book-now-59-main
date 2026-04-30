// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// #region agent log
console.log(
  "[agent-debug e8c1e8] vercel-build-meta",
  JSON.stringify({
    hypothesisId: "H-deploy-source",
    runId: "pre-fix",
    commitSha: process.env.VERCEL_GIT_COMMIT_SHA ?? "missing",
    branch: process.env.VERCEL_GIT_COMMIT_REF ?? "missing",
    repo: process.env.VERCEL_GIT_REPO_SLUG ?? "missing",
    cwd: process.cwd(),
  }),
);

fetch("http://127.0.0.1:7631/ingest/f247117c-22bf-4cc8-a300-57fd1cebba0a", {
  method: "POST",
  headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "e8c1e8" },
  body: JSON.stringify({
    sessionId: "e8c1e8",
    runId: "pre-fix",
    hypothesisId: "H-deploy-source",
    location: "vite.config.ts:9",
    message: "Vercel build metadata",
    data: {
      commitSha: process.env.VERCEL_GIT_COMMIT_SHA ?? "missing",
      branch: process.env.VERCEL_GIT_COMMIT_REF ?? "missing",
      repo: process.env.VERCEL_GIT_REPO_SLUG ?? "missing",
      cwd: process.cwd(),
    },
    timestamp: Date.now(),
  }),
}).catch(() => {});
// #endregion

export default defineConfig();
