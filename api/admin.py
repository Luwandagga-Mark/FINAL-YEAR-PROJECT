from django.contrib import admin

# Register your models here.
from .models import *

admin.site.register(Student)
admin.site.register(StudentDetails)
admin.site.register(Services)
admin.site.register(Guardian)
admin.site.register(Pin)
admin.site.register(pin_model)