import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaLogoText } from './ca-logo-text';

describe('CaLogoText', () => {
  let component: CaLogoText;
  let fixture: ComponentFixture<CaLogoText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaLogoText]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaLogoText);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
