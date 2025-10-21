import os
from dotenv import load_dotenv

load_dotenv()

def get_api_key() -> str:
    api_key = os.getenv("API_KEY")
    if not api_key:
        raise ValueError("Perhaps API key not created. Please set API_KEY in .env")
    return api_key

def get_base_url() -> str:
    base_url = os.getenv("BASE_URL")
    if not base_url:
        raise ValueError("Perhaps Base Url is not set. Please set it in the .env file")
    return base_url
