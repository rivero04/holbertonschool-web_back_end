#!/usr/bin/env python3
"Mongo module"

from pymongo import MongoClient


def schools_by_topic(mongo_collection, topic):
    """Function that returns the list of school having a specific topic"""
    schools = mongo_collection.find({"topics": topic})

    return schools
