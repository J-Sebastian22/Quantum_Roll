import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private apiUrl = 'http://127.0.0.1:8000/'

  constructor(private http: HttpClient) { }

  verifyCharacterId(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}personaje/${id}`);
  }

  updateCharacter(id: string, characterData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}personaje/${id}/`, characterData, );
  }


}
