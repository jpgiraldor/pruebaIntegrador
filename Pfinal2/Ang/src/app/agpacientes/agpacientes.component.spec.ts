import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgpacientesComponent } from './agpacientes.component';

describe('AgpacientesComponent', () => {
  let component: AgpacientesComponent;
  let fixture: ComponentFixture<AgpacientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgpacientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgpacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
