from django.shortcuts import render

# Create your views here.
# api/views.py
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics
from .models import *
from .serializers import *

class StudentListCreateAPIView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated] 
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class GuardianListCreateAPIView(generics.ListCreateAPIView):
    queryset = Guardian.objects.all()
    serializer_class = GuardianSerializer

class StudentDetailsListCreateAPIView(generics.ListCreateAPIView):
    queryset = StudentDetails.objects.all()
    serializer_class = StudentDetailsSerializer

class ServicesListCreateAPIView(generics.ListCreateAPIView):
    queryset = Services.objects.all()
    serializer_class = ServicesSerializer

class StudentListCreateAPIView(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class FingerprintListCreateAPIView(generics.ListCreateAPIView):
    queryset = Fingerprint.objects.all()
    serializer_class = FingerprintSerializer