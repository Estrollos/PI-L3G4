import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateCom } from './dateCom';

describe('DateCom', () => {
  let component: DateCom;
  let fixture: ComponentFixture<DateCom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateCom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateCom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
