import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DadosSolicitacao } from './pages/dados-solicitacao';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DadosSolicitacao],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}