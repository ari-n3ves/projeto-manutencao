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
  pagamento = '200,00';

  pagarModal = false;
  cancelarModal = false;

  cancelar(){
    this.cancelarModal = true;
  }

  pagar(){
    this.pagarModal = true;
  }

  fechar(){
    this.cancelarModal = false;
    this.pagarModal = false;
  }

}
