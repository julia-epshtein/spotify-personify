# Import necessary libraries and modules
import requests
import urllib.parse
from flask import Flask, redirect, request, jsonify, session
from datetime import datetime

# Create a Flask web application
app = Flask(__name__)
# Set a secret key for session management
app.secret_key = '34f80a3c-8c5a-4b9e-9b0a-9e9a5a4b3c2d'

# Spotify API credentials and URLs
CLIENT_ID = 'd62cb14d245c47668fd50431a942c046'
CLIENT_SECRET = 'fc28483fa9a74b22a90d076120fa3df8'
REDIRECT_URI = 'http://localhost:5000/callback'
AUTH_URL = 'https://accounts.spotify.com/authorize'
TOKEN_URL = 'https://accounts.spotify.com/api/token'
API_BASE_URL = 'https://api.spotify.com/v1/'

# Function to generate the Spotify authorization URL
def get_auth_url(scope):
    params = {
        'client-id': CLIENT_ID,
        'response_type': 'code',
        'scope': scope,
        'redirect_uri': REDIRECT_URI,
        'show_dialog': True
    }
    return f'{AUTH_URL}/?{urllib.parse.urlencode(params)}'

# Function to get headers with access token for API requests
def get_headers():
    return {'Authorization': f"Bearer {session['access_token']}"}

# Function to exchange authorization code for access and refresh tokens
def get_token_info(code):
    req_body = {
        'code': code,
        'grant_type': 'authorization_code',
        'redirect_uri': REDIRECT_URI,
        'client_id': CLIENT_ID,
        'client_secret': CLIENT_SECRET
    }
    response = requests.post(TOKEN_URL, data=req_body)
    return response.json()

# Function to refresh the access token using the refresh token
def refresh_access_token():
    req_body = {
        'grant_type': 'refresh_token',
        'refresh_token': session['refresh_token'],
        'client_id': CLIENT_ID,
        'client_secret': CLIENT_SECRET
    }
    response = requests.post(TOKEN_URL, data=req_body)
    new_token_info = response.json()
    session['access_token'] = new_token_info['access_token']
    session['expires_at'] = datetime.now().timestamp() + new_token_info['expires_in']

# Route for the home page
@app.route('/')
def index():
    return "Welcome to Personify! <a href='/login'>Login with Spotify</a>"

# Route to initiate the Spotify login process
@app.route('/login')
def login():
    # Specify the desired scope of permissions
    scope = 'user-read-private user-read-email user-read-playback-state user-modify-playback-state'
    # Redirect the user to the Spotify authorization page
    auth_url = get_auth_url(scope)
    return redirect(auth_url)

# Callback route to handle the response from Spotify after user authorization
@app.route('/callback')
def callback():
    if 'error' in request.args:
        # Handle authorization errors
        return jsonify({'error': request.args['error']})
    if 'code' in request.args:
        # Exchange authorization code for access and refresh tokens
        token_info = get_token_info(request.args['code'])
        session['access_token'] = token_info['access_token']
        session['refresh_token'] = token_info['refresh_token']
        session['expires_at'] = datetime.now().timestamp() + token_info['expires_in']
        # Redirect the user to the playlists page
        return redirect('/playlists')

# Route to retrieve and display the user's playlists
@app.route('/playlists')
def get_playlists():
    if 'access_token' not in session:
        # Redirect to login if access token is not present in the session
        return redirect('/login')
    if datetime.now().timestamp() > session['expires_at']:
        # Redirect to token refresh if access token has expired
        return redirect('/refresh-token')
    # Make a request to the Spotify API to get user's playlists
    headers = get_headers()
    response = requests.get(API_BASE_URL + 'me/playlists', headers=headers)
    playlists = response.json()
    return jsonify(playlists)

# Route to refresh the access token using the refresh token
@app.route('/refresh-token')
def refresh_token():
    if 'refresh_token' not in session:
        # Redirect to login if refresh token is not present in the session
        return redirect('/login')
    if datetime.now().timestamp() > session['expires_at']:
        # Refresh the access token if it has expired
        refresh_access_token()
        # Redirect the user to the playlists page
        return redirect('/playlists')
