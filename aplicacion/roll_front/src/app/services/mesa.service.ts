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

}
