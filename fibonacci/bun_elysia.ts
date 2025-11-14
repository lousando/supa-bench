#!/usr/bin/env -S bun run

import { Elysia } from "elysia"

const fib = (n) => {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
};

new Elysia()
	.get('/', function () {
      let fibSeq = "";
      
      for (let i = 0; i <= 32; i++) {
        fibSeq += fib(i) + " ";
      }
      
      return new Response(fibSeq, {
        headers: {
          "Content-Type": "text/html",
        },
      });
	})
	.listen(3000)

console.log(`Bun Elysia server running at http://localhost:3000`);
