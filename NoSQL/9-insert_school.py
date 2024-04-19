#!/usr/bin/env python3
"""Mongo moduel"""

from pymongo import MongoClient


def insert_school(mongo_collection, **kwargs):
    """Function that inserts a new document in a collection based on kwargs"""
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
