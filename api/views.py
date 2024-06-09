from django.shortcuts import render
from django.conf import settings
# Create your views here.
# api/views.py
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics
from .models import *
from .serializers import *
import random
from rest_framework.views import APIView
from rest_framework.response import Response 
from django.core.mail import send_mail, EmailMessage
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view,authentication_classes, permission_classes
import os
from django.core.mail import send_mail
from django.utils.crypto import get_random_string
from . import models
import re
from django.http import HttpResponse
from django.shortcuts import render
from django.contrib.auth.models import User 
import firebase_admin
from firebase_admin import credentials, storage
from firebase_admin import firestore
import uuid
import tempfile
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from django.conf import settings

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JSON_FILE_PATH = os.path.join(BASE_DIR, "stockwise-ce5e6-firebase-adminsdk-x2i0p-dd22cf9517.json")
cred = credentials.Certificate(JSON_FILE_PATH)
try:
 firebase_admin.initialize_app(cred,{
      'storageBucket': 'stockwise-ce5e6.appspot.com'
 })
 db = firestore.client()
 
except Exception as e:
   print(f'{e}')

def upload_file(file_path, item_id=None):
    if item_id is None:
        # Generate a unique item ID if not provided
        item_id = str(uuid.uuid4())
    bucket = storage.bucket() 
    # Define the storage path using the item ID
    blob = bucket.blob(f'images/{item_id}.png')
    
    # Upload the file
    blob.upload_from_filename(file_path, content_type='image/png')
    blob.make_public()
    url = blob.public_url 
    return url

@api_view(['POST','GET'])
@permission_classes([IsAuthenticated])
def registerProfilePic(request):
    uploaded_file = request.FILES['file']
    file_name = f"{uuid.uuid4()}_{uploaded_file.name}"
    print(uploaded_file)
    # Save the uploaded file to a temporary location
    temp_file_path = os.path.join(tempfile.gettempdir(), file_name)
    with open(temp_file_path, 'wb') as temp_file:
        for chunk in uploaded_file.chunks():
            temp_file.write(chunk)

    try:
        # Upload the file to the storage bucket
        url = upload_file(temp_file_path, uploaded_file.name)
        
    finally:
        # Remove the temporary file
        os.remove(temp_file_path)
    print(url)
    stud = Student.objects.filter(user=request.user).order_by('-id').first()
    stud.profilepic = url
    stud.save()
    return Response({'status': 'success', 'url': url})

@api_view(['POST','GET'])
#@permission_classes([IsAuthenticated])
def register(request):
    print(request.data)
    data = request.data
    user = User.objects.create_user(data['studentNumber'], data['email'],data['studentNumber'] )

    # If successful, the user object will be created
    if user:
        stud= models.Student(user=user, surname=data['surname'],
                               firstname =data['firstname'],email=data['email'],telephonenumber=data['telephonenumber'],
                      gender=data['gender'],dateofbirth=data['dateofbirth']         )
        stud.save()
        details = models.StudentDetails(student=stud,
                                        year_of_entry=data['yearOfEntry'],nationality=data['nationality'],college=data['college'],time_of_study=data['shift'],
                                        address=data['college'],student_number=data['studentNumber'])
        details.save()
        print('User created successfully!')
    else:
        print('There was an error creating the user.')
    return Response({'status':'success'})

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def deleteBiometric(request):
    data =request.data
    Fingerprint.objects.filter(device_name=data['name'],device_model=data['model']).delete()
    return Response()

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getProfile(request):
    user = request.user
    student = Student.objects.get(user =user)
    profiledata = StudentSerializer(student)
    fingerintdevices= Fingerprint.objects.filter(student_details=request.user)
   
    biodevice = []
    unique_devices = set()
    for x in fingerintdevices:
        devName = f'{x.device_name} {x.device_model}'
        if devName not in unique_devices:
            unique_devices.add(devName)
            biodevice.append({
                'device': devName,
                'id': x.id,
                'model':x.device_model,
                'name':x.device_name
            })    
    username = request.user.username        
    return Response({'data':profiledata.data,'biometric':biodevice , 'studno':username})
@api_view(['POST'])
def signINWithOTp(request):
    data = request.data
    print(data)
    email = data['email']
    studno=data['studentNumber']
    if User.objects.filter(username=studno,email=email).exists():
        number = random.randrange(10000, 99999)
        use = User.objects.get(username=studno,email=email)
        n = VerificationCode(code=number, user=use)
        n.save()
        subject = "Makerere University"
        message = str(number)  # Convert number to string for email body

        # Assuming settings.EMAIL_HOST_USER contains your email address
        from_email = settings.EMAIL_HOST_USER

        recipient_list = [email]

        send_mail(subject, message, from_email, recipient_list, fail_silently=False)
        print(number)
        return Response({'status':'success'})
    
    


@api_view(['POST'])
def verifyOTp(request):
     #{'studentNumber': 'Ffff', 'otp': '255555'}
     data = request.data
     username = data['studentNumber']
     user = User.objects.get(username= username)
     if VerificationCode.objects.filter(user=user,code=data['otp']).exists():
        print(data)
        #VerificationCode.objects.filter(user=user,code=data['otp']).delete()
        return Response({'username':username,'password':username})


@api_view(['POST'])
def getStudentNo(request):
    print(request.data)
    data=request.data['year']
    userModel = User.objects.filter(username__startswith=data).order_by('-id').first()
    test = 1
    if userModel:
        lastNo = userModel.username
        match = re.search(r'-(\d+)-', lastNo)
        padded_number  = int(match.group(1))+1
        test = padded_number
    number = str(test).zfill(5)
    print(number)
    year1 = request.data['year']
    collegeCode = request.data['collegeCode']
    timecode =request.data['timeCode']
    nation = request.data['nationalityCode']
    studNo = f'{year1}-{number}-{collegeCode}-{timecode}-{nation}'    
    print(studNo)
    return Response({'number':f'{studNo}'})


@api_view(['POST'])
def generateUniqueID(request):
    data = request.data
    print(data)
    id = None
    stud_id =User.objects.get(usernam=data['studNo'])
    while True:
        random_string = get_random_string(length=16)
        print(random_string)
        does_not_exist = not Fingerprint.objects.filter( fingerprint_data=random_string).exists()
        if does_not_exist:
            id = random_string
            break
        else:
            continue   
    n = Fingerprint(device_model=data['model'],device_name=data['name'],student_details=stud_id, fingerprint_data=id)    
    n.save()
    return Response({'number':f'{id}'})


@api_view(['POST'])
def verifyBiometric(request):
    data = request.data['id']
    print(data)
    if Fingerprint.objects.filter( fingerprint_data=data).exists():
      user = Fingerprint.objects.get(fingerprint_data=data).student_details.username
      return Response({'staus':f'success','user':user})
    else:
      return Response({'staus':f'invalid'})   
    
@api_view(['POST'])
def loginBiometric(request):
    data = request.data['id']
    print(data)
    user = Fingerprint.objects.get(fingerprint_data=data).student_details
    username = user.username
    return Response({'username':username,'password':username})     