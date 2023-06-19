from django.urls import path
from .views import Signup,Login

urlpatterns = [
    path('login', Login),
    path('signup', Signup)

]