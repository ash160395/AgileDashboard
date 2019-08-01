import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgileTeamsComponent } from './agile-teams.component';

describe('AgileTeamsComponent', () => {
  let component: AgileTeamsComponent;
  let fixture: ComponentFixture<AgileTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgileTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgileTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
