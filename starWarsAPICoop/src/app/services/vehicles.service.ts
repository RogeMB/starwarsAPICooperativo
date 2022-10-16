import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Vehicle, VehicleResult } from '../interfaces/vehicles';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private http: HttpClient) { }

  getVehicles(page: number): Observable<VehicleResult> {

    return this.http.get<VehicleResult>(`${environment.apiBaseUrl}/vehicles?page=${page}`);
  }

  getVehicleById(vehicle: Vehicle): Observable<Vehicle>{
    let id = vehicle.url.split('/').reverse()[1]
    return this.http.get<Vehicle>(`${environment.apiBaseUrl}/vehicles/${id}`)
  }
}
