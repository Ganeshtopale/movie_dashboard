from django.db import models

# Create your models here.
from django.db import models

class Movie(models.Model):
    title = models.CharField(max_length=255)
    year = models.IntegerField()
    genre = models.CharField(max_length=255)
    rating = models.FloatField()
    one_line = models.TextField()
    stars = models.CharField(max_length=255)
    votes = models.IntegerField()
    runtime = models.IntegerField()
    gross = models.FloatField()

