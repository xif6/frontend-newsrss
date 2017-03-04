import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxesComponent } from './fluxes.component';

describe('FluxesComponent', () => {
  let component: FluxesComponent;
  let fixture: ComponentFixture<FluxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
