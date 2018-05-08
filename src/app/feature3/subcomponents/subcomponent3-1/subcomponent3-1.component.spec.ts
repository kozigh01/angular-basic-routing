import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcomponent31Component } from './subcomponent3-1.component';

describe('Subcomponent31Component', () => {
  let component: Subcomponent31Component;
  let fixture: ComponentFixture<Subcomponent31Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subcomponent31Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subcomponent31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
