import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Planet } from 'src/app/interfaces/planets';
import { PlanetsService } from 'src/app/services/planets.service';
import { PlanetsDialogComponent } from './planets-dialog/planets-dialog.component';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  
  planetsList: Planet[]=[];
  pages: number = 0;
  planetSelected: Planet | undefined;

  constructor(private planetsService: PlanetsService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getPlanetPage(1);
  }

  getPlanetPage(id: number){
    this.planetsService.getPlanet(id).subscribe(resp => {
      this.planetsList = resp.results;
      this.pages = Math.ceil(resp.count / 10);
    });
  }

  getPhotoUrl(planet: Planet){
    let id = planet.url.split('/').reverse()[1];
    return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
  }

  counter(){
    return new Array(this.pages);
  }


  showPlanetInfo(planet: Planet){
    this.planetsService.getPlanetById(planet).subscribe(response =>{
      this.planetSelected = response;

      this.dialog.open(PlanetsDialogComponent, {
        width: '250px',
        enterAnimationDuration: '3000ms',
        exitAnimationDuration: '1500ms',
        data:{
          planetInfo: this.planetSelected
        }
      })
    })
  }
}
