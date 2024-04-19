#!/usr/bin/env python3
"Mongo module"

from pymongo import MongoClient


def update_topics(mongo_collection, name, topics):
    """Function that changes all topics of a school document based on name"""
    result = mongo_collection.update_many({"name": name},
                                          {"$set": {"topics": topics}})
    return result
