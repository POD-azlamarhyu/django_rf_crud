from django.shortcuts import render
from django.contrib.auth import authenticate
from django.db import transaction
from django.http import HttpResponse, Http404
from rest_framework import authentication, permissions, generics
from rest_framework_jwt.settings import api_settings
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from .serializer import RegisterSerializer
from .models import Accounts, AccountManager
# Create your views here.

class UserRegister(APIView):
    
    def post(self,request_data,format=None):
        serializer = RegisterSerializer(data=request_data.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

