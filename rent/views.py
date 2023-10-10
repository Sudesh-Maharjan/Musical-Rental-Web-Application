from django.shortcuts import render
from django.http import HttpResponse
from .models import Product
from math import ceil

# Create your views here.
def rent(request):
    Products = Product.objects.all()
    categories = Product.objects.values('category').distinct()
    category_products = {}
    for category in categories:
        Products = Product.objects.filter(category = category['category'])
        category_products[category['category']] = Products
    return render(request, 'rent/HomePage_Ashirbad.html', {'Product': Products, 'category_products': category_products})

def secondhand(request):
    return HttpResponse("This is second hand")
def contact(request):
    return HttpResponse("This is contact")
def tracker(request):
    return HttpResponse("This is tracker")
def about(request):
    return render(request, 'rent/about.html')
def search(request):
    return HttpResponse("This is search")
def productView(request):
    return HttpResponse("This is productview")
def checkout(request):
    return HttpResponse("This is checkout")
