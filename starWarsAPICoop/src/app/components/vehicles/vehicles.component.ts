import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Vehicle } from 'src/app/interfaces/vehicles';
import { VehiclesService } from 'src/app/services/vehicles.service';
import { VehiclesDialogComponent } from './vehicles-dialog/vehicles-dialog.component';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicleList: Vehicle[]=[];
  pages: number = 0;
  vehicleSelected: Vehicle | undefined;

  constructor(private vehicleService: VehiclesService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getVehiclePage(1);
  }

  getVehiclePage(id: number){
    this.vehicleService.getVehicles(id).subscribe(resp => {
      this.vehicleList = resp.results;
      this.pages = Math.ceil(resp.count / 10);
    });
  }

  getPhotoUrl(vehicle: Vehicle){

    let id = vehicle.url.split('/').reverse()[1];
    return `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`
  }

  errorPhoto(){
    return 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png'
  }

  counter(){
    return new Array(this.pages);
  }

  showVehicleInfo(vehicle: Vehicle){
    this.vehicleService.getVehicleById(vehicle).subscribe(response =>{
      this.vehicleSelected = response;

      this.dialog.open(VehiclesDialogComponent, {
        width: '250px',
        enterAnimationDuration: '3000ms',
        exitAnimationDuration: '1500ms',
        data:{
          vehicleInfo: this.vehicleSelected
        }
      })
    })
  }
}
