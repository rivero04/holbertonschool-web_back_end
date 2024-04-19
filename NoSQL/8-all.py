#!/usr/bin/env python3
"Mongo module"

from pymongo import MongoClient


def list_all(mongo_collection):
    """Function that lists all documents in a collection"""
    documents = mongo_collection.find()
    return list(documents)
