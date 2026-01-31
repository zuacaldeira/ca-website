import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaDesktopMenuItems } from './ca-desktop-menu-items';

describe('CaDesktopMenuItems', () => {
  let component: CaDesktopMenuItems;
  let fixture: ComponentFixture<CaDesktopMenuItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaDesktopMenuItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaDesktopMenuItems);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
