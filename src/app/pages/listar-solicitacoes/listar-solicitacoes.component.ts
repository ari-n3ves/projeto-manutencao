import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-solicitacoes',
  imports: [RouterModule],
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
