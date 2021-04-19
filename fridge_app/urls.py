from django.urls import path
from rest_framework.routers import DefaultRouter
from rest_framework_jwt.views import obtain_jwt_token
from .views import UserViewSet, FridgeViewSet, IngredientViewSet

urlpatterns = [
    path("login/", obtain_jwt_token)
]

router = DefaultRouter()
router.register(r"users", UserViewSet, basename="user")
router.register(r"fridges", FridgeViewSet, basename="fridge")
router.register(r"ingredients", IngredientViewSet, basename="ingredient")

urlpatterns += router.urls