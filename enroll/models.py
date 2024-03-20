from django.db import models

# Create your models here.

class User(models.Model):
    #UserID = models.AutoField(primary_key=True, default='0')
    Username = models.CharField(max_length=255, default='Ricky')
    Password = models.CharField(max_length=255)
    UserType = models.CharField(max_length=20, choices=[('Student', 'Student'), ('Staff', 'Staff'), ('Administrator', 'Administrator')], default='Student')
    RegistrationNumber = models.CharField(max_length=255, unique=True, null=True, blank=True)
    FirstName = models.CharField(max_length=255, null=True, blank=True)
    LastName = models.CharField(max_length=255, null=True, blank=True)
    Email = models.EmailField(max_length=255, null=True, blank=True)
    Phone = models.CharField(max_length=20, null=True, blank=True)
    FingerPrintID = models.IntegerField(null=True, blank=True)

class Fingerprints(models.Model):
    FingerPrintID = models.AutoField(primary_key=True)
    UserID = models.ForeignKey(User, on_delete=models.CASCADE)
    FingerPrintData = models.ImageField()

class AccessLogs(models.Model):
    LogID = models.AutoField(primary_key=True)
    UserID = models.ForeignKey(User, on_delete=models.CASCADE)
    AccessDateTime = models.DateTimeField()
    AccessType = models.CharField(max_length=10, choices=[('Login', 'Login'), ('Logout', 'Logout')])
    AccessResult = models.CharField(max_length=10, choices=[('Success', 'Success'), ('Failure', 'Failure')])

class ServiceAccess(models.Model):
    ServiceID = models.AutoField(primary_key=True)
    ServiceName = models.CharField(max_length=255)
    ServiceDescription = models.TextField()

class UserAccessRights(models.Model):
    AccessRightID = models.AutoField(primary_key=True)
    UserID = models.ForeignKey(User, on_delete=models.CASCADE)
    ServiceID = models.ForeignKey(ServiceAccess, on_delete=models.CASCADE)
    AccessLevel = models.CharField(max_length=10, choices=[('Read', 'Read'), ('Write', 'Write'), ('Admin', 'Admin')])

class SystemSettings(models.Model):
    SettingID = models.AutoField(primary_key=True)
    SettingName = models.CharField(max_length=255)
    SettingValue = models.CharField(max_length=255)

