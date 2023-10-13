from django.urls import path
from .import views
from django.conf.urls.static import static
from django.conf import settings
urlpatterns = [
    path("", views.rent, name='RentHome'),
    path('contact', views.contact, name='ContactUs'),
    path('tracker', views.tracker, name='TrackingStatus'),
    path('about', views.about, name='About'),
    path('search', views.search, name='Search'),
    path('productview/<int:myid>', views.productView, name='ProductView'),
    path('checkout', views.checkout, name='Checkout'),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
