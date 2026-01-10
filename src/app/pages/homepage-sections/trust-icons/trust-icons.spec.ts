import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustIcons } from './trust-icons';

describe('TrustIcons', () => {
  let component: TrustIcons;
  let fixture: ComponentFixture<TrustIcons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrustIcons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrustIcons);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
