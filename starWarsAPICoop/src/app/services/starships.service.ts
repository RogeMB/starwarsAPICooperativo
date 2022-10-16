import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { StarshipResult } from '../interfaces/starships';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  constructor(private http: HttpClient) { }

  getStarships(page: number): Observable<StarshipResult>{
    return this.http.get<StarshipResult>(`${environment.apiBaseUrl}/starships?page=${page}`);
  }
}
