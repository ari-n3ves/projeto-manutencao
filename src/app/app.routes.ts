import { Routes } from '@angular/router';
import { Inicio } from './cliente/inicio/inicio';
import { Login } from './login/login';
import { DadosSolicitacao } from './pages/dados-solicitacao';
import { ListarSolicitacoesComponent } from './pages/listar-solicitacoes';
import { Relatorio } from './pages/tela-relatorio/relatorio';
import { Component } from '@angular/core';
import { OrcamentoClien } from './cli/orcamento-clien/orcamento-clien';

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
  }

  {
    path: 'orcamento',
    component: OrcamentoClien
  }
];