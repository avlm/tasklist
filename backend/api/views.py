from rest_framework import generics
from rest_framework.response import Response
from .models import Task
from .serializers import TaskSerializer
from .enum import StatusEnum


class ListTask(generics.ListCreateAPIView):
    queryset = Task.objects.exclude(status=StatusEnum.REMOVED)
    serializer_class = TaskSerializer


class DetailTask(generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
