# api/urls.py

from django.urls import path
from .views import *

urlpatterns = [
    path('students/', StudentListCreateAPIView.as_view(), name='student-list-create'),
    path('guardians/', GuardianListCreateAPIView.as_view(), name='guardian-list-create'),
    path('student-details/', StudentDetailsListCreateAPIView.as_view(), name='student-details-list-create'),
    path('services/', ServicesListCreateAPIView.as_view(), name='services-list-create'),
    path('fingerprints/', FingerprintListCreateAPIView.as_view(), name='fingerprint-list-create'),
    # Add other URL patterns as needed
]
