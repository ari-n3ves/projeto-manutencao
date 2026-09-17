import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioFuncionarioComponent } from './inicio-funcionario.component';

describe('InicioFuncionarioComponent', () => {
  let component: InicioFuncionarioComponent;
  let fixture: ComponentFixture<InicioFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioFuncionarioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InicioFuncionarioComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
