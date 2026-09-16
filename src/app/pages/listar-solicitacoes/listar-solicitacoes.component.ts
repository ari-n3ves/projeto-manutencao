import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-solicitacoes',
  imports: [],
  templateUrl: './listar-solicitacoes.component.html',
  styleUrl: './listar-solicitacoes.component.css',
})
export class ListarSolicitacoesComponent {
  solicitacoes = [
    {
      data: '12/08/2026 16:40',
      equipamento: 'Celular Motorola',
      estado: 'ABERTA'
    }
  ]
}
