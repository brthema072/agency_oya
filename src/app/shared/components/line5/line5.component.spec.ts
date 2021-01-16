import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Line5Component } from './line5.component';

describe('Line5Component', () => {
  let component: Line5Component;
  let fixture: ComponentFixture<Line5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Line5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Line5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
