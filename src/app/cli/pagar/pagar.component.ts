import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pagar',
  imports: [RouterModule],
  templateUrl: './pagar.component.html',
  styleUrl: './pagar.component.css',
})
export class PagarComponent {
  equipamento ='Notebook Dell';
  categoria = 'Notebook';
  defeito = 'Tela Rachada';
  pagamento = 'R$200,00';

  pagarModal = false;
  cancelarModal = false;

  fechar(){
    this.cancelarModal = false;
  }

}
