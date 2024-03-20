"""crudproject1 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from enroll import views

urlpatterns = [
    path('admin/', admin.site.urls),
    # User URLs
    path('user/create/', views.user_create, name='user_create'),
    path('user/<int:pk>/update/', views.user_update, name='user_update'),
    path('user/<int:pk>/delete/', views.user_delete, name='user_delete'),
    path('user/list/', views.user_list, name='user_list'),

    # Fingerprints URLs
    path('fingerprints/create/', views.fingerprints_create, name='fingerprints_create'),
    path('fingerprints/<int:pk>/update/', views.fingerprints_update, name='fingerprints_update'),
    path('fingerprints/<int:pk>/delete/', views.fingerprints_delete, name='fingerprints_delete'),
    path('fingerprints/list/', views.fingerprints_list, name='fingerprints_list'),

    # AccessLogs URLs
    path('accesslogs/create/', views.accesslogs_create, name='accesslogs_create'),
    path('accesslogs/<int:pk>/update/', views.accesslogs_update, name='accesslogs_update'),
    path('accesslogs/<int:pk>/delete/', views.accesslogs_delete, name='accesslogs_delete'),
    path('accesslogs/list/', views.accesslogs_list, name='accesslogs_list'),

    # ServiceAccess URLs
    path('serviceaccess/create/', views.serviceaccess_create, name='serviceaccess_create'),
    path('serviceaccess/<int:pk>/update/', views.serviceaccess_update, name='serviceaccess_update'),
    path('serviceaccess/<int:pk>/delete/', views.serviceaccess_delete, name='serviceaccess_delete'),
    path('serviceaccess/list/', views.serviceaccess_list, name='serviceaccess_list'),

    # UserAccessRights URLs
    path('useraccessrights/create/', views.useraccessrights_create, name='useraccessrights_create'),
    path('useraccessrights/<int:pk>/update/', views.useraccessrights_update, name='useraccessrights_update'),
    path('useraccessrights/<int:pk>/delete/', views.useraccessrights_delete, name='useraccessrights_delete'),
    path('useraccessrights/list/', views.useraccessrights_list, name='useraccessrights_list'),

    # SystemSettings URLs
    path('system_settings/create/', views.system_settings_create, name='system_settings_create'),
    path('system_settings/<int:pk>/update/', views.system_settings_update, name='system_settings_update'),
    path('system_settings/<int:pk>/delete/', views.system_settings_delete, name='system_settings_delete'),
    path('system_settings/list/', views.system_settings_list, name='system_settings_list'),

]
