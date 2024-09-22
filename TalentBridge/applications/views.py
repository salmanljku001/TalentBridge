from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Application
from jobs.models import Job
from users.models import Jobseeker
import json

@csrf_exempt
def apply_job(request, job_id):
    if request.method == 'POST':
        data = json.loads(request.body)
        try:
            job = Job.objects.get(id=job_id)
            jobseeker = Jobseeker.objects.get(user_id=data['user_id'])  # assuming user ID is passed
            application = Application.objects.create(
                job=job,
                jobseeker=jobseeker
            )
            return JsonResponse({'message': 'Application submitted successfully', 'application_id': application.id}, status=201)
        except (Job.DoesNotExist, Jobseeker.DoesNotExist):
            return JsonResponse({'error': 'Job or Jobseeker not found'}, status=404)

@csrf_exempt
def application_status(request, application_id):
    try:
        application = Application.objects.get(id=application_id)
        return JsonResponse({
            'application_id': application.id,
            'job_title': application.job.job_title,
            'application_status': application.application_status,
            'applied_at': application.applied_at,
        })
    except Application.DoesNotExist:
        return JsonResponse({'error': 'Application not found'}, status=404)
