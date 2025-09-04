from django.shortcuts import render
from rest_framework.decorators import api_view
from .serializers import ContactSerializer
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

@api_view(['POST'])
def contact_details(request):
    serializer = ContactSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "ok"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    