from fastapi import FastAPI
from datetime import datetime

def get_current_timestamp():
    # Format the timestamp as you like, here it's in ISO format - "2024-02-20T15:23:53.783919"
    return datetime.now().isoformat()

app = FastAPI()
@app.get("/api/ping")
def ping():
    timestamp = get_current_timestamp()
    return {"message": "Pong.", "timestamp": timestamp}