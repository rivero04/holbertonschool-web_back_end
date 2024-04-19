#!/usr/bin/env python3
"Mongo module"

from pymongo import MongoClient


def logs_stat():
    """script that provides some stats about Nginx logs stored in MongoDB:"""
    client = MongoClient('mongodb://localhost:27017/')
    db = client['logs']
    collection = db['nginx']

    total_logs = collection.count_documents({})
    print(f"{total_logs} logs")

    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = collection.count_documents({"method": method})
        print(f"\t{count} {method}")

    count = collection.count_documents({"method": "GET", "path": "/status"})
    print(f"\t{count} GET /status")
