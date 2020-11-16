import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftPage } from './gift.page';

describe('GiftPage', () => {
  let component: GiftPage;
  let fixture: ComponentFixture<GiftPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
