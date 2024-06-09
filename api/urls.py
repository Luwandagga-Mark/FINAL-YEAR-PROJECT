# api/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('students_register',views.register , name='student-register'),
  path('students_profile',views.getProfile , name='student-profile'),
   path('students_profilepic',views.registerProfilePic , name='student-profile pic'),
   path('otpsignin',views.signINWithOTp,name='sign in with otp'),
   path('otpverify',views.verifyOTp,name='verify otp'),
   path('getStdNo',views.getStudentNo,name='stud no'),
    path('genID',views.generateUniqueID,name='generate id'),
     path('verifyID',views.verifyBiometric,name='verify id'),
       path('loginBiometric',views.loginBiometric,name='login id'),
         path('deleteBiometric',views.deleteBiometric,name='delete id'),
]
