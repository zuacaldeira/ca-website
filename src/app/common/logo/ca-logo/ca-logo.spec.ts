import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaLogo } from './ca-logo';

describe('CaLogo', () => {
  let component: CaLogo;
  let fixture: ComponentFixture<CaLogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaLogo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaLogo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
