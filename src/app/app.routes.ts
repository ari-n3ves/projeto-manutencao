import { Routes } from '@angular/router';
import { Inicio } from './cliente/inicio/inicio';
import { Login } from './login/login';
import { NovaSolicitacaoComponent } from './pages/Cliente/nova-solicitacao';
import { DadosSolicitacao } from './pages/dados-solicitacao';
import { ListarSolicitacoesComponent } from './pages/listar-solicitacoes';
import { Relatorio } from './pages/tela-relatorio/relatorio';
import { CadastroComponent } from './pages/Cliente/cadastro';
import { Component } from '@angular/core';
import { OrcamentoClien } from './cli/orcamento-clien/orcamento-clien';
import { PagarComponent } from './cli/pagar/pagar.component';
import { InicioFuncionarioComponent } from './pages/inicio-funcionario/inicio-funcionario.component';

export const routes: Routes = [
  {
    path: '',
    component: Login
  },
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
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'cliente/orcamento',
    component: OrcamentoClien
  },
  {
    path: 'cliente/pagamento',
    component: PagarComponent
  },
  {
    path: 'funcionario/inicio',
    component: InicioFuncionarioComponent
  }
];