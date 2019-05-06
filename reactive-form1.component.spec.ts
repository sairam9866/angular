import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveForm1Component } from './reactive-form1.component';

describe('ReactiveForm1Component', () => {
  let component: ReactiveForm1Component;
  let fixture: ComponentFixture<ReactiveForm1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveForm1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
