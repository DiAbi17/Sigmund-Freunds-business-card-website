from rest_framework.generics import CreateAPIView, ListAPIView, DestroyAPIView
from rest_framework.response import Response
from rest_framework import status
from .models import Consultation
from .serializers import ConsultationSerializer


# POST /api/consult/ — теперь через CreateAPIView (автоматическая обработка сериализатора и документации)
class ConsultationCreateView(CreateAPIView):
    queryset = Consultation.objects.all()
    serializer_class = ConsultationSerializer

    # (не обязательно переопределять, только если нужен кастомный ответ)
    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        return Response({"status": "success", "data": response.data}, status=status.HTTP_201_CREATED)


# GET /api/consultations/
class ConsultationListView(ListAPIView):
    queryset = Consultation.objects.all().order_by('-created_at')
    serializer_class = ConsultationSerializer


# DELETE /api/consultations/<pk>/
class ConsultationDeleteView(DestroyAPIView):
    queryset = Consultation.objects.all()
    serializer_class = ConsultationSerializer

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response({"status": "deleted"}, status=status.HTTP_200_OK)
