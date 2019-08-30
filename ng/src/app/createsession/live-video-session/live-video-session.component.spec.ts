import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveVideoSessionComponent } from './live-video-session.component';

describe('LiveVideoSessionComponent', () => {
  let component: LiveVideoSessionComponent;
  let fixture: ComponentFixture<LiveVideoSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveVideoSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveVideoSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
