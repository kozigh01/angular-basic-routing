import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcomponent21Component } from './subcomponent2-1.component';

describe('Subcomponent21Component', () => {
  let component: Subcomponent21Component;
  let fixture: ComponentFixture<Subcomponent21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subcomponent21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subcomponent21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
