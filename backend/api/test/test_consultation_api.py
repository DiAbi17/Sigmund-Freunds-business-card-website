import pytest
from rest_framework.test import APIClient
from api.models import Consultation

@pytest.mark.django_db
def test_valid_consultation_submission_and_deletion():
    client = APIClient()
    data = {
        "name": "Иван",
        "email": "ivan@example.com",
        "message": "Хочу консультацию"
    }

    # 1. Создание
    response = client.post("/api/consult/", data, format='json')
    assert response.status_code == 201
    assert response.data["status"] == "success"
    created = response.data["data"]
    assert created["email"] == data["email"]
    assert created["name"] == data["name"]
    print("POST-запрос выполнен успешно.")

    # 2. Проверка в базе
    consultation_id = created["id"]
    consultation = Consultation.objects.get(id=consultation_id)
    assert consultation.email == data["email"]
    print(f"Объект создан в базе: ID={consultation.id}, Email={consultation.email}")

    # 3. Удаление
    del_response = client.delete(f"/api/consultations/{consultation_id}/")
    assert del_response.status_code == 200
    assert del_response.data["status"] == "deleted"
    print(f"Объект ID={consultation_id} удалён.")

    # 4. Проверка удаления
    assert not Consultation.objects.filter(id=consultation_id).exists()
    print("Проверка удаления пройдена — объект отсутствует в базе.")


@pytest.mark.django_db
def test_invalid_consultation_submission():
    client = APIClient()
    data = {
        "name": "",
        "email": "неправильный email",
        "message": ""
    }

    response = client.post("/api/consult/", data, format='json')
    assert response.status_code == 400
    print("Некорректная форма правильно не прошла валидацию.")

    # Вывод ошибок
    errors = response.data
    for field, messages in errors.items():
        print(f"🔍 Ошибка в поле '{field}': {messages}")
