import bson

from flask import current_app, g
from wekzeug.local import LocalProxy
from flask_pymongo import PyMongo
from pymongo.errors import DuplicateKeyError, OperationFailure
from bson.objectid import ObjectId
from bson.errors import InvalidId

def get_db():
    db = getattr(g, "_database", None)
    if db is None:
        db = g._database = PyMongo(current_app).db

    return db

db = LocalProxy(get_db)

def add_entry(spots, pitches):
    melon_doc = { 'spots': spots, 'pitches': pitches, 'sweetness': -1, 'crispness': -1 }
    return db.user_data.insert_one(melon_doc)


def update_with_results(id, sweetness, crispness):
    return db.user_data.update_one(
        {"id": id},
        { "$set": { "sweetness": sweetness, "crispness", crispness } }
    )