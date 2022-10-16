import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character, CharacterResult } from '../interfaces/characters';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharacters(page: number): Observable<CharacterResult>{
    return this.http.get<CharacterResult>(`${environment.apiBaseUrl}/people?page=${page}`);
  }

  public getCharacterById(character: Character): Observable<Character> {
    let id = character.url.split('/').reverse()[1];
    return this.http.get<Character>(`${environment.apiBaseUrl}/people/${id}`)
  }
}
