import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UeberUns } from './ueber-uns';

describe('UeberUns', () => {
  let component: UeberUns;
  let fixture: ComponentFixture<UeberUns>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UeberUns]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UeberUns);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
