import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarComponentFertilitat } from './bar.fertilitat.component';

describe('BarComponent', () => {
  let component: BarComponentFertilitat;
  let fixture: ComponentFixture<BarComponentFertilitat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarComponentFertilitat ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarComponentFertilitat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
