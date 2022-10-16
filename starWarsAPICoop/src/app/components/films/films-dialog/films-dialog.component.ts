import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FilmData } from 'src/app/interfaces/films';

@Component({
  selector: 'app-films-dialog',
  templateUrl: './films-dialog.component.html',
  styleUrls: ['./films-dialog.component.css']
})
export class FilmsDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: FilmData) { }

  ngOnInit(): void {
  }

}
