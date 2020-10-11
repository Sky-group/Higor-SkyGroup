import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { HelpDirective } from 'src/app/directives/help-info.directive';

@Component({
  selector: 'help-button',
  viewProviders: [HelpDirective],
  templateUrl: './help-button.component.html',
  styleUrls: ['./help-button.component.scss']
})
export class HelpButtonComponent {

  constructor(private dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(HelpDialog);
  }

}


@Component({
  selector: 'help-dialog',
  templateUrl: 'help-dialog.html',
})
export class HelpDialog {}