import type { IncomingMessage, ServerResponse } from "node:http";
import app from "../dist/server/index.js";

function toHeaders(rawHeaders: IncomingMessage["headers"]): Headers {
  const headers = new Headers();
  for (const [key, value] of Object.entries(rawHeaders)) {
    if (typeof value === "string") headers.set(key, value);
    else if (Array.isArray(value)) headers.set(key, value.join(","));
  }
  return headers;
}

async function readBody(req: IncomingMessage): Promise<BodyInit | undefined> {
  if (req.method === "GET" || req.method === "HEAD") return undefined;
  const chunks: Uint8Array[] = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return chunks.length ? Buffer.concat(chunks) : undefined;
}

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  const host = req.headers.host ?? "localhost";
  const url = new URL(req.url ?? "/", `https://${host}`);
  const body = await readBody(req);
  const request = new Request(url, {
    method: req.method ?? "GET",
    headers: toHeaders(req.headers),
    body,
  });

  // #region agent log
  fetch("http://127.0.0.1:7631/ingest/f247117c-22bf-4cc8-a300-57fd1cebba0a", {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "25fe09" },
    body: JSON.stringify({
      sessionId: "25fe09",
      runId: "post-fix",
      hypothesisId: "V1",
      location: "api/index.ts:33",
      message: "Vercel handler request received",
      data: { method: request.method, path: url.pathname },
      timestamp: Date.now(),
    }),
  }).catch(() => {});
  // #endregion

  const response = await app.fetch(request);

  // #region agent log
  fetch("http://127.0.0.1:7631/ingest/f247117c-22bf-4cc8-a300-57fd1cebba0a", {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "25fe09" },
    body: JSON.stringify({
      sessionId: "25fe09",
      runId: "post-fix",
      hypothesisId: "V2",
      location: "api/index.ts:49",
      message: "Vercel handler response produced",
      data: { status: response.status, contentType: response.headers.get("content-type") },
      timestamp: Date.now(),
    }),
  }).catch(() => {});
  // #endregion

  res.statusCode = response.status;
  response.headers.forEach((value, key) => res.setHeader(key, value));

  if (!response.body) {
    res.end();
    return;
  }

  const arrayBuffer = await response.arrayBuffer();
  res.end(Buffer.from(arrayBuffer));
}
