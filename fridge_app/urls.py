from django.urls import path
from rest_framework.routers import DefaultRouter
from rest_framework_jwt.views import obtain_jwt_token
from .views import UserViewSet, FridgeViewSet, IngredientViewSet, recipe_list

urlpatterns = [
    path("login/", obtain_jwt_token),
    path("recipetest/", recipe_list, name='recipe_list')
]

router = DefaultRouter()
router.register(r"users", UserViewSet, basename="user")
router.register(r"fridges", FridgeViewSet, basename="fridge")
router.register(r"ingredients", IngredientViewSet, basename="ingredient")

urlpatterns += router.urls