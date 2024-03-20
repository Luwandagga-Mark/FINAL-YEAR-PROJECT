from django import forms
from .models import User, Fingerprints, AccessLogs, ServiceAccess, UserAccessRights, SystemSettings

class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = '__all__'
        widgets = {
            'Username': forms.TextInput(attrs={'class': 'form-control'}),
            'Password': forms.TextInput(attrs={'class': 'form-control'}),
            'UserType': forms.Select(attrs={'class': 'form-control'}),
            'RegistrationNumber': forms.TextInput(attrs={'class': 'form-control'}),
            'FirstName': forms.TextInput(attrs={'class': 'form-control'}),
            'LastName': forms.TextInput(attrs={'class': 'form-control'}),
            'Email': forms.EmailInput(attrs={'class': 'form-control'}),
            'Phone': forms.TextInput(attrs={'class': 'form-control'}),
            'FingerPrintID': forms.TextInput(attrs={'class': 'form-control'}),
        }

class FingerprintsForm(forms.ModelForm):
    class Meta:
        model = Fingerprints
        fields = '__all__'
        widgets = {
            'UserID': forms.Select(attrs={'class': 'form-control'}),
            'FingerPrintData': forms.FileInput(attrs={'class': 'form-control'}),
        }

class AccessLogsForm(forms.ModelForm):
    class Meta:
        model = AccessLogs
        fields = '__all__'
        widgets = {
            'UserID': forms.Select(attrs={'class': 'form-control'}),
            'AccessDateTime': forms.DateTimeInput(attrs={'class': 'form-control'}),
            'AccessType': forms.Select(attrs={'class': 'form-control'}),
            'AccessResult': forms.Select(attrs={'class': 'form-control'}),
        }

class ServiceAccessForm(forms.ModelForm):
    class Meta:
        model = ServiceAccess
        fields = '__all__'
        widgets = {
            'ServiceName': forms.TextInput(attrs={'class': 'form-control'}),
            'ServiceDescription': forms.Textarea(attrs={'class': 'form-control'}),
        }

class UserAccessRightsForm(forms.ModelForm):
    class Meta:
        model = UserAccessRights
        fields = '__all__'
        widgets = {
            'UserID': forms.Select(attrs={'class': 'form-control'}),
            'ServiceID': forms.Select(attrs={'class': 'form-control'}),
            'AccessLevel': forms.Select(attrs={'class': 'form-control'}),
        }

class SystemSettingsForm(forms.ModelForm):
    class Meta:
        model = SystemSettings
        fields = '__all__'
        widgets = {
            'SettingName': forms.TextInput(attrs={'class': 'form-control'}),
            'SettingValue': forms.TextInput(attrs={'class': 'form-control'}),
        }

