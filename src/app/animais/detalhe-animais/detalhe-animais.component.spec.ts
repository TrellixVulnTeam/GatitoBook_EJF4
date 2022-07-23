import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheAnimaisComponent } from './detalhe-animais.component';

describe('DetalheAnimaisComponent', () => {
  let component: DetalheAnimaisComponent;
  let fixture: ComponentFixture<DetalheAnimaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheAnimaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheAnimaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
