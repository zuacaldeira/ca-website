import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaNavMobile } from './ca-nav-mobile';

describe('CaNavMobile', () => {
  let component: CaNavMobile;
  let fixture: ComponentFixture<CaNavMobile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaNavMobile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaNavMobile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
