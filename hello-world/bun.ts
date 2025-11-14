#!/usr/bin/env -S bun run

const server = Bun.serve({
  routes: {
    // Static routes
    "/": new Response("Hello World")
  },
});

console.log(`Server running at ${server.url}`);