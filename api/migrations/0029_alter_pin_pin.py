# Generated by Django 5.0.6 on 2024-06-07 07:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0028_services_student_detail'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pin',
            name='pin',
            field=models.CharField(blank=True, max_length=6, null=True),
        ),
    ]
