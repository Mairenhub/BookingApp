from django.urls import path
from .views import ComponentView, BookingView

urlpatterns = [
    path('component/', ComponentView.as_view(), name='component-list-view'),
    path('booking/', BookingView.as_view(), name='booking-list-view'),
]