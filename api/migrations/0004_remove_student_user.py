# Generated by Django 5.0.6 on 2024-06-06 08:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_student_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='student',
            name='user',
        ),
    ]
