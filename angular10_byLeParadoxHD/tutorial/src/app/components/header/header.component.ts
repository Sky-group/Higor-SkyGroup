import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tut-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  constructor() {
    console.log('criado header')
   }

  ngOnInit() {
    console.log('header já criado')
  }

  arrayNumeros = [1,2,3,4,5,6,7,8,9]

  add() {
    this.arrayNumeros.push(Math.random())
  }

}
