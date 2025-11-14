#!/usr/bin/env -S bun run

import { Elysia } from "elysia"

new Elysia()
	.get('/', function () {      
      return new Response("hello world", {
        headers: {
          "Content-Type": "text/plain",
        },
      });
	})
	.listen(3000)

console.log(`Bun Elysia server running at http://localhost:3000`);
