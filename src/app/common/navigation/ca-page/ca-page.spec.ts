import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaPage } from './ca-page';

describe('CaPage', () => {
  let component: CaPage;
  let fixture: ComponentFixture<CaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
