# fridge_backend/urls.py
# Taken from CodePlatoon JWT Authentication lesson, 04-13-2021
# Tyler Abbott 04-19-2021

from fridge_auth.serializers import UserSerializer

def my_jwt_response_handler(token, user=None, request=None):
    return {
        'token': token,
        'user': UserSerializer(user, context={'request': request}).data
    }