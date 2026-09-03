import { Routes } from '@angular/router';

import { Inicio } from './cliente/inicio/inicio';
import { Login } from './login/login';
import { DadosSolicitacao } from './pages/dados-solicitacao';

export const routes: Routes = [
  {
    path: 'cliente/inicio',
    component: Inicio
  },
  {
    path: 'login',
    component: Login
    path: 'page/dados-solicitacao',
    component: DadosSolicitacao
  }
];