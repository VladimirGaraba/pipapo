import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusResultComponent } from './bonus-result.component';

describe('BonusResultComponent', () => {
  let component: BonusResultComponent;
  let fixture: ComponentFixture<BonusResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonusResultComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
