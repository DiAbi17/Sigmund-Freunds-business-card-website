# 🧠 Сайт-визитка Зигмунда Фрейда

Информационный сайт о жизни, трудах и вкладе Зигмунда Фрейда — основателя психоанализа. Сайт содержит фронтенд и бэкенд части, позволяет отправлять заявки на консультацию и администрировать их через Django.

---

## 📌 Назначение

Проект предназначен для:

- презентации информации о З. Фрейде,
- демонстрации UI/UX-дизайна и современного фронтенда,
- приёма заявок от пользователей через API,
- администрирования и анализа входящих заявок,
- командной разработки по ролям: от менеджера до DevOps.

---

## ⚙️ Технологический стек

### 🔧 Backend
- **Язык**: Python 3.11
- **Фреймворк**: Django 5.2
- **API**: Django REST Framework, drf-spectacular
- **Тестирование**: Pytest + pytest-django
- **Контейнеризация**: Docker, Docker Compose

### 🎨 Frontend
- **React**: с компонентной архитектурой
- **Стилизация**: CSS
- **Маршрутизация**: React Router

### 🧱 Инфраструктура
- **Nginx**: проксирование и статика
- **Docker Compose**: сборка frontend + backend + nginx

---

## 🚀 Быстрый запуск

### Клонирование и установка

```bash
git clone https://github.com/DiAbi17/Sigmund-Freunds-business-card-website.git
cd Sigmund-Freunds-business-card-website
```

### Настройка виртуального окружения
```bash
python3 -m venv venv
source venv/bin/activate  # или venv\Scripts\activate для Windows
pip install -r requirements.txt
```
### Запуск в Docker
```bash
docker-compose up --build
```

## 📁 Структура проекта
```text

├── backend/
│   ├── api/
│   │   ├── models.py          # Модель Consultation
│   │   ├── views.py           # Обработка API-запросов
│   │   ├── serializers.py     # DRF-сериализаторы
│   │   ├── urls.py            # /api/consult/, /api/consultations/
│   │   └── test/              # Тесты для API
│   ├── backend/
│   │   ├── settings.py
│   │   ├── urls.py            # Админка и API
│   ├── db.sqlite3
│   └── manage.py
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── App.js
│   │   ├── api.js
│   │   └── index.js
│   ├── public/index.html
│   └── package.json
│
├── nginx/
│   └── nginx.conf
│
├── docker-compose.yml
├── Dockerfile
├── README.md
```
## 🔌 Основные эндпоинты

Метод  |	Путь                 |	Описание
------ |-------------------------|----------
POST   |/api/consult/            |	Отправка заявки на консультацию
GET    |/api/consultations/      |	Получение всех заявок
DELETE |/api/consultations/{id}/ |	Удаление заявки по ID
GET    |/admin/                  |	Панель администратора Django

### Пример запроса для ```POST /api/consult/```:

```json
{
  "name": "Анна",
  "email": "anna@example.com",
  "message": "Хочу консультацию"
}
```
## 🧪 Тестирование
### Для тестирование перейдите в корневой каталог и введите:

```bash
pytest
```
### Для тестирование APi эндпоинтов используйте `Postman`, для этого нужно:

- Открыть приложение Postman
- Импортировать файл `postman_collection.json` из директории `backend\`
- Запустить тесты
 

## 👥 Команда  проекта
Имя	|Роль
----|----
Абидова Диана |	Заказчик, менеджер проекта
Дарья Лузан	|Технический писатель
Дарья Макрушина |	UX/UI дизайнер
Екатерина Гуцалюк |	Верстальщик, программист, тестировщик, DevOps-администратор

## 🧠 Лицензия
Проект разработан в учебных целях. Вся информация о Зигмунде Фрейде взята из открытых источников.

📬 Контакты
Связь с командой: freud.team@example.com