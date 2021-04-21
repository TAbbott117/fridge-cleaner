## fridge_app/serializers.py
## Tyler Abbott 
## 4/19/2021

from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from .models import Fridge, Ingredient, User

# Serializes new user sign ups that responds with the new user's information including a new token.
class UserSerializerWithToken(serializers.ModelSerializer):

    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)

    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    class Meta:
        model = User
        fields = ['token', 'username', 'password']

# Serializes Ingredient objects
class IngredientSerializer(serializers.ModelSerializer):
    fridge = serializers.PrimaryKeyRelatedField(queryset=Fridge.objects.all())
    class Meta:
        model = Ingredient
        fields = ['name', 'fridge', 'date_added', 'expiry_date', 'used']

# Serializes Fridge objects
class FridgeSerializer(serializers.ModelSerializer):
    ingredients = IngredientSerializer(many=True, required=False)
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    class Meta:
        model = Fridge
        fields = ['name', 'user', 'ingredients']

# Serializes current user
class UserSerializer(serializers.ModelSerializer):
    fridges = FridgeSerializer(many=True, required=False)
    class Meta:
        model = User
        fields = ['username', 'fridges']