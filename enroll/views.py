from django.shortcuts import render, redirect
from .models import User, Fingerprints, AccessLogs, ServiceAccess, UserAccessRights, SystemSettings
from .forms import UserForm, FingerprintsForm, AccessLogsForm, ServiceAccessForm, UserAccessRightsForm, SystemSettingsForm

# User views
def user_create(request):
    if request.method == 'POST':
        form = UserForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('user_list')
    else:
        form = UserForm()
    return render(request, 'user_form.html', {'form': form})

def user_update(request, pk):
    user = User.objects.get(pk=pk)
    if request.method == 'POST':
        form = UserForm(request.POST, instance=user)
        if form.is_valid():
            form.save()
            return redirect('user_list')
    else:
        form = UserForm(instance=user)
    return render(request, 'user_form.html', {'form': form})

def user_delete(request, pk):
    user = User.objects.get(pk=pk)
    user.delete()
    return redirect('user_list')

def user_list(request):
    users = User.objects.all()
    return render(request, 'user_list.html', {'users': users})

# Fingerprints views
def fingerprints_create(request):
    if request.method == 'POST':
        form = FingerprintsForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('fingerprints_list')
    else:
        form = FingerprintsForm()
    return render(request, 'fingerprints_form.html', {'form': form})

def fingerprints_update(request, pk):
    fingerprints = Fingerprints.objects.get(pk=pk)
    if request.method == 'POST':
        form = FingerprintsForm(request.POST, instance=fingerprints)
        if form.is_valid():
            form.save()
            return redirect('fingerprints_list')
    else:
        form = FingerprintsForm(instance=fingerprints)
    return render(request, 'fingerprints_form.html', {'form': form})

def fingerprints_delete(request, pk):
    fingerprints = Fingerprints.objects.get(pk=pk)
    fingerprints.delete()
    return redirect('fingerprints_list')

def fingerprints_list(request):
    fingerprints = Fingerprints.objects.all()
    return render(request, 'fingerprints_list.html', {'fingerprints': fingerprints})


# AccessLogs views
def accesslogs_create(request):
    if request.method == 'POST':
        form = AccessLogsForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('accesslogs_list')
    else:
        form = AccessLogsForm()
    return render(request, 'accesslogs_form.html', {'form': form})

def accesslogs_update(request, pk):
    accesslogs = AccessLogs.objects.get(pk=pk)
    if request.method == 'POST':
        form = AccessLogsForm(request.POST, instance=accesslogs)
        if form.is_valid():
            form.save()
            return redirect('accesslogs_list')
    else:
        form = AccessLogsForm(instance=accesslogs)
    return render(request, 'accesslogs_form.html', {'form': form})

def accesslogs_delete(request, pk):
    accesslogs = AccessLogs.objects.get(pk=pk)
    accesslogs.delete()
    return redirect('accesslogs_list')

def accesslogs_list(request):
    accesslogs = AccessLogs.objects.all()
    return render(request, 'accesslogs_list.html', {'accesslogs': accesslogs})

# ServiceAccess views
def serviceaccess_create(request):
    if request.method == 'POST':
        form = ServiceAccessForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('serviceaccess_list')
    else:
        form = ServiceAccessForm()
    return render(request, 'serviceaccess_form.html', {'form': form})

def serviceaccess_update(request, pk):
    serviceaccess = ServiceAccess.objects.get(pk=pk)
    if request.method == 'POST':
        form = ServiceAccessForm(request.POST, instance=serviceaccess)
        if form.is_valid():
            form.save()
            return redirect('serviceaccess_list')
    else:
        form = ServiceAccessForm(instance=serviceaccess)
    return render(request, 'serviceaccess_form.html', {'form': form})

def serviceaccess_delete(request, pk):
    serviceaccess = ServiceAccess.objects.get(pk=pk)
    serviceaccess.delete()
    return redirect('serviceaccess_list')

def serviceaccess_list(request):
    serviceaccess = ServiceAccess.objects.all()
    return render(request, 'serviceaccess_list.html', {'serviceaccess': serviceaccess})

# UserAccessRights views
def useraccessrights_create(request):
    if request.method == 'POST':
        form = UserAccessRightsForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('useraccessrights_list')
    else:
        form = UserAccessRightsForm()
    return render(request, 'useraccessrights_form.html', {'form': form})

def useraccessrights_update(request, pk):
    useraccessrights = UserAccessRights.objects.get(pk=pk)
    if request.method == 'POST':
        form = UserAccessRightsForm(request.POST, instance=useraccessrights)
        if form.is_valid():
            form.save()
            return redirect('useraccessrights_list')
    else:
        form = UserAccessRightsForm(instance=useraccessrights)
    return render(request, 'useraccessrights_form.html', {'form': form})

def useraccessrights_delete(request, pk):
    useraccessrights = UserAccessRights.objects.get(pk=pk)
    useraccessrights.delete()
    return redirect('useraccessrights_list')

def useraccessrights_list(request):
    useraccessrights = UserAccessRights.objects.all()
    return render(request, 'useraccessrights_list.html', {'useraccessrights': useraccessrights})

# SystemSettings views
def system_settings_create(request):
    if request.method == 'POST':
        form = SystemSettingsForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('system_settings_list')
    else:
        form = SystemSettingsForm()
    return render(request, 'system_settings_form.html', {'form': form})

def system_settings_update(request, pk):
    system_settings = SystemSettings.objects.get(pk=pk)
    if request.method == 'POST':
        form = SystemSettingsForm(request.POST, instance=system_settings)
        if form.is_valid():
            form.save()
            return redirect('system_settings_list')
    else:
        form = SystemSettingsForm(instance=system_settings)
    return render(request, 'system_settings_form.html', {'form': form})

def system_settings_delete(request, pk):
    system_settings = SystemSettings.objects.get(pk=pk)
    system_settings.delete()
    return redirect('system_settings_list')

def system_settings_list(request):
    system_settings = SystemSettings.objects.all()
    return render(request, 'system_settings_list.html', {'system_settings': system_settings})