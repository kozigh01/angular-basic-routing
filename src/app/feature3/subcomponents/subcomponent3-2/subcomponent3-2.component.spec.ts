import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcomponent32Component } from './subcomponent3-2.component';

describe('Subcomponent32Component', () => {
  let component: Subcomponent32Component;
  let fixture: ComponentFixture<Subcomponent32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subcomponent32Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subcomponent32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
