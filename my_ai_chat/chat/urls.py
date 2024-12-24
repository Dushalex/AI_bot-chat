from django.urls import path
from . import views

urlpatterns = [
    path('', views.index_view, name='index'),  # Главная страница
    path('chat/', views.chat_view, name='chat'),  # Страница чата
]
