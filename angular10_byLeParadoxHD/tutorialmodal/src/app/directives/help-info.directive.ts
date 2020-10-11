import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[helpInfo]'
})
export class HelpDirective implements OnInit {

  @Input() tipo: string;
  @Input() info: string;

  constructor(private elementRef: ElementRef) {
  }

  @HostListener('click', ['$event'])
  onClickHandler(event: MouseEvent) {
    console.log("Click: ", this.tipo, this.info);
  }

  ngOnInit() {
  }

}
