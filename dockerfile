FROM python:3.10

WORKDIR /app

# Copiar todos los archivos de la raíz del proyecto y la carpeta 'API_Quantum_Roll' al contenedor
COPY . /app

# Instalar las dependencias
RUN pip install --no-cache-dir -r /app/requirements.txt

# Ejecutar el servidor de Django
CMD ["python", "/app/aplicacion/API_Quantum_Roll/manage.py", "runserver", "0.0.0.0:8000"]
