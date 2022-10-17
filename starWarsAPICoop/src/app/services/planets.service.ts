import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Planet, PlanetResult } from '../interfaces/planets';

@Injectable({
  providedIn: 'root',
})
export class PlanetsService {
  constructor(private http: HttpClient) {}

  getPlanet(page: number): Observable<PlanetResult> {
    return this.http.get<PlanetResult>(
      `${environment.apiBaseUrl}/planets?page=${page}`
    );
  }

  getPlanetById(planet: Planet): Observable<Planet> {
    let id = planet.url.split('/').reverse()[1];
    return this.http.get<Planet>(`${environment.apiBaseUrl}/planets/${id}`);
  }
}