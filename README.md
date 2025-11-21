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
- FrankenPHP (using PHP v8.4.15)
  - (wrk) 21,991.01 requests/sec (average)
    - 7.18ms average latency  
- Python (v3.14) w/FastAPI (v0.121.3)
  - (wrk) 4,947.50 requests/sec (average)
    - 20.25ms average latency
- Python (v3.14)
  - (wrk) 432.27 requests/sec (average)
    - 145.63us average latency
  
## Fibonacci Up to 32

- Elixir (v1.19.2)
  - (wrk) 139,391.97 requests/sec (average)
    - 746.21us average latency
  - Socket errors: connect 0, read 0, write 0, timeout 0
- Go (v1.25.4)
  - (wrk) 121,183.18 requests/sec (average)
    - 0.86ms average latency
  - Socket errors: connect 0, read 0, write 0, timeout 0
- Python (v3.14) w/FastAPI (v0.121.3)
  - (wrk) 4,883.33 requests/sec (average)
    - 20.52ms average latency
- Python (v3.14)
  - (wrk) 162.17 requests/sec (average)
    - 163.69us average latency
- Bun (v1.3.0)
  - (wrk) 46.81 requests/sec (average)
  - Socket errors: connect 0, read 0, write 0, timeout 2716
- Bun (v1.3.0) w/Elysia (v1.4.16) 
  - (wrk) 46.28 requests/sec (average)
  - Socket errors: connect 0, read 0, write 0, timeout 2689
- Deno (v2.5.6)
  - (wrk) 25.10 requests/sec (average)
  - Socket errors: connect 0, read 0, write 0, timeout 1463
- FrankenPHP (using PHP v8.4.15)
  - (wrk) 21.03 requests/sec (average)
    - 1.15s average latency
  - Socket errors: connect 0, read 0, write 0, timeout 1240