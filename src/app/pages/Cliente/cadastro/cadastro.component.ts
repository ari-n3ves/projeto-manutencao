import { Component, ViewChild, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [
    FormsModule,
    RouterModule
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  @ViewChild('formCadastro')
  formulario!: NgForm;

  cliente = {
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: ''
  };

  private router = inject(Router);

  cadastrar() {
    console.log(this.cliente);

    alert('Cadastro realizado com sucesso!');

    this.router.navigate(['/login']);
  }

  voltar() {
    this.router.navigate(['/login']);
  }

}