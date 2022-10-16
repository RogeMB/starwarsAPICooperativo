import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImportsMaterialModule } from './imports-material/imports-material.module';
import { MenuComponent } from './components/menu/menu.component';
import { SpeciesComponent } from './components/species/species.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CharactersDialogComponent } from './components/characters-dialog/characters-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SpeciesComponent,
    PageNotFoundComponent,
    StarshipsComponent,
    VehiclesComponent,
    CharactersComponent,
    CharactersDialogComponent
  ],
  imports: [
    ImportsMaterialModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
