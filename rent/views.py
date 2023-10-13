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

def contact(request):
    return render(request, 'rent/contact.html')
def tracker(request):
    return render(request, 'rent/tracker.html')
def about(request):
    return render(request, 'rent/about.html')
def search(request):
    return render(request, 'rent/search.html')
def productView(request, myid):
    Products = Product.objects.filter(id =myid)
    return render(request, 'rent/prodView.html', {'product': Products[0]})
def checkout(request):
    return render(request, 'rent/checkout.html')
