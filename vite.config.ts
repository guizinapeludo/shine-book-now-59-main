// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { existsSync } from "node:fs";
import path from "node:path";

const assetJpegPath = path.resolve(process.cwd(), "src/assets/portfolio-nails.jpeg");
const assetJpgPath = path.resolve(process.cwd(), "src/assets/portfolio-nails.jpg");

// #region agent log
await fetch("http://127.0.0.1:7631/ingest/f247117c-22bf-4cc8-a300-57fd1cebba0a", {
  method: "POST",
  headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "e8c1e8" },
  body: JSON.stringify({
    sessionId: "e8c1e8",
    runId: "pre-fix",
    hypothesisId: "H1-H4",
    location: "vite.config.ts:10",
    message: "Asset existence check for nails image",
    data: {
      cwd: process.cwd(),
      jpegExists: existsSync(assetJpegPath),
      jpgExists: existsSync(assetJpgPath),
      assetJpegPath,
      assetJpgPath,
      nodeVersion: process.version,
      platform: process.platform,
    },
    timestamp: Date.now(),
  }),
}).catch(() => {});
// #endregion

export default defineConfig();
