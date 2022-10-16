import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Starship, StarshipResult } from '../interfaces/starships';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  constructor(private http: HttpClient) { }

  getStarships(page: number): Observable<StarshipResult>{
    return this.http.get<StarshipResult>(`${environment.apiBaseUrl}/starships?page=${page}`);
  }

  getStarshipById(starship: Starship): Observable<Starship>{
    let id = starship.url.split('/').reverse()[1]
    return this.http.get<Starship>(`${environment.apiBaseUrl}/starships/${id}`)
  }
}
