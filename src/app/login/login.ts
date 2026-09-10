import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email = '';
  senha = '';

  entrar() {
    console.log('E-mail:', this.email);
    console.log('Senha:', this.senha);
  }

}