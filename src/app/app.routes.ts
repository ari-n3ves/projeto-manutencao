import { Routes } from '@angular/router';

import { Inicio } from './cliente/inicio/inicio';
import { DadosSolicitacao } from './pages/dados-solicitacao';

export const routes: Routes = [
  {
    path: 'cliente/inicio',
    component: Inicio
  },
  {
    path: 'page/dados-solicitacao',
    component: DadosSolicitacao
  }
];