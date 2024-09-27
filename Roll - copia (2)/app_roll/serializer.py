from rest_framework import serializers
from .models import Mesa, MesaHasUsuario, Personaje, PjConocido, Atributo, Equipamiento, Habilidad
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields= ['id', 'username', 'email', 'password']

class MesaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mesa
        fields = '__all__'

class MesaHasUsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = MesaHasUsuario
        fields = '__all__'

class PersonajeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Personaje
        fields = '__all__'

class PjConocidoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PjConocido
        fields = '__all__'

class AtributoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Atributo
        fields = '__all__'

class EquipamientoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Equipamiento
        fields = '__all__'

class HabilidadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Habilidad
        fields = '__all__'
        