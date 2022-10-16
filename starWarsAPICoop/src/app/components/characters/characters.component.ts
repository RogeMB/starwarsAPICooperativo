import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Character, CharacterResult } from 'src/app/interfaces/characters';
import { CharacterService } from 'src/app/services/characters.service';
import { CharactersDialogComponent } from './characters-dialog/characters-dialog.component';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characterList:  Character[] = [];
  pages: number = 0;
  characterSelected: Character | undefined;

  constructor(private characterService: CharacterService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCharacterPage(1);
  }

  getCharacterPage(id: number){

    this.characterService.getCharacters(id).subscribe(resp => {
      this.characterList = resp.results;
      this.pages = Math.ceil(resp.count / 10);
    });
  }

  getPhotoUrl(character: Character){

    let id = character.url.split('/').reverse()[1];
    let link = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;

    return link;

  }

  errorPhoto(){
    return 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png';
  }


  counter(){
    return new Array(this.pages);
  }

  showCharacterInfo(character: Character){
    this.characterService.getCharacterById(character).subscribe(response =>{
      this.characterSelected = response;

      this.dialog.open(CharactersDialogComponent, {
        width: '250px',
        enterAnimationDuration: '3000ms',
        exitAnimationDuration: '1500ms',
        data:{
          characterInfo: this.characterSelected
        }
      })
    })
  }

}
