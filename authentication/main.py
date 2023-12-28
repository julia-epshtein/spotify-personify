import requests
import urllib.parse
from flask import Flask, redirect

app = Flask(__name__)
app.secret_key = '34f80a3c-8c5a-4b9e-9b0a-9e9a5a4b3c2d'

CLIENT_ID = 'd62cb14d245c47668fd50431a942c046'
CLIENT_SECRET = 'fc28483fa9a74b22a90d076120fa3df8'

# A URI where users can be redirected after authentication success or failure
REDIRECT_URI = 'http://localhost:5000/callback'

# URLS to get the tokens from spotify
AUTH_URL = 'https://accounts.spotify.com/authorize'

# Refresh the token
TOKEN_URL = 'https://accounts.spotify.com/api/token'
API_BASE_URL = 'https://api.spotify.com/v1/'

# Create a simple route for the flask app
@app.route('/')
def index():
    return "Welcome to Personify! <a href='/login'>Login with Spotify</a>"

# Login endpoint to redirect to Spotify's login page
@app.route('/login')
def login():
    # Asking for permissions
    scope = 'user-read-private user-read-email user-read-playback-state user-modify-playback-state'
    
    params = {
        'client-id' : CLIENT_ID,
        'response_type' : 'code',
        'scope' : scope,
        'redirect_uri' : REDIRECT_URI,
        'show_dialog' : True
    }
    
    auth_url = f'{AUTH_URL}/?{urllib.parse.urlencode(params)}'
    
    return redirect(auth_url)