import { Component } from '@angular/core';
import { Help } from './components/help/shared/help';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tutorialmodal';
  Help = Help;
}
