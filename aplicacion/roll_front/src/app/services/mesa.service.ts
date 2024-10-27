import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  private apiUrl = 'https://a605-38-10-180-1.ngrok-free.app/mesa/';

  constructor(private http: HttpClient) { }
  
  createMesa(mesa: any): Observable<any> {
    return this.http.post(this.apiUrl, mesa);
  }

}
