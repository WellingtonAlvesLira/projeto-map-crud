import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioMapComponent } from './funcionario-map.component';

describe('FuncionarioMapComponent', () => {
  let component: FuncionarioMapComponent;
  let fixture: ComponentFixture<FuncionarioMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionarioMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
