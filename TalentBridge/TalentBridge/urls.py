from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('users/', include('users.urls')),  # Include users app URLs
    path('jobs/', include('jobs.urls')),    # Include jobs app URLs
    path('applications/', include('applications.urls')),  # Include applications app URLs
]
