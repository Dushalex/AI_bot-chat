from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.shortcuts import render, redirect

from .forms import RegistrationForm, LoginForm


def home(request):
    return render(request, 'home.html')

