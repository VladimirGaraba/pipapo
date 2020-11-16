import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusPointComponent } from './bonus-point.component';

describe('BonusPointComponent', () => {
  let component: BonusPointComponent;
  let fixture: ComponentFixture<BonusPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonusPointComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
