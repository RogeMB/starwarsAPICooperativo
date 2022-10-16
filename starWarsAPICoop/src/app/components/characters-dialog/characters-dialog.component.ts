import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CharacterData } from 'src/app/interfaces/characters';


@Component({
  selector: 'app-characters-dialog',
  templateUrl: './characters-dialog.component.html',
  styleUrls: ['./characters-dialog.component.css']
})
export class CharactersDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: CharacterData) { }
  
  ngOnInit(): void {
  }
 
}
