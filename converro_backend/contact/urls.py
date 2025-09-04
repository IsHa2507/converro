from django.contrib import admin
from django.urls import path
from .views import contact_details

urlpatterns = [
    path('', contact_details, name = 'contact')
]