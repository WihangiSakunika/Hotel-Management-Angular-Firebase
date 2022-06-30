import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellnessComponent } from './wellness.component';

describe('WellnessComponent', () => {
  let component: WellnessComponent;
  let fixture: ComponentFixture<WellnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellnessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WellnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
