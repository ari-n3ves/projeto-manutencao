import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcamentoClien } from './orcamento-clien';

describe('OrcamentoClien', () => {
  let component: OrcamentoClien;
  let fixture: ComponentFixture<OrcamentoClien>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrcamentoClien],
    }).compileComponents();

    fixture = TestBed.createComponent(OrcamentoClien);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
