from django.urls import path
from . import views

urlpatterns = [
    path('api/apply/<int:job_id>/', views.apply_job, name='apply_job'),  # Apply for a job
    path('api/application/status/<int:application_id>/', views.application_status, name='application_status'),  # Check application status
]
