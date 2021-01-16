import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Line6Component } from './line6.component';

describe('Line6Component', () => {
  let component: Line6Component;
  let fixture: ComponentFixture<Line6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Line6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Line6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
