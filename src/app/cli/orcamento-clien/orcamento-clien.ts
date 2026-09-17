import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-orcamento-clien',
  imports: [RouterModule],
  templateUrl: './orcamento-clien.html',
  styleUrl: './orcamento-clien.css',
})
export class OrcamentoClien {
  equipamento ='Notebook Dell';
  categoria = 'Notebook';
  defeito = 'Tela Rachada';
  valor = 'R$200,00';

  aprovarModal = false;
  rejeitarModal = false;

  fechar(){
    this.rejeitarModal = false;
  }
}
