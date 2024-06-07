# api/urls.py

from django.urls import path
from .views import *

urlpatterns = [
    path('students/', StudentListCreateAPIView.as_view(), name='student-list-create'),
    path('guardians/', GuardianListCreateAPIView.as_view(), name='guardian-list-create'),
    path('student-details/', StudentDetailsListCreateAPIView.as_view(), name='student-details-list-create'),
    path('services/', ServicesListCreateAPIView.as_view(), name='services-list-create'),
    path('pin/', PinListCreateAPIView.as_view(), name='pin'),
    path('pin-model/', pin_modelListCreateAPIView.as_view(), name='pin-model'),
    path('store-pin/', store_pin, name='store_pin'),
    path('user-profile/', UserProfileView.as_view(), name='user-profile'),
    
    # Add other URL patterns as needed
]
