from django.shortcuts import render
from pymongo import MongoClient
# Create your views here.
from djongo import *
from django.http import JsonResponse
from django.core import serializers
from django.http import HttpResponse
from types import SimpleNamespace
import json
from bson.json_util import dumps
from bson.json_util import loads

def dhashboard_data(request):
    uri = "mongodb+srv://shivamjha:Mrsperfect2%40@cluster0.bfnwl.mongodb.net/test"
    client = MongoClient(uri)
    db = client.Django_dash
    coll = db.Dhashboard_information
    cursor = list(coll.find({'sector':'Energy'}, {'intensity':1,'start_year': 1,'likelihood':1,'_id':0 }).limit(10))
    cursor1 = list(coll.find({'sector': 'Environment'}, {'intensity':1,'start_year': 1,'likelihood':1,'_id':0 }).limit(10))
    cursor2 = dumps(cursor)
    client.close()
    return HttpResponse(cursor2,content_type="text/json-comment-filtered")

def dhashboard_data1(request):
    uri = "mongodb+srv://shivamjha:Mrsperfect2%40@cluster0.bfnwl.mongodb.net/test"
    client = MongoClient(uri)
    db = client.Django_dash
    coll = db.Dhashboard_information
    # cursor = list(coll.find({'sector':'Energy'}, {'intensity':1,'start_year': 1,'likelihood':1,'_id':0 }).limit(10))
    cursor = list(coll.find({'sector': 'Environment'}, {'intensity':1,'end_year': 1,'likelihood':1,'_id':0 }).limit(10))
    cursor2 = dumps(cursor)
    client.close()
    return HttpResponse(cursor2,content_type="text/json-comment-filtered")
    
def dhashboard(request):
    return render(request, 'dhashboard.html')