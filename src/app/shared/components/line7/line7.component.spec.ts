import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Line7Component } from './line7.component';

describe('Line7Component', () => {
  let component: Line7Component;
  let fixture: ComponentFixture<Line7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Line7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Line7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
