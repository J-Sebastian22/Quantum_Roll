from django.core.exceptions import ValidationError
from django.contrib.auth.models import User
from django.db import models

class Mesa(models.Model):
    nombre = models.CharField(max_length=45)
    tematica_choices = [
        ('FANTASIA', 'Fantasía'),
        ('CIENCIA_FICCION', 'Ciencia Ficción'),
        # Agrega otros según sea necesario
    ]
    tematica = models.CharField(max_length=20, choices=tematica_choices)
    descripcion = models.CharField(max_length=450)
    fecha_creacion = models.DateTimeField(auto_now_add=True)

class MesaHasUsuario(models.Model):
    mesa = models.ForeignKey(Mesa, on_delete=models.CASCADE)
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    rol_choices = [
        ('GAMEMASTER', 'Gamemaster'),
        ('JUGADOR', 'Jugador'),
    ]
    rol = models.CharField(max_length=10, choices=rol_choices)
    fecha_rol = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('mesa', 'usuario')

class Personaje(models.Model):
    nombre = models.CharField(max_length=45)
    edad = models.IntegerField()
    altura = models.FloatField()
    apodo = models.CharField(max_length=45, null=True, blank=True)
    nivel = models.IntegerField()
    hp_base = models.IntegerField()
    hp_actuales = models.IntegerField()
    bloqueo = models.IntegerField()
    esquivar = models.IntegerField()
    ataque = models.IntegerField()
    mesa = models.ForeignKey(Mesa, on_delete=models.CASCADE)
    usuario = models.ForeignKey(MesaHasUsuario, on_delete=models.CASCADE)

    def clean(self):
        # Validar que el usuario tenga el rol de JUGADOR
        if self.usuario.rol != 'JUGADOR':
            raise ValidationError('El personaje solo puede ser asignado a un usuario con el rol de JUGADOR.')

    def save(self, *args, **kwargs):
        self.clean()
        super().save(*args, **kwargs)
    
    """ class Meta:
        unique_together = ('mesa', 'usuario') """ #Valida que el usuario solo tenga un PERSONAJE por MESA

class PjConocido(models.Model):
    personaje = models.ForeignKey(Personaje, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=45)
    historia = models.CharField(max_length=250)
    afinidad = models.CharField(max_length=45)

class Atributo(models.Model):
    personaje = models.ForeignKey(Personaje, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=45)
    p_base = models.IntegerField()
    bonificador = models.IntegerField()
    bon_competencia = models.IntegerField()
    bon_equipo = models.IntegerField()
    suma_dado = models.IntegerField()

class Equipamiento(models.Model):
    personaje = models.ForeignKey(Personaje, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=45)
    tipo = models.CharField(max_length=45)
    bonificador = models.IntegerField()

class Habilidad(models.Model):
    personaje = models.ForeignKey(Personaje, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=45)
    nivel = models.IntegerField()
    descripcion = models.CharField(max_length=250)
