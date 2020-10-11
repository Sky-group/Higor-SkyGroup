import { Component, Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HelpDialogComponent } from '../components/help-dialog/help-dialog.component';

@Directive({
  selector: '[helpInfo]'
})
export class HelpDirective implements OnInit {

  @Input() tipo: string;
  @Input() info: string;

  constructor(private dialog: MatDialog) {
  }

  @HostListener('click', ['$event'])
  onClickHandler(event: MouseEvent) {
    console.log("Click: ", this.tipo, this.info, event);
    
    this.dialog.open(HelpDialogComponent,
      {
        data: { tipo: this.tipo, info: this.info }
      });
  }

  ngOnInit() {
  }

}