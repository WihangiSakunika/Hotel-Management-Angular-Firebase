import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialWeddingComponent } from './special-wedding.component';

describe('SpecialWeddingComponent', () => {
  let component: SpecialWeddingComponent;
  let fixture: ComponentFixture<SpecialWeddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialWeddingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
