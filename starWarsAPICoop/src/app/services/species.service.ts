import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Specie, SpeciesResult } from '../interfaces/species';


@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(private http: HttpClient) { }

  getSpecies(page: number): Observable<SpeciesResult>{
    return this.http.get<SpeciesResult>(`${environment.apiBaseUrl}/species?page=${page}`)
  }

  getSpeciesList(): Observable<SpeciesResult>{
    return this.http.get<SpeciesResult>(`${environment.apiBaseUrl}/species`)
  }

  getSpecieById(specie: Specie): Observable<SpeciesResult>{
    let id = specie.url.split('/').reverse()[1]
    return this.http.get<SpeciesResult>(`${environment.apiBaseUrl}/species/${id}`)
  }
  
}
