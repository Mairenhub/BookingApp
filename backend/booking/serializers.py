from rest_framework import serializers
from .models import Hygienist, Booking

class HygienistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hygienist
        fields = '__all__'

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'
