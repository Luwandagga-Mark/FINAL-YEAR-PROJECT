# api/serializers.py

from rest_framework import serializers
from .models import Student, Guardian, StudentDetails, Services, Pin, pin_model

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'

class GuardianSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guardian
        fields = '__all__'

class StudentDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentDetails
        fields = '__all__'

class ServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Services
        fields = '__all__'

class PinSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pin
        fields = '__all__'

class Pin_modelSerializer(serializers.ModelSerializer):
    class Meta:
        model = pin_model
        fields = '__all__'


