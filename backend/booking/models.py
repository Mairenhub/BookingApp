from django.db import models

class Hygienist(models.Model):
    price = models.FloatField(blank=True, default=0)
    name = models.CharField(blank=True, max_length=100)
    qualification = models.CharField(blank=True, max_length=100)
    description = models.CharField(blank=True, max_length=500)

class Booking(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    date = models.DateTimeField(blank=True)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()


    