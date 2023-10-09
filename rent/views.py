from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def rent(request):
    return render(request, 'rent/HomePage_Ashirbad.html')

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
