from fastapi.testclient import TestClient
from index import app
import pytest
from datetime import datetime
from unittest.mock import patch

client = TestClient(app)

def test_ping_with_valid_timestamp():
    response = client.get("/api/ping")
    data = response.json()

    assert response.status_code == 200
    assert data["message"] == "Pong."

    # Validate the timestamp format
    timestamp = data.get("timestamp")
    assert timestamp is not None, "Timestamp is missing in the response"

    # Parse the timestamp and validate it
    parsed_timestamp = datetime.fromisoformat(timestamp)
    assert isinstance(parsed_timestamp, datetime), "Timestamp is not a valid datetime object"