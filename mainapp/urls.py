"""

Dhashboard main app url file 

"""
from django.contrib import admin
from django.urls import path, include
from mainapp import views 

urlpatterns = [
    path('api', views.dhashboard_data, name='dhashboard'),
    path('api1', views.dhashboard_data1, name='dhashboard1'),
    path('', views.dhashboard, name='dhashboard'),
]
