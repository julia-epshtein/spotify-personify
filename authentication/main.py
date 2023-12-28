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

@app.route('/callback')
def callback():
    if 'error' in request.args:
        return jsonify({'error' : request.args['error']})
    
    if 'code' in request.args:
        req_body = {
            'code' : request.args['code'],
            'grant_type' : 'authorization_code',
            'redirect_uri' : REDIRECT_URI,
            'client_id' : CLIENT_ID,
            'client_secret' : CLIENT_SECRET
        }
        
        response = requests.post(TOKEN_URL, data=req_body)
        token_info = response.json()
        
        session['access_token'] = token_info['access_token'] 
        session['refresh_token'] = token_info['refresh_token']
        session['expires_at'] = datetime.now().timestamp() + token_info['expires_in']
        
        return redirect('/playlists')

@app.route('/playlists')
def get_playlists():
    if 'access_token' not in session:
        return redirect('/login')
    
    if datetime.now().timestamp() > session['expires_at']:
        return redirect('/refresh-token')
    
    headers = {
        'Authorization' : f"Bearer {session['access_token']}"
    }
    
    response = requests.get(API_BASE_URL + 'me/playlists', headers=headers)
    playlists = response.json()
    
    return jsonify(playlists)
    
    