from django.shortcuts import render
from django.http import JsonResponse


# Представление для главной страницы
def index_view(request):
    return render(request, 'index.html')


# Представление для страницы чата
def chat_view(request):
    if request.method == 'POST':
        file = request.FILES.get('file')
        user_message = request.POST.get('message')
        if file:
            # Сохранение загруженного файла
            with open("uploaded_file", "wb") as f:
                for chunk in file.chunks():
                    f.write(chunk)
            return JsonResponse({"response": "Файл обработан успешно"})
        elif user_message:
            # Обработка текстового сообщения
            response = f"Вы отправили текст: {user_message}"
            return JsonResponse({"response": response})
    return render(request, 'chat.html')  # Отображение страницы чата
