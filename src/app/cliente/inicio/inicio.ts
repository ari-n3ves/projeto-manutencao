import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {
  solicitacoes = [
    {
      data: '19/08/2026 14:30',
      equipamento: 'Notebook Dell',
      estado: 'ORÇADA'
    },
    {
      data: '18/08/2026 10:15',
      equipamento: 'Impressora HP',
      estado: 'ARRUMADA'
    },
    {
      data: '17/08/2026 16:40',
      equipamento: 'Computador Lenovo',
      estado: 'REJEITADA'
    },
    {
      data: '15/08/2026 09:20',
      equipamento: 'Monitor Samsung',
      estado: 'ABERTA'
    }
  ];
}