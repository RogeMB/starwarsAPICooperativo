import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SpecieData } from 'src/app/interfaces/species';

@Component({
  selector: 'app-species-dialog',
  templateUrl: './species-dialog.component.html',
  styleUrls: ['./species-dialog.component.css']
})
export class SpeciesDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: SpecieData) { }

  ngOnInit(): void {
  }

}
