import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { PlanetData } from "src/app/interfaces/planets";


@Component({
  selector: 'app-planets-dialog',
  templateUrl: './planets-dialog.component.html',
  styleUrls: ['./planets-dialog.component.css']
})
export class PlanetsDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: PlanetData) { }

  ngOnInit(): void {
  }
}
