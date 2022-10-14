import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImportsMaterialModule } from './imports-material/imports-material.module';
import { MenuComponent } from './components/menu/menu.component';
import { SpeciesComponent } from './components/species/species.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SpeciesComponent
  ],
  imports: [
    ImportsMaterialModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
