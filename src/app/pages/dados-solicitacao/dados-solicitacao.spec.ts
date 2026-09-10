import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosSolicitacao } from './dados-solicitacao';

describe('DadosSolicitacao', () => {
  let component: DadosSolicitacao;
  let fixture: ComponentFixture<DadosSolicitacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosSolicitacao],
    }).compileComponents();

    fixture = TestBed.createComponent(DadosSolicitacao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
