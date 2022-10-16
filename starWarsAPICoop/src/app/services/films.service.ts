import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Film, FilmResult } from '../interfaces/films';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  constructor(private http: HttpClient) {}

  getFilms(page: number): Observable<FilmResult> {
    return this.http.get<FilmResult>(
      `${environment.apiBaseUrl}/films?page=${page}`
    );
  }

  getFilmById(film: Film): Observable<Film> {
    let id = film.url.split('/').reverse()[1];
    return this.http.get<Film>(`${environment.apiBaseUrl}/films/${id}`);
  }
}
