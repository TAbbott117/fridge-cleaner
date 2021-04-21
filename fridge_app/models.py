## fridge_app/models.py
## Tyler Abbott 
## 4/19/2021

from django.db import models
from django.contrib.auth.models import User

# Used to store ingredients. Each fridge must belong to a User
class Fridge(models.Model):
    name = models.CharField(max_length=64, blank=False)
    user = models.ForeignKey(User, related_name="fridges", on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.name}"

# Each ingredient must be stored in a fridge
class Ingredient(models.Model):
    name = models.CharField(max_length=64, blank=False)
    fridge = models.ForeignKey(Fridge, related_name="ingredients", blank=False, on_delete=models.CASCADE)
    date_added = models.DateField(auto_now_add=True)
    expiry_date = models.DateField(blank=False)
    used = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.name}"

