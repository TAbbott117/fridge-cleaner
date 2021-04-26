## fridge_app/urls.py
## Tyler Abbott
## 4/20/2021

from django.urls import path
from rest_framework.routers import DefaultRouter
from rest_framework_jwt.views import obtain_jwt_token
from .views import UserViewSet, FridgeViewSet, IngredientViewSet, recipe_list, breweries_list

urlpatterns = [
    path("login/", obtain_jwt_token),
    path("recipe/<str:ingredients>", recipe_list, name='recipe_list'),
    path("beer/<int:zip>", breweries_list, name='breweries_list')
]

router = DefaultRouter()
router.register(r"users", UserViewSet, basename="user")
router.register(r"fridges", FridgeViewSet, basename="fridge")
router.register(r"ingredients", IngredientViewSet, basename="ingredient")

urlpatterns += router.urls