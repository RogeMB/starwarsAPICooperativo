import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VehicleData } from 'src/app/interfaces/vehicles';

@Component({
  selector: 'app-vehicles-dialog',
  templateUrl: './vehicles-dialog.component.html',
  styleUrls: ['./vehicles-dialog.component.css']
})
export class VehiclesDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: VehicleData) { }

  ngOnInit(): void {
  }

}
