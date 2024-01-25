from flask import Flask, render_template, jsonify
import json
import random

app = Flask(__name__)

@app.route('/')
def index():
    try:
        with open('client_ids.json', 'r') as file:
            client_ids = json.load(file)
    except (FileNotFoundError, json.JSONDecodeError):
        client_ids = []
    
    return render_template('index.html', client_ids=json.dumps(client_ids))

if __name__ == '__main__':
    app.run()
