import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app/app.component';
import { CampoDinamicoComponent } from './components/campo-dinamico/campo-dinamico.component';

@NgModule({
  declarations: [
    AppComponent,
    CampoDinamicoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
