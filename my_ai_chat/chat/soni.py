from openai import OpenAI

#client = OpenAI(api_key="sk-bf8cefb858cd486f87396ca82a03fcbc", base_url="https://api.deepseek.com")
client = OpenAI(api_key="sk-JshQXy1kBfNKeDwa5CYD9yOWoLOvr58l", base_url="https://api.proxyapi.ru/openai/v1")

def AI(message):
    
    promt = '' + message #Добавь свой промпт для суммаризации 
    completion = client.chat.completions.create(
        model="gpt-4o-mini",
        temperature=0.3,
        messages=[ {"role": "user", "content": promt}] 
    )
    text = completion.choices[0].message.content
    return text

    
    






















































#{"role": "system", "content": sistpromt},
