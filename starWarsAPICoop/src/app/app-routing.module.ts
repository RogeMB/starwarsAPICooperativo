import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { MenuComponent } from './components/menu/menu.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SpeciesComponent } from './components/species/species.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';

const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: 'characters', component: CharactersComponent},
  {path: 'characters', component: CharactersComponent},
  {path: 'characters', component: CharactersComponent},
  {path: 'species', component: SpeciesComponent},
  {path: 'starships', component: StarshipsComponent},
  {path: 'vehicles', component: VehiclesComponent},

  {path: '', redirectTo: '/menu', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
