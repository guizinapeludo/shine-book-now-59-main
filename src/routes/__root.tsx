import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Aurora Estética — Beleza & Bem-estar" },
      { name: "description", content: "Tratamentos estéticos exclusivos com cuidado personalizado. Agende seu horário online." },
      { name: "author", content: "Aurora Estética" },
      { property: "og:title", content: "Aurora Estética — Beleza & Bem-estar" },
      { property: "og:description", content: "Tratamentos estéticos exclusivos com cuidado personalizado." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  if (typeof window === "undefined") {
    // #region agent log
    fetch("http://127.0.0.1:7631/ingest/f247117c-22bf-4cc8-a300-57fd1cebba0a", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "25fe09" },
      body: JSON.stringify({
        sessionId: "25fe09",
        runId: "pre-fix",
        hypothesisId: "H1",
        location: "src/routes/__root.tsx:58",
        message: "SSR root shell rendered",
        data: { env: "server" },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
  }

  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  useEffect(() => {
    // #region agent log
    fetch("http://127.0.0.1:7631/ingest/f247117c-22bf-4cc8-a300-57fd1cebba0a", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "25fe09" },
      body: JSON.stringify({
        sessionId: "25fe09",
        runId: "pre-fix",
        hypothesisId: "H2",
        location: "src/routes/__root.tsx:71",
        message: "Root component mounted",
        data: { path: window.location.pathname },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion

    const stylesheetLink = document.querySelector('link[rel="stylesheet"][href]');

    // #region agent log
    fetch("http://127.0.0.1:7631/ingest/f247117c-22bf-4cc8-a300-57fd1cebba0a", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "25fe09" },
      body: JSON.stringify({
        sessionId: "25fe09",
        runId: "pre-fix",
        hypothesisId: "H3",
        location: "src/routes/__root.tsx:87",
        message: "Stylesheet link detection",
        data: {
          hasStylesheet: Boolean(stylesheetLink),
          href: stylesheetLink?.getAttribute("href") ?? null,
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion

    // #region agent log
    fetch("http://127.0.0.1:7631/ingest/f247117c-22bf-4cc8-a300-57fd1cebba0a", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "25fe09" },
      body: JSON.stringify({
        sessionId: "25fe09",
        runId: "pre-fix",
        hypothesisId: "H4",
        location: "src/routes/__root.tsx:104",
        message: "Stylesheet count snapshot",
        data: { styleSheetCount: document.styleSheets.length },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
