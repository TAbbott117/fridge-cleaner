## fridge_app/views.py
## Tyler Abbott
## 4/20/2021

from django.shortcuts import render
from rest_framework import viewsets
from .models import User, Fridge, Ingredient
from .serializers import UserSerializer, FridgeSerializer, IngredientSerializer
from django.http import JsonResponse
import requests

# View sets for postgres db

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class FridgeViewSet(viewsets.ModelViewSet):
    queryset = Fridge.objects.all()
    serializer_class = FridgeSerializer

class IngredientViewSet(viewsets.ModelViewSet):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer
    
# Receives a string with a list of ingredients separated by underscores. Returns a JSON response retrieved
#   from the RecipePuppy api

def recipe_list(request, ingredients):
    split_ingredients = ingredients.split('_')
    result = ""
    for ingredient in split_ingredients:
        result += ingredient + ','
    result_formatted = result[:-1]
    response = requests.get(f'http://www.recipepuppy.com/api/?i={result_formatted}').json()
    return JsonResponse(response)

# Receives a zip code. Returns a JSON response retrieved from Open Brewery DB with 
#   local breweries and bars

def breweries_list(request, zip):
    response = requests.get(f'https://api.openbrewerydb.org/breweries?by_postal={zip}').json()
    return JsonResponse(response, safe=False)