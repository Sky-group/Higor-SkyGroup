import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campo-dinamico',
  templateUrl: './campo-dinamico.component.html',
  styleUrls: ['./campo-dinamico.component.scss']
})
export class CampoDinamicoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  titulo: string = ''

}
