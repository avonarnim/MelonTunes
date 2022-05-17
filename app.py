from flask import Flask
from flask import jsonify, request
from flask import redirect, url_for, render_template
import pandas as pd
import pickle
import os
import configparser
import pymongo
from bson import json_util, ObjectId
from api.api import api

# # # load model
# # model = pickle.load(open('model.pkl','rb'))

config = configparser.ConfigParser()
config.read(os.path.abspath(os.path.join(".ini")))

# app
def create_app():
    APP_DIR = os.path.abspath(os.path.dirname(__file__))
    STATIC_FOLDER = os.path.join(APP_DIR, 'static')
    TEMPLATE_FOLDER = os.path.join(APP_DIR, 'templates')
    app = Flask(__name__, static_folder=STATIC_FOLDER, template_folder=TEMPLATE_FOLDER)
    app.register_blueprint(api)
    return app

if __name__ == '__main__':
    app = create_app()
    app.config['MONGO_URI'] = config['PROD']['DB_URI']
    app.run(port = 5000, debug=True)