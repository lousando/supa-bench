# Web Server Bench

### Test Machine:

- MacOS: 26.1 (25B78)
- CPU: 12 (8 performance and 4 efficiency)
  - Apple M2 Pro
- Memory: 16GB
- Etc:
  - 16-inch
  - Year 2023

### Test command:

**Note:** Run `go build golang.go` in each respective directory to compile the Go files.

```bash
wrk -t 100 -c 100 -d 60s http://127.0.0.1:3000/
# and
ab -c 100 -n 100 "http://127.0.0.1:3000/"
```

# Results

## Hello World

- Bun (v1.3.0)
  - (wrk) 138,810.30 requests/sec (average)
    - 714.69us average latency
- Elixir (v1.19.2)
  - (wrk) 136,474.60 requests/sec (average)
    - 754.85us average latency
- Bun (v1.3.0) w/Elysia (v1.4.16) 
  - (wrk) 127,097.26 requests/sec (average)
    - 785.20us average latency
- Go (v1.25.4)
  - (wrk) 124,701.02 requests/sec (average)
    - 809.38us average latency
- Deno (v2.5.6)
  - (wrk) 113,300.35 requests/sec (average)
    - 0.90ms average latency
- FrankenPHP
  - (ab) 3,467.89 requests/sec (average)
- PHP 8
  - (ab) 1,055.34 requests/sec (average)
  
## Fibonacci Up to 32

- Elixir (v1.19.2)
  - (wrk) 139,391.97 requests/sec (average)
    - 746.21us average latency
  - Socket errors: connect 0, read 0, write 0, timeout 0
- Go (v1.25.4)
  - (wrk) 121,183.18 requests/sec (average)
    - 0.86ms average latency
  - Socket errors: connect 0, read 0, write 0, timeout 0
- Bun (v1.3.0)
  - (wrk) 46.81 requests/sec (average)
  - Socket errors: connect 0, read 0, write 0, timeout 2716
- Bun (v1.3.0) w/Elysia (v1.4.16) 
  - (wrk) 46.28 requests/sec (average)
  - Socket errors: connect 0, read 0, write 0, timeout 2689
- Deno (v2.5.6)
  - (wrk) 25.10 requests/sec (average)
  - Socket errors: connect 0, read 0, write 0, timeout 1463
- FrankenPHP
  - (ab) 16 requests/sec (average)