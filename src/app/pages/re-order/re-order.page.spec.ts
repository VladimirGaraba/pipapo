import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReOrderPage } from './re-order.page';

describe('ReOrderPage', () => {
  let component: ReOrderPage;
  let fixture: ComponentFixture<ReOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReOrderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
