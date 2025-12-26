import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaLogoIcon } from './ca-logo-icon';

describe('CaLogoIcon', () => {
  let component: CaLogoIcon;
  let fixture: ComponentFixture<CaLogoIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaLogoIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaLogoIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
