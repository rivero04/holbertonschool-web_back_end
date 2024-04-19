#!/usr/bin/env python3
"Mongo module"

from pymongo import MongoClient


def logs_stat():
    """Logs"""
    client = MongoClient('mongodb://localhost:27017/')
    logs = client.logs.nginx

    return logs.count_documents()


def main():
    """Stats about Nginx logs stored in MongoDB """
    print(f"{logs_stat({})} logs")
    print("Methods:")
    print(f"\tmethod GET: {logs_stat({'method': 'GET'})}")
    print(f"\tmethod POST: {logs_stat({'method': 'POST'})}")
    print(f"\tmethod PUT: {logs_stat({'method': 'PUT'})}")
    print(f"\tmethod PATCH: {logs_stat({'method': 'PATCH'})}")
    print(f"\tmethod DELETE: {logs_stat({'method': 'DELETE'})}")
    print(f"{logs_stat({'method': 'GET', 'path': '/status'})} status check")
