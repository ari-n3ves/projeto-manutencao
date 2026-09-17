import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-orcamento-clien',
  imports: [RouterModule, RouterLink],
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

  aprovar(){
    this.aprovarModal = true;
  }

   rejeitar(){
    this.rejeitarModal = true;
  }

  fechar(){
    this.aprovarModal = false;
    this.rejeitarModal = false;
  }


}
