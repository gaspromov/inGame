import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringSideBarComponent } from './monitoring-side-bar.component';

describe('MonitoringSideBarComponent', () => {
  let component: MonitoringSideBarComponent;
  let fixture: ComponentFixture<MonitoringSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitoringSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoringSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
