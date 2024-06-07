from django.shortcuts import render

# Create your views here.
# api/views.py
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics
from .models import *
from .serializers import *


class StudentListCreateAPIView(generics.ListCreateAPIView):
    #permission_classes = [IsAuthenticated] 
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

class PinListCreateAPIView(generics.ListCreateAPIView):
    queryset = Pin.objects.all()
    serializer_class = PinSerializer

class pin_modelListCreateAPIView(generics.ListCreateAPIView):
    queryset = pin_model.objects.all()
    serializer_class = Pin_modelSerializer

# views.py
from django.http import JsonResponse
from .models import Pin
import json

def store_pin(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        student_number = data.get('studentNumber', None)
        pin = data.get('pin', None)
        if student_number and pin:
            Pin.objects.create(studentNumber=student_number, pin=pin)
            return JsonResponse({'success': True})
    return JsonResponse({'success': False, 'message': 'Invalid data'})


