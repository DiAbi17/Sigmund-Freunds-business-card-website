from django.contrib import admin

# Register your models here.
from .models import Consultation

@admin.register(Consultation)
class ConsultationAdmin(admin.ModelAdmin):
    list_display= (
        'name',
        'email',
        'message',
        'created_at'
    )