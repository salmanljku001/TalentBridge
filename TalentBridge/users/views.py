from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login as auth_login
from django.contrib.auth.models import User
import json

@csrf_exempt
def register(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        # Handle registration logic
        return JsonResponse({'message': 'User registered successfully'})

@csrf_exempt
def login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        user = authenticate(request, username=data['username'], password=data['password'])
        if user is not None:
            auth_login(request, user)
            return JsonResponse({'message': 'Login successful'})
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=400)

@csrf_exempt
def logout(request):
    # Handle logout logic
    return JsonResponse({'message': 'Logout successful'})

def profile(request, user_id):
    # Logic to fetch and return user profile
    return JsonResponse({'user_id': user_id})
