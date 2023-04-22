import os
import json
import requests
from flask import make_response, jsonify, request, Flask, redirect
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()
USERNAME = os.environ.get("USERNAME")
API_TOKEN = os.environ.get("GITHUB_TOKEN")
HEADERS = {'Authorization': f'token {API_TOKEN}', "Accept": "application/vnd.github.mercy-preview+json"}
API_URL = "https://api.github.com/user/repos"

application = Flask(__name__)
CORS(application)


@application.route("/fetch-projects", methods=["GET", "POST"])
def fetch_projects():
    params = {"sort": "pushed", "per_page": 100}
    response = requests.get(API_URL, headers=HEADERS, params=params)

    if response.status_code != 200:
        return make_response(jsonify({"error": "Unable to fetch repos"}), 400)

    projects = []
    for repo in json.loads(response.content):
        is_forked = repo["fork"]
        topics = repo['topics']
        if topics and not repo["fork"]:
            project = {
                "id": repo["id"],
                "name": repo["name"],
                "url": repo["html_url"],
                "description": repo["description"],
                "topics": topics
            }
            projects.append(project)

        if len(projects) == 9:
            break

    return make_response(jsonify({"data": projects}), 200)


if __name__ == "__main__":
   application.run(port=8000, debug=True)