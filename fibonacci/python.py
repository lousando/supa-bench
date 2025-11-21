#!/usr/bin/env python3

from http.server import BaseHTTPRequestHandler, HTTPServer


def fib(n: int) -> int:
    a, b = 0, 1          # F(0), F(1)
    for _ in range(n):   # iterate n times
        a, b = b, a + b  # shift forward
    return a             # a now holds F(n)

class HelloHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()
        self.wfile.write(str(fib(32)).encode())

if __name__ == "__main__":
    server = HTTPServer(("localhost", 3000), HelloHandler)
    print("Server running at http://localhost:3000")
    server.serve_forever()
