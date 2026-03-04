import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StallInfo } from './stall-info';

describe('StallInfo', () => {
  let component: StallInfo;
  let fixture: ComponentFixture<StallInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StallInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StallInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
