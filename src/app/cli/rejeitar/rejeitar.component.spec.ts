import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejeitarComponent } from './rejeitar.component';

describe('RejeitarComponent', () => {
  let component: RejeitarComponent;
  let fixture: ComponentFixture<RejeitarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RejeitarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RejeitarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
