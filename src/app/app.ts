import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DadosSolicitacao } from './pages/dados-solicitacao';
import { ListarSolicitacoesComponent } from './pages/listar-solicitacoes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DadosSolicitacao, ListarSolicitacoesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}