from rest_framework import generics
from .models import Component, Booking
from .serializers import ComponentSerializer, BookingSerializer

class ComponentView(generics.ListCreateAPIView):
    queryset = Component.objects.all()
    serializer_class = ComponentSerializer

class BookingView(generics.ListCreateAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer