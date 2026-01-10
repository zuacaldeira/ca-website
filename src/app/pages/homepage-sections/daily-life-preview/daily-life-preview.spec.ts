import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyLifePreview } from './daily-life-preview';

describe('DailyLifePreview', () => {
  let component: DailyLifePreview;
  let fixture: ComponentFixture<DailyLifePreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyLifePreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyLifePreview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
