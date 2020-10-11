import { ContentChild, Directive, ElementRef, HostListener, Input, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HelpDialogComponent } from '../components/help-dialog/help-dialog.component';

@Directive({
  selector: '[helpInfo]'
})
export class HelpDirective implements OnInit {

  @Input() tipo: string;
  @Input() info: string;

  constructor(
    private dialog: MatDialog, 
    private renderer: Renderer2, 
    private elementRef: ElementRef) {
  }

  @HostListener('click', ['$event'])
  onClickHandler(event: MouseEvent) {

    if(this.tipo === "modal"){
      this.dialog.open(HelpDialogComponent,
        {
          data: { tipo: this.tipo, info: this.info }
        });
    }
    
  }
  

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: MouseEvent) {

    if(this.tipo === "tooltip") {
      const div = this.renderer.createElement('div');
      const text = this.renderer.createText(this.info);
      this.renderer.addClass(div, 'tooltip')
      this.renderer.appendChild(div, text);
      this.renderer.appendChild(this.elementRef.nativeElement, div);
    }
    
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: MouseEvent) {

    if(this.tipo === "tooltip") {
      const tooltip = this.elementRef.nativeElement.querySelector('.tooltip');
      if(tooltip != null) {
        this.renderer.removeChild(this.elementRef.nativeElement, tooltip);
      }
    }
    
  }

  ngOnInit() {
  }

}