import { Component, OnInit } from '@angular/core';
import { Starship } from 'src/app/interfaces/starships';
import { StarshipsService } from 'src/app/services/starships.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  starshipList: Starship[]=[];
  pages: number = 0;

  constructor(private starshipService: StarshipsService) { }

  ngOnInit(): void {
    this.getStarshipPage(1);
  }

  getStarshipPage(id: number){

    return this.starshipService.getStarships(id).subscribe(resp => {
      this.starshipList = resp.results;
      this.pages = Math.ceil(resp.count / 10);
    });
  }

  getPhotoUrl(starship: Starship){

    let id = starship.url.split('/').reverse()[1];
    let link = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

    return link;
  }

  errorPhoto(){
    return 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png'
  }

  counter(){
    return new Array(this.pages);
  }

}
