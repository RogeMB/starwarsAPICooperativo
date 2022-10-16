import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Film } from 'src/app/interfaces/films';
import { FilmsService } from 'src/app/services/films.service';
import { FilmsDialogComponent } from './films-dialog/films-dialog.component';


@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  filmsList: Film[]=[];
  pages: number = 0;
  filmSelected: Film | undefined;

  constructor(private filmsService: FilmsService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getFilmPage(1);
  }

  getFilmPage(id: number){
    this.filmsService.getFilms(id).subscribe(resp => {
      this.filmsList = resp.results;
      this.pages = Math.ceil(resp.count / 10);
    });
  }

  getPhotoUrl(film: Film){
    let id = film.url.split('/').reverse()[1];
    return `https://starwars-visualguide.com/assets/img/films/${id}.jpg`
  }

  counter(){
    return new Array(this.pages);
  }


  showFilmInfo(film: Film){
    this.filmsService.getFilmById(film).subscribe(response =>{
      this.filmSelected = response;

      this.dialog.open(FilmsDialogComponent, {
        width: '250px',
        enterAnimationDuration: '3000ms',
        exitAnimationDuration: '1500ms',
        data:{
          filmInfo: this.filmSelected
        }
      })
    })
  }
}
