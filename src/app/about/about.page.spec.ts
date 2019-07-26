import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { aboutPage } from './about.page';

describe('aboutPage', () => {
  let component: aboutPage;
  let fixture: ComponentFixture<aboutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [aboutPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(aboutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
