import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcomponent22Component } from './subcomponent2-2.component';

describe('Subcomponent22Component', () => {
  let component: Subcomponent22Component;
  let fixture: ComponentFixture<Subcomponent22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subcomponent22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subcomponent22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
