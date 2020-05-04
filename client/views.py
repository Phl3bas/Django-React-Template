from django.shortcuts import render

# Create your views here.

print("test")


def index(request):
    return render(request, "client/index.html")
