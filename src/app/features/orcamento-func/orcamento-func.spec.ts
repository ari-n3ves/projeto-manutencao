import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcamentoFunc } from './orcamento-func';

describe('OrcamentoFunc', () => {
  let component: OrcamentoFunc;
  let fixture: ComponentFixture<OrcamentoFunc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrcamentoFunc],
    }).compileComponents();

    fixture = TestBed.createComponent(OrcamentoFunc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
