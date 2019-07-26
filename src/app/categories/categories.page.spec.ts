import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { categoriesPage } from './categories.page';

describe('categoriesPage', () => {
  let component: categoriesPage;
  let fixture: ComponentFixture<categoriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [categoriesPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(categoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
