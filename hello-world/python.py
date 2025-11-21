#!/usr/bin/env python3

from http.server import BaseHTTPRequestHandler, HTTPServer

class HelloHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()
        self.wfile.write(b"Hello World")

if __name__ == "__main__":
    server = HTTPServer(("localhost", 3000), HelloHandler)
    print("Server running at http://localhost:3000")
    server.serve_forever()
