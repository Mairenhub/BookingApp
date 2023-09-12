from rest_framework import generics
from .models import Hygienist, Booking
from .serializers import HygienistSerializer, BookingSerializer

class HygienistView(generics.ListCreateAPIView):
    queryset = Hygienist.objects.all()
    serializer_class = HygienistSerializer

class BookingView(generics.ListCreateAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer