import { Routes } from '@angular/router';
import { Inicio } from './cliente/inicio/inicio';
import { Login } from './login/login';
import { NovaSolicitacaoComponent } from './pages/Cliente/nova-solicitacao';
import { DadosSolicitacao } from './pages/dados-solicitacao';
import { ListarSolicitacoesComponent } from './pages/listar-solicitacoes';
import { Relatorio } from './pages/tela-relatorio/relatorio';
import { Component } from '@angular/core';
import { OrcamentoClien } from './cli/orcamento-clien/orcamento-clien';
import { PagarComponent } from './cli/pagar/pagar.component';

export const routes: Routes = [
  {
    path: 'cliente/inicio',
    component: Inicio
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'cliente/nova-solicitacao',
    component: NovaSolicitacaoComponent
  },
  {
    path: 'funcionario/dados-solicitacao',
    component: DadosSolicitacao
  },
  {
    path: 'funcionario/listar-solicitacoes',
    component: ListarSolicitacoesComponent
  },
  {
    path: 'funcionario/relatorio',
    component: Relatorio
  },

  {
    path: 'orcamento',
    component: OrcamentoClien
  },

  {
    path: 'pagamento',
    component: PagarComponent
  }
];