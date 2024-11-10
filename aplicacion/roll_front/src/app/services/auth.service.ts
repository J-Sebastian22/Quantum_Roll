import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://127.0.0.1:8000/'
  constructor(private http: HttpClient) { }


  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}register/`, userData);
  }

  login(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}login/`, userData).pipe(
      tap(response => {
        // Accede al 'id' dentro de 'username' y guárdalo en el localStorage
        localStorage.setItem('userId', response.username.id); 
        console.log('userId saved:', localStorage.getItem('userId'));  
      })
    );
  }
  
}
