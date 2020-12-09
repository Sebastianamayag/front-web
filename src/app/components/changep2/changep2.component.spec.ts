import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Changep2Component } from './changep2.component';

describe('Changep2Component', () => {
  let component: Changep2Component;
  let fixture: ComponentFixture<Changep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Changep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Changep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
