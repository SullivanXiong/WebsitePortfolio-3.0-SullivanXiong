import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchooleportfoliosComponent } from './schooleportfolios.component';

describe('SchooleportfoliosComponent', () => {
  let component: SchooleportfoliosComponent;
  let fixture: ComponentFixture<SchooleportfoliosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchooleportfoliosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchooleportfoliosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
