import { Component, OnInit } from '@angular/core';
import { Specie } from 'src/app/interfaces/species';
import { SpeciesService } from 'src/app/services/species.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  speciesList: Specie[]=[];
  pages: number = 0;

  constructor(private specieService: SpeciesService) { }

  ngOnInit(): void {
    this.getSpeciePage(1);
  }

  getSpeciePage(id: number){

    this.specieService.getSpecies(id).subscribe( resp => {
      this.speciesList = resp.results;
      this.pages = Math.ceil(resp.count / 10);
    });
  }

  getPhotoUrl(specie: Specie){

    let id = specie.url.split('/').reverse()[1];
    return `https://starwars-visualguide.com/assets/img/species/${id}.jpg`
  }

  errorPhoto(){
    return 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png'
  }

  counter(){
    return new Array(this.pages);
  }



}
