from django.shortcuts import render
from .serializer import UserSerializer
from rest_framework.decorators import api_view
from .models import Users
from rest_framework.response import Response
from rest_framework import status
from django.db import Error

@api_view(('GET','POST'))
def Signup(request):
     if request.method =='POST':
         data={}
         phoneNumber = request.data.get('phoneNumber')
         username = request.data.get('username')
         if Users.objects.filter(phoneNumber=phoneNumber).exists() :
          return Response({"contactNo": "contactNo already registered"}, status=status.HTTP_400_BAD_REQUEST)
         if Users.objects.filter(username=username).exists() :
          return Response({"username": "username already exist"}, status=status.HTTP_400_BAD_REQUEST)
         
         try: 
       
           data = { "password" : request.data.get("password"),
            "phoneNumber": request.data.get("phoneNumber"),"username":request.data.get('username')}
           
           
           db_entry = UserSerializer(data=data)          
           db_entry.is_valid(raise_exception=True)
      
           db_entry.save()
           return Response(data={"success":"data submitted"}, status=status.HTTP_200_OK) 
        
         except Error as e:
           print(e)
           return Response({"Faliure": "failure"}, status=status.HTTP_400_BAD_REQUEST)
       
@api_view(['POST'])
def Login(request):
   username = request.data.get('username')
   password = request.data.get('password')
  

   try:
                
     user = Users.objects.filter(username=username).first()
     if user and user.check_password(password):
                return Response({'success': 'User login successful'}, status=status.HTTP_200_OK)
     
     return Response({'failure': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
   except:
        return Response({'failure': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)