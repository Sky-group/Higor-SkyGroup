import { Component } from '@angular/core';
import { Usuario, UserType } from './others/interfaces'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Youtube';

  user:Usuario = <Usuario> {
    ID: 1,
    Nome: "Bat",
    Sobrenome: "Man",
    Email: "batman@gmail.com",
    Nick: "Morcego",
    Senha: "tantofaz",
    Tipo: UserType.Admin
  }

}
