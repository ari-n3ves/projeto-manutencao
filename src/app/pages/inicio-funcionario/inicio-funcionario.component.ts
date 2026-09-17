import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio-funcionario',
  imports: [RouterModule],
  templateUrl: './inicio-funcionario.component.html',
  styleUrl: './inicio-funcionario.component.css'
})
export class InicioFuncionarioComponent {

  solicitacoes = [
    {
      data: '19/08/2026 14:30',
      cliente: 'João Silva',
      equipamento: 'Notebook Dell Inspiron',
      estado: 'ABERTA'
    },
    {
      data: '19/08/2026 10:20',
      cliente: 'Joana Oliveira',
      equipamento: 'Impressora HP LaserJet',
      estado: 'ABERTA'
    },
    {
      data: '18/08/2026 16:45',
      cliente: 'José Santos',
      equipamento: 'Computador Lenovo',
      estado: 'ABERTA'
    },
    {
      data: '18/08/2026 09:15',
      cliente: 'Joaquina Souza',
      equipamento: 'Monitor Samsung',
      estado: 'ABERTA'
    }
  ];

}