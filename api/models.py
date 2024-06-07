from django.db import models

# Create your models here.
from django.db import models
from django.dispatch import receiver
from django.db.models import Max
from django.db.models.signals import pre_save
from django.contrib.auth import get_user_model


# Create your models here.
class Student(models.Model):
    #user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE,null=True)
    surname = models.CharField(max_length=255, default='Mugisha')
    firstname = models.CharField(max_length=255, null=True, blank=True)
    email = models.EmailField(max_length=255, null=True, blank=True)
    telephonenumber = models.CharField(max_length=20, null=True, blank=True)
    gender = models.CharField(max_length=10, choices=[('Male', 'Male'), ('Female', 'Female')], default='Male', help_text="Gender")
    dateofbirth = models.DateField(null=True, blank=True)

class Guardian(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE, null=True, blank=True)
    Full_name = models.CharField(max_length=255, default='Mugisha Richard')
    email = models.EmailField(max_length=255, null=True, blank=True, unique=True )
    telephonenumber = models.CharField(max_length=20, null=True, blank=True)
    relationship = models.CharField(max_length=20, null=True, blank=True)
    address = models.CharField(max_length=255)

class StudentDetails(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE, null=True, blank=True)
    yearOfEntry = models.IntegerField(help_text="Year of entry")
    nationality = models.CharField(max_length=255, null=True, blank=True, help_text='nationality')
    college = models.CharField(max_length=255, choices=[('COCIS','COCIS'), ('COBAMS','COBAMS'), ('CHUS','CHUS'), ('CHS','CHS'), ('CONAS','CONAS'), ('CEDAT','CEDAT'), ('CAES','CAES'), ('CEES','CEES'), ('SOL','SOL')], help_text='Choose your college')
    course = models.CharField(max_length=255, null=True, blank=True, help_text='Course'),
    time_of_study = models.CharField(max_length=10, choices=[('Day', 'Day'), ('Evening', 'Evening')], help_text='Choose time of study'),
    nationalIdNumber = models.CharField(max_length=20, null=True, blank=True, help_text='National ID number'),
    passportNumber = models.CharField(max_length=20, null=True, blank=True, help_text='National ID number'),
    studentNumber = models.CharField(max_length=50, null=True, blank=True, unique=True, help_text='Student number')


class Services(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE, null=True, blank=True)
    student_detail = models.ForeignKey(StudentDetails, on_delete=models.CASCADE, null=True, blank=True)
    medical = models.BooleanField(default=False)
    accomodation = models.BooleanField(default=False)
    banking = models.BooleanField(default=False)
    parking = models.BooleanField(default=False)
    food = models.BooleanField(default=False)
    examination = models.BooleanField(default=False)
    library = models.BooleanField(default=False)
    internet = models.BooleanField(default=False)
    other_transcript = models.BooleanField(default=False, verbose_name='Transcript')
    

class Pin(models.Model):
    registrationNumber = models.CharField(max_length=50, null=True, blank=True, unique=True, help_text='Student number')


class pin_model(models.Model):
    studentNumber = models.CharField(max_length=50, null=True, blank=True, help_text='Student number')
    pin_number= models.CharField(max_length=6, null=True, blank=True)




