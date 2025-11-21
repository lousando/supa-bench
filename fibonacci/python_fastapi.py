#!/usr/bin/env -S fastapi run --port 3000
from fastapi import FastAPI

app = FastAPI()

def fib(n: int) -> int:
    a, b = 0, 1          # F(0), F(1)
    for _ in range(n):   # iterate n times
        a, b = b, a + b  # shift forward
    return a             # a now holds F(n)

@app.get("/")
def read_root():
    return fib(32)