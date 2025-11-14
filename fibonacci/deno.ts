#!/usr/bin/env -S deno run -A

const fib = (n: number): number => {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
};

function handler(_req: Request): Response {
    let fibSeq = "";
    for (let i = 0; i <= 32; i++) {
        fibSeq += fib(i) + " ";
    }

    return new Response(fibSeq, {
        headers: { "Content-Type": "text/plain" },
    });
}

// listens by default on port 3000
Deno.serve({ port: 3000, hostname: "127.0.0.1" }, handler);