import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaNavDesktop } from './ca-nav-desktop';

describe('CaNavDesktop', () => {
  let component: CaNavDesktop;
  let fixture: ComponentFixture<CaNavDesktop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaNavDesktop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaNavDesktop);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
