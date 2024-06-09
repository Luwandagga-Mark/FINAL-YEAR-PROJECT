from django.db import models

# Create your models here.
from django.db import models
from django.dispatch import receiver
from django.db.models import Max
from django.db.models.signals import pre_save
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User


# Create your models here.
class Student(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,null=True)
    surname = models.CharField(max_length=255, default='Mugisha')
    firstname = models.CharField(max_length=255)
    email = models.EmailField(max_length=255, null=True, blank=True)
    telephonenumber = models.CharField(max_length=20, null=True, blank=True)
    gender = models.CharField(max_length=10, choices=[('Male', 'Male'), ('Female', 'Female')], default='Male', help_text="Gender")
    dateofbirth = models.DateField(null=True, blank=True)
    profilepic = models.TextField(null=True, blank=True)

class Guardian(models.Model):
    student = models.OneToOneField(Student, on_delete=models.CASCADE)
    Full_name = models.CharField(max_length=255, default='Mugisha Richard')
    email = models.EmailField(max_length=255, null=True, blank=True)
    telephonenumber = models.CharField(max_length=20, null=True, blank=True)
    relationship = models.CharField(max_length=20, null=True, blank=True)
    address = models.CharField(max_length=255)

class StudentDetails(models.Model):
    student = models.OneToOneField(Student, on_delete=models.CASCADE)
    year_of_entry = models.IntegerField(help_text="Year of entry")
    nationality = models.CharField(max_length=255, null=True, blank=True, help_text='nationality')
    college = models.CharField(max_length=255, choices=[('COCIS','COCIS'), ('COBAMS','COBAMS'), ('CHUS','CHUS'), ('CHS','CHS'), ('CONAS','CONAS'), ('CEDAT','CEDAT'), ('CAES','CAES'), ('CEES','CEES'), ('SOL','SOL')], help_text='Choose your college')
    time_of_study = models.CharField(max_length=10, choices=[('Day', 'Day'), ('Evening', 'Evening')], help_text='Choose time of study')
    address = models.CharField(max_length=255)
    
    # New field to store the student number
    student_number = models.CharField(max_length=255, unique=True, null=True, blank=True, help_text="Student number")
    
    # Define the code mappings
    COLLEGE_CODES = {
        'COCIS': 'A',
        'COBAMS': 'B',
        'CHUS': 'C',
        'CHS': 'D',
        'CONAS': 'E',
        'CEDAT': 'F',
        'CAES': 'G',
        'CEES': 'H',
        'SOL': 'I',
    }
    
    TIME_CODES = {
        'Day': 'D',
        'Evening': 'E',
    }
    
    NATIONALITY_CODES = {
        'Ugandan': 'U',
        'International': 'I',
    }

    def generate_student_number(self):
        """Generate the student number according to the specified format."""
        # Fetch the maximum sequence number currently present across all StudentDetails instances
        max_sequence_number = StudentDetails.objects.all().aggregate(max_sequence=models.Max('student_number__split__1'))['max_sequence']
        
        # Increment the max sequence number by 1 to get the next sequence number
        if max_sequence_number:
            next_sequence_number = int(max_sequence_number) + 1
        else:
            next_sequence_number = 1
        
        # Format the sequence number to be 6 digits long
        sequence_number_formatted = f"{next_sequence_number:06d}"

        # Get the codes for college, time of study, and nationality
        college_code = self.COLLEGE_CODES.get(self.college)
        time_code = self.TIME_CODES.get(self.time_of_study)
        nationality_code = self.NATIONALITY_CODES.get(self.nationality)

        # Create the student number according to the format: year_of_entry-000001-college-time-nationality
        year_of_entry_short = str(self.year_of_entry)[2:]  # Get last 2 digits of the year of entry
        student_number = f"{year_of_entry_short}-{sequence_number_formatted}-{college_code}-{time_code}-{nationality_code}"

        return student_number

# Signal receiver for pre_save event
@receiver(pre_save, sender=StudentDetails)
def pre_save_generate_student_number(sender, instance, **kwargs):
    # Check if the instance does not already have a student number
    if not instance.student_number:
        # Generate the student number
        instance.student_number = instance.generate_student_number()

class Services(models.Model):
    student_details = models.OneToOneField(StudentDetails, on_delete=models.CASCADE)
    medical = models.BooleanField(default=False)
    accomodation = models.BooleanField(default=False)
    banking = models.BooleanField(default=False)
    parking = models.BooleanField(default=False)
    food = models.BooleanField(default=False)
    examination = models.BooleanField(default=False)
    library = models.BooleanField(default=False)
    internet = models.BooleanField(default=False)
    other_transcript = models.BooleanField(default=False, verbose_name='Transcript')
    other = models.CharField(max_length=255, blank=True, help_text='Additional services not listed above')

    def __str__(self):
        return f"Services for {self.student_details.student}"


class Fingerprint(models.Model):
    student_details = models.ForeignKey(User, on_delete=models.CASCADE,null=True)
    fingerprint_data = models.TextField(null=True, blank=True)
    device_name= models.TextField(null=True, blank=True)
    device_model =  models.TextField(null=True, blank=True)
    def __str__(self):
        return f"Fingerprint for {self.student_details.username}"
    

class VerificationCode(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    code = models.CharField(max_length=10)
    created_at = models.DateTimeField(auto_now_add=True)