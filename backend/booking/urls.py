from django.urls import path
from .views import HygienistView, BookingView

urlpatterns = [
    path('hygienists/', HygienistView.as_view(), name='hygienist-list-view'),
    path('booking/', BookingView.as_view(), name='booking-list-view'),
]