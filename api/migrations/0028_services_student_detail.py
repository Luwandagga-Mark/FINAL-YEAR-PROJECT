# Generated by Django 5.0.6 on 2024-06-07 06:10

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0027_remove_services_other'),
    ]

    operations = [
        migrations.AddField(
            model_name='services',
            name='student_detail',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.studentdetails'),
        ),
    ]
