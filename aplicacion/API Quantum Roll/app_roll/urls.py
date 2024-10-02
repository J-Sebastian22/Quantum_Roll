from django.urls import path, include,re_path
from rest_framework import routers
from app_roll import views

router = routers.DefaultRouter()

router.register(r'mesa',views.MesaViewSet)
router.register(r'rol',views.MesaHasUsuarioViewSet)
router.register(r'personaje',views.PersonajeViewSet)
router.register(r'pjconocido',views.PjConocidoViewSet)
router.register(r'atributo',views.AtributoViewSet)
router.register(r'equipamiento',views.EquipamientoViewSet)
router.register(r'habilidade',views.HabilidadViewSet)




urlpatterns = [
    path('', include(router.urls)),
    re_path('login',views.login),
    re_path('register',views.register),
    re_path('profile',views.profile)
]
