import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFluxComponent } from './add-flux.component';

describe('AddFluxComponent', () => {
  let component: AddFluxComponent;
  let fixture: ComponentFixture<AddFluxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFluxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFluxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
