import { Routes } from '@angular/router';

import { Inicio } from './cliente/inicio/inicio';
import { OrcamentoClien } from './cli/orcamento-clien/orcamento-clien';
import { OrcamentoFunc } from './features/orcamento-func/orcamento-func';
import { DadosSolicitacao } from './pages/dados-solicitacao/dados-solicitacao';

export const routes: Routes = [
  {
    path: 'cliente/inicio',
    component: Inicio
  },
  {
    path: 'orcamento-cliente',
    component: OrcamentoClien
  },
  {
    path: 'orcamento-funcionario',
    component: OrcamentoFunc
  },
  {
    path: 'dados-solicitacao',
    component: DadosSolicitacao
  }
];