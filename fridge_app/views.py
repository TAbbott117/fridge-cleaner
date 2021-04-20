from django.shortcuts import render
from rest_framework import viewsets
from .models import User, Fridge, Ingredient
from .serializers import UserSerializer, FridgeSerializer, IngredientSerializer
from django.http import JsonResponse
import requests

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class FridgeViewSet(viewsets.ModelViewSet):
    queryset = Fridge.objects.all()
    serializer_class = FridgeSerializer

class IngredientViewSet(viewsets.ModelViewSet):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer
    
def recipe_list(request):
    response=requests.get('http://www.recipepuppy.com/api/?i=apple,cinnamon').json()
    return JsonResponse(response)