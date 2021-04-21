## fridge_app/admin.py
## Tyler Abbott 
## 4/19/2021

from django.contrib import admin
from .models import Fridge, Ingredient

admin.site.register(Fridge)
admin.site.register(Ingredient)
