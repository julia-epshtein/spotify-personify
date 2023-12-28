import requests
from flask import Flask

app = Flask(__name__)
app.secret_key = '34f80a3c-8c5a-4b9e-9b0a-9e9a5a4b3c2d'

CLIENT_ID = ''
CLIENT_SECRET = ''

# A URI where users can be redirected after authentication success or failure
REDIRECT_URI = 'http://localhost:5000/callback'

# URLS to get the tokens from spotify
AUTH_URL = 'https://accounts.spotify.com/authorize'

# Refresh the token
TOKEN_URL = 'https://accounts.spotify.com/api/token'
API_BASE_URL = 'https://api.spotify.com/v1/'

