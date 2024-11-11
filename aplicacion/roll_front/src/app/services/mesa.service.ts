import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  private apiUrl = 'http://127.0.0.1:8000/mesa/';

  constructor(private http: HttpClient) { }
  
  createMesa(mesa: any): Observable<any> {
    return this.http.post(this.apiUrl, mesa);
  }

  getMesas(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  
  getMesaById(mesaId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${mesaId}/`);
  }

  getMesasGamemaster(userId: number) {
    return this.http.get<any[]>(`http://127.0.0.1:8000/mesas/gamemaster/${userId}`);
    
  }

  createMesaRol(mesa: any): Observable<any> {
    mesa.user_id = localStorage.getItem('userId'); // user_id guardado en el localStorage
    console.log("Datos enviados:", mesa); // Verifica que user_id esté presente
    return this.http.post<any>(`http://127.0.0.1:8000/mesas/create/`, mesa);
  }

  crearPersonajeBasico(mesaId: number) {
    return this.http.post(`http://127.0.0.1:8000/mesas/${mesaId}/crear_personaje_basico/`, {});
  }

  getPersonajes(mesaId: number) {
    return this.http.get<any[]>(`http://127.0.0.1:8000/mesas/${mesaId}/personajes/`);
  }

}
