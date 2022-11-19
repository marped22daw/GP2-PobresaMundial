import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarComponentEspervida } from './bar.espervida.component';

describe('BarComponent', () => {
  let component: BarComponentEspervida;
  let fixture: ComponentFixture<BarComponentEspervida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarComponentEspervida ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarComponentEspervida);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
