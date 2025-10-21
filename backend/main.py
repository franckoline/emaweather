from fastapi import FastAPI, HTTPException, Query
from typing import Dict, Optional
import requests
from fastapi.middleware.cors import CORSMiddleware
from config import get_api_key, get_base_url

app = FastAPI(title="Weather API")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def fetch_weather(city: str, units: str = "metric") -> Dict:
    api_key = get_api_key()
    base_url = get_base_url()

    params = {"q": city, "appid": api_key,"units": units
    }

    try:
        response = requests.get(base_url, params=params, timeout=10)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=502, detail=f"Error fetching weather data: {str(e)}")

@app.get("/")
def app_status() -> Dict[str, str]:
    return {"status": "App Running!"}

@app.get("/weather")
def current_weather(
    city: str = Query(..., description="City"),
    units: Optional[str] = Query("metric", description="Units: metric")
) -> Dict:
    if not city:
        raise HTTPException(status_code=400, detail="City parameter is required")
    return fetch_weather(city, units)
