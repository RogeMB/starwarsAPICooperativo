import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImportsMaterialModule } from './imports-material/imports-material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ImportsMaterialModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
