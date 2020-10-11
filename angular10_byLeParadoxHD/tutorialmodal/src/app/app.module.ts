import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HelpButtonComponent } from './components/help-button/help-button.component';

import { MaterialModule } from './material.module';
import { HelpDirective } from './directives/help-info.directive';

@NgModule({
  declarations: [
    AppComponent,
    HelpButtonComponent,
    HelpDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
