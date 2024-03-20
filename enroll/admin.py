from django.contrib import admin
from .models import User, Fingerprints, AccessLogs, ServiceAccess, UserAccessRights, SystemSettings

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ['Username', 'UserType', 'Email', 'Phone']
    search_fields = ['Username', 'Email']

@admin.register(Fingerprints)
class FingerprintsAdmin(admin.ModelAdmin):
    list_display = ['UserID', 'FingerPrintData']
    search_fields = ['UserID__Username']

@admin.register(AccessLogs)
class AccessLogsAdmin(admin.ModelAdmin):
    list_display = ['UserID', 'AccessDateTime', 'AccessType', 'AccessResult']
    search_fields = ['UserID__Username']

@admin.register(ServiceAccess)
class ServiceAccessAdmin(admin.ModelAdmin):
    list_display = ['ServiceName', 'ServiceDescription']
    search_fields = ['ServiceName']

@admin.register(UserAccessRights)
class UserAccessRightsAdmin(admin.ModelAdmin):
    list_display = ['UserID', 'ServiceID', 'AccessLevel']
    search_fields = ['UserID__Username', 'ServiceID__ServiceName']

@admin.register(SystemSettings)
class SystemSettingsAdmin(admin.ModelAdmin):
    list_display = ['SettingName', 'SettingValue']
    search_fields = ['SettingName']

