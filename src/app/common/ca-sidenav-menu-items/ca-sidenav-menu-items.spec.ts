import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaSidenavMenuItems } from './ca-sidenav-menu-items';

describe('CaSidenavMenuItems', () => {
  let component: CaSidenavMenuItems;
  let fixture: ComponentFixture<CaSidenavMenuItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaSidenavMenuItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaSidenavMenuItems);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
