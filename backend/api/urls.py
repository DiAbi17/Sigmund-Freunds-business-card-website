from django.urls import path
from .views import ConsultationCreateView, ConsultationListView, ConsultationDeleteView

urlpatterns = [
    path('consult/', ConsultationCreateView.as_view(), name='consultation-create'),
    path('consultations/', ConsultationListView.as_view(), name='consultation-list'),
    path('consultations/<int:pk>/', ConsultationDeleteView.as_view(), name='consultation-delete'),
]
