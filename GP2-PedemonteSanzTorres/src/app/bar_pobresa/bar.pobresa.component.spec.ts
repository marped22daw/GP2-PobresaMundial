import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarComponentPobresa } from './bar.pobresa.component';

describe('BarComponent', () => {
  let component: BarComponentPobresa;
  let fixture: ComponentFixture<BarComponentPobresa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarComponentPobresa ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarComponentPobresa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
