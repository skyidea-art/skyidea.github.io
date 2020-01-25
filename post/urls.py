from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'', views.index, name='index')
  
]

# ^ <- this symbol is start with something else
# $ <- this symbol is something to end with