from django.urls import path
from .import views
urlpatterns = [
    path("", views.rent, name='RentHome'),
    path('second-hand', views.secondhand, name='secondhand'),
    path('contact', views.contact, name='ContactUs'),
    path('tracker', views.tracker, name='TrackingStatus'),
    path('about', views.about, name='About'),
    path('search', views.search, name='Search'),
    path('productview', views.productView, name='Productview'),
    path('checkout', views.checkout, name='Checkout'),
]
