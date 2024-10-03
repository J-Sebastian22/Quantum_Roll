import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://eaae-152-200-174-234.ngrok-free.app/';

  constructor(private http: HttpClient) { }


  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}register/`, userData);
  }

  login(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}login/`, userData)
  };
}
