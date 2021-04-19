from django.shortcuts import render
from rest_framework import viewsets
from .models import User, Fridge, Ingredient
from .serializers import UserSerializer, FridgeSerializer, IngredientSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class FridgeViewSet(viewsets.ModelViewSet):
    queryset = Fridge.objects.all()
    serializer_class = FridgeSerializer

class IngredientViewSet(viewsets.ModelViewSet):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer
    

