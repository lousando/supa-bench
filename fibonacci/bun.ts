#!/usr/bin/env -S bun run

const fib = (n) => {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
};

const server = Bun.serve({
  routes: {
    // Static routes
    "/": function () {
      let fibSeq = "";
      for (let i = 0; i <= 32; i++) {
        fibSeq += fib(i) + " ";
      }

      return new Response(fibSeq, {
        headers: {
          "Content-Type": "text/html",
        },
      });
    },
  },
});

console.log(`Bun server running at ${server.url}`);

