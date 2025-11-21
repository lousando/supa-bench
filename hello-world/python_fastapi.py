#!/usr/bin/env -S fastapi run --port 3000
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return "Hello World!"