import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { VehicleResult } from '../interfaces/vehicles';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private http: HttpClient) { }

  getVehicles(page: number): Observable<VehicleResult> {

    return this.http.get<VehicleResult>(`${environment.apiBaseUrl}/vehicles?page=${page}`);
  }
}
