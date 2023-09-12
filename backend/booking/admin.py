from django.contrib import admin
from .models import Hygienist, Booking

class HygienistAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'qualification', 'description')

class BookingAdmin(admin.ModelAdmin):
    list_display = ('created', 'date', 'start_time', 'end_time')

admin.site.register(Hygienist, HygienistAdmin)
admin.site.register(Booking, BookingAdmin)