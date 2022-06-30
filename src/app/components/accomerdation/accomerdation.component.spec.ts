import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomerdationComponent } from './accomerdation.component';

describe('AccomerdationComponent', () => {
  let component: AccomerdationComponent;
  let fixture: ComponentFixture<AccomerdationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccomerdationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccomerdationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
