from django.db import models
from django.utils import timezone
import jwt


class Users(models.Model):
    username = models.CharField(max_length=100, default='')
    phoneNumber = models.CharField(max_length=15, default='')
    password = models.CharField(max_length=100, default='')
    created = models.DateTimeField(default=timezone.now)
    updated = models.DateTimeField(auto_now=True)


    def save(self, *args, **kwargs):
     self.updated = timezone.now()
     return super(Users, self).save(*args, **kwargs)
    
    def check_password(self, password):
       return self.password==password

    class Meta:
     """
     Meta class for Users
     """
     verbose_name_plural = "Users"
