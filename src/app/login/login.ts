import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    RouterModule,
    FormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email = '';
  senha = '';

  perfil: 'cliente' | 'funcionario' = 'cliente';

  private router = inject(Router);

  selecionarPerfil(perfil: 'cliente' | 'funcionario') {
    this.perfil = perfil;
  }

  entrar() {
    if (this.perfil === 'cliente') {
      this.router.navigate(['/cliente/inicio']);
    } else {
      this.router.navigate(['/funcionario/inicio']);
    }
  }

}