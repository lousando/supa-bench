#!/usr/bin/env -S deno run -A

function handler(_req: Request): Response {
    return new Response("hello world", {
        headers: { "Content-Type": "text/plain" },
    });
}

// listens by default on port 8000
Deno.serve({ port: 3000, hostname: "127.0.0.1" }, handler);