import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPreview } from './team-preview';

describe('TeamPreview', () => {
  let component: TeamPreview;
  let fixture: ComponentFixture<TeamPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamPreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamPreview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
