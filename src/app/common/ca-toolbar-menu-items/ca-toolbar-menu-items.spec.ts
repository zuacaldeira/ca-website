import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaToolbarMenuItems } from './ca-toolbar-menu-items';

describe('CaToolbarMenuItems', () => {
  let component: CaToolbarMenuItems;
  let fixture: ComponentFixture<CaToolbarMenuItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaToolbarMenuItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaToolbarMenuItems);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
