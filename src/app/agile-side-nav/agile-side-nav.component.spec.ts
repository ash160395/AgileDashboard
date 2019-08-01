import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgileSideNavComponent} from './agile-side-nav.component';

describe('AgileSideNavComponent', () => {
  let component: AgileSideNavComponent;
  let fixture: ComponentFixture<AgileSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgileSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgileSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

