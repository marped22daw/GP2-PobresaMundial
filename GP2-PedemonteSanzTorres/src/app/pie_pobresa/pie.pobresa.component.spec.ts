import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieComponentPobresa } from './pie.pobresa.component';

describe('PieComponent', () => {
  let component: PieComponentPobresa;
  let fixture: ComponentFixture<PieComponentPobresa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieComponentPobresa ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieComponentPobresa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
